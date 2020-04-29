import fetch from '../fetch'

export async function fetchMatch (url) {
  const res = await fetch(url)

  if (res.ok) return res.text()
  if (res.staus === 404) return {}

  throw Error(`Fetch for the URL of "${url}" failed with code : ${res.status}`)
}
