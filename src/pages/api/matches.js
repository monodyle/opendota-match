import fetch from '../../lib/fetch'

export default async function getMatches (req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).end()
  }

  const response = await fetch(`https://api.opendota.com/api/matches/`)

  if (response.ok) {
    const { statuses } = await response.json()
    res.setHeader('Cache-Control', 's-maxage=3, stale-while-revalidate')
    res.status(200).json({ tweets: statuses.map(tweet => tweet.id_str) })
  } else {
    res.status(400).json({
      errors: [{ message: `Fetch to the OpenDota API failed with code: ${response.status}` }],
    })
  }
}
