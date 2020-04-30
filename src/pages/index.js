import fetchMatchApi from '../lib/fetchMatchApi'

import Nav from '../components/nav'
import Match from '../components/match'

export async function getStaticProps () {
  const url = 'https://api.opendota.com/api/matches/5386134771'
  const match_data = await fetchMatchApi(url)

  return { props: { match_data } }
}

const Home = ({ match_data }) => {
  return (
    <>
      <Nav />
      <main className='container relative mt-8 mb-32' style={{ minHeight: '40vh' }}>
        <Match data={match_data} />
        <div className='relative mt-10 transform -translate-x-1/2 left-1/2'>
          <div className='container flex items-center justify-center'>
            <input
              type='text'
              name='match_id'
              id='math_id'
              placeholder='Match ID...'
              className='px-6 leading-10 text-center text-white bg-transparent border rounded border-red'
            />
            <button className='px-6 ml-4 font-semibold leading-10 text-center uppercase whitespace-no-wrap rounded appearance-none btn-shadow bg-red'>
              Fetch It!
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
