const game_modes = ['', 'All Pick', 'Captions Mode']

const Winner = ({ team }) => {
  return (
    <div
      className={`relative px-4 py-1 text-sm font-bold uppercase anti-select team-winner bg-red color-white ${
        team === 'radiant' ? 'mr' : 'ml'
      }-4`}
      style={{ boxShadow: '0 0 3em rgba(199, 47, 83, 0.72)' }}
    >
      <span
        className='absolute top-0 block w-10 h-full bg-red'
        style={{
          boxShadow: '0 0 3em rgba(199, 47, 83, 0.72)',
          transform: 'skewX(-45deg)',
          transformOrigin: '100%',
          zIndex: '-1',
          left: team === 'radiant' ? '-16%' : 'unset',
          right: team === 'dire' ? '-16%' : 'unset',
        }}
      ></span>
      <span className='relative' style={{ zIndex: '1' }}>
        Winner
      </span>
    </div>
  )
}

const MatchInfo = ({
  radiant_name,
  dire_name,
  radiant_score,
  dire_score,
  game_mode,
  duration,
  radiant_win,
}) => {
  return (
    <div className='match-info'>
      <div className='flex items-end justify-center'>
        <div className='flex items-center justify-end w-5/12 team-radiant'>
          {radiant_win && <Winner team='radiant' />}
          <div className='font-bold team-name'>{radiant_name}</div>
          <div className='px-4 pt-1 team-flag'>
            <img src='/assets/icons/team_radiant.png' alt='radiant' />
          </div>
          <div className='text-4xl font-bold team-score'>{radiant_score}</div>
        </div>
        <div className='w-1/6 px-4 text-center duration'>
          <div className='mb-2 text-xs font-semibold tracking-wide text-center uppercase text-smoke'>
            {game_modes[game_mode]}
          </div>
          <span className='inline-block px-6 font-bold leading-8 tracking-widest text-center text-white rounded-full anti-select bg-red'>
            {`${Math.floor(duration / 60)}:${duration % 60}`}
          </span>
        </div>
        <div className='flex items-center justify-start w-5/12'>
          <div className='text-4xl font-bold team-score'>{dire_score}</div>
          <div className='px-4 pt-1 team-flag'>
            <img src='/assets/icons/team_dire.png' alt='dire' />
          </div>
          <div className='font-bold team-name'>{dire_name}</div>
          {!radiant_win && <Winner team='dire' />}
        </div>
      </div>
    </div>
  )
}

export default MatchInfo
