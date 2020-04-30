import Error from 'next/error'
import { useRouter } from 'next/router'

import fetchMatchApi from '../lib/fetchMatchApi'

import Nav from '../components/nav'
import Match from '../components/match'

const MATCH_ID = /^[0-9]+$/

export async function getStaticPaths () {
  return { paths: [], fallback: true }
}

export async function getStaticProps ({ params }) {
  const { match_id } = params

  if (match_id.length > 10 || !MATCH_ID.test(match_id)) {
    return { props: {} }
  }

  const url = `https://api.opendota.com/api/matches/${match_id}`

  try {
    const match_data = await fetchMatchApi(url)
    return { props: match_data ? { match_data } : {} }
  } catch (error) {
    console.error(error)
    return { props: {} }
  }
}

export default function MatchPage ({ match_data }) {
  const { isFallback } = useRouter()

  if (!isFallback && !match_data) {
    return <Error statusCode={404} title='This match could not be found' />
  }

  return (
    <>
      <Nav />
      <main className='container relative mt-8 mb-32' style={{ minHeight: '40vh' }}>
        <Match data={match_data} />
      </main>
    </>
  )
}
