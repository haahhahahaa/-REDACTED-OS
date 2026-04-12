import { execSync } from 'child_process';

export default function handler(req, res) {
  const { v: videoId } = req.query;
  if (!videoId) {
    return res.status(400).json({ error: 'Missing video ID. Use ?v=VIDEO_ID' });
  }
  try {
    const output = execSync(
      `yt-dlp -f bestaudio -j https://www.youtube.com/watch?v=${videoId}`,
      { encoding: 'utf-8', timeout: 30000 }
    );
    const data = JSON.parse(output);
    const url = data.url;
    const title = data.title;
    if (url) {
      return res.status(200).json({
        video_id: videoId,
        title,
        url
      });
    } else {
      return res.status(404).json({ error: 'No audio URL found' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}