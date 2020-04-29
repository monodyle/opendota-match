const game_modes = ['', 'All Pick', 'Captions Mode']

const MatchInfo = ({ radiant_name, dire_name, radiant_score, dire_score, game_mode, duration }) => {
  return (
    <div className='match-info'>
      <div className='flex items-end justify-center'>
        <div className='flex items-center justify-end team-radiant'>
          <div className='font-bold team-name'>{radiant_name}</div>
          <div className='px-4 pt-1 team-flag'>
            <img src='/assets/icons/team_radiant.png' alt='radiant' />
          </div>
          <div className='text-4xl font-bold team-score'>{radiant_score}</div>
        </div>
        <div className='px-4 duration'>
          <div className='mb-2 text-xs font-semibold tracking-wide text-center uppercase text-smoke'>
            {game_modes[game_mode]}
          </div>
          <span className='block font-bold leading-8 tracking-widest text-center text-white rounded-full bg-red'>
            {`${Math.floor(duration / 60)}:${duration % 60}`}
          </span>
        </div>
        <div className='flex items-center justify-center'>
          <div className='text-4xl font-bold team-score'>{dire_score}</div>
          <div className='px-4 pt-1 team-flag'>
            <img src='/assets/icons/team_dire.png' alt='dire' />
          </div>
          <div className='font-bold team-name'>{dire_name}</div>
        </div>
      </div>
    </div>
  )
}

export default MatchInfo
