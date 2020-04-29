import { fetchMatch } from './static-match/api'

export default async function fetchMatchApi (url) {
  const response = await fetchMatch(url)

  if (!response) return

  return response
}
