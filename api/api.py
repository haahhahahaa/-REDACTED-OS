from http.server import BaseHTTPRequestHandler
from urllib.parse import parse_qs, urlencode, urlparse, quote, unquote
from urllib.request import Request, urlopen
import json

class handler(BaseHTTPRequestHandler):
    def _set_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Range")
    def _send_json(self, status_code, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self._set_cors_headers()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)
    def do_OPTIONS(self):
        self.send_response(204)
        self._set_cors_headers()
        self.end_headers()
    def do_GET(self):
        parsed = urlparse(self.path)
        query = parse_qs(parsed.query)
        browser_url = (query.get("url", [""])[0] or "").strip()
        search_query = (query.get("q", [""])[0] or "").strip()
        search_filter = (query.get("f", [""])[0] or "").strip()
        video_id = (query.get("v", [""])[0] or "").strip()
        stream_url = (query.get("stream", [""])[0] or "").strip()

        if stream_url:
            try:
                decoded_url = unquote(stream_url)
                if not decoded_url.startswith("http"):
                    self._send_json(400, {"error": "Invalid stream URL"})
                    return
                upstream_headers = {"User-Agent": "Mozilla/5.0"}
                range_header = self.headers.get("Range")
                if range_header:
                    upstream_headers["Range"] = range_header
                req = Request(decoded_url, headers=upstream_headers)
                with urlopen(req, timeout=30) as resp:
                    self.send_response(resp.status)
                    self._set_cors_headers()
                    for header_name in ["Content-Type", "Content-Length", "Content-Range", "Accept-Ranges", "Cache-Control"]:
                        header_value = resp.headers.get(header_name)
                        if header_value:
                            self.send_header(header_name, header_value)
                    self.end_headers()
                    while True:
                        chunk = resp.read(64 * 1024)
                        if not chunk:
                            break
                        self.wfile.write(chunk)
                return
            except Exception as error:
                self._send_json(502, {"error": "Stream proxy failed", "details": str(error)})
                return

        if browser_url:
            try:
                target = (
                    "https://webtoppings.bar/create/"
                    f"?url={quote(browser_url, safe='')}&region=us-west&mode=darkmode"
                )
                req = Request(
                    target,
                    headers={
                        "Accept": "application/json",
                        "User-Agent": "Mozilla/5.0",
                    },
                )
                with urlopen(req, timeout=20) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                    self._send_json(resp.status, data)
                return
            except Exception as error:
                self._send_json(500, {"error": "Proxy request failed", "details": str(error)})
                return
            
        if search_query:
            try:
                params = {"q": search_query}
                if search_filter:
                    params["f"] = search_filter
                upstream_url = f"https://api.ytify.workers.dev/search?{urlencode(params)}"
                req = Request(upstream_url, headers={"User-Agent": "Mozilla/5.0"})
                with urlopen(req, timeout=20) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                    self._send_json(resp.status, data)
                return
            except Exception as error:
                self._send_json(500, {"error": str(error) or "Search proxy failed"})
                return
            
        if video_id:
            try:
                upstream_url = f"https://verome-api.deno.dev/api/stream?id={quote(video_id, safe='')}"
                req = Request(upstream_url, headers={"User-Agent": "Mozilla/5.0"})
                with urlopen(req, timeout=20) as resp:
                    stream_data = json.loads(resp.read().decode("utf-8"))
                self._send_json(200, stream_data)
                return
            except Exception as error:
                self._send_json(500, {"error": str(error)})
                return

        self._send_json(
            400,
            {
                "error": "Missing parameters. Use ?url=URL for browser proxy, ?q=QUERY for search, or ?v=VIDEO_ID for audio."
            },
        )
