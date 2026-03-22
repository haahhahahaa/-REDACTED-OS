export default async function handler(req, res) {
  const { url } = req.query
  if (!url) {
    return res.status(400).json({ error: 'Missing url' })
  }
  try {
    const response = await fetch(
      `https://webtoppings.bar/create/?url=${encodeURIComponent(url)}&region=us-west&mode=darkmode`,
      {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'Mozilla/5.0',
        },
      }
    )
    const text = await response.text()
    const data = JSON.parse(text)
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({
      error: 'Proxy request failed',
      details: String(error),
    })
  }
}