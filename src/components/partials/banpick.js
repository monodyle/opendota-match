import { getHeroImage, getHeroName } from '../../helpers'

const BanPick = ({ picks_bans, radiant_team, dire_team }) => {
  const radiant = { bans: [], picks: [], ...radiant_team }
  const dire = { bans: [], picks: [], ...dire_team }

  picks_bans.map((phase, key) => {
    const team = phase.team ? dire : radiant
    team[phase.is_pick ? 'picks' : 'bans'].push(
      <span
        className='relative block w-16 mx-1 overflow-hidden border border-transparent rounded hero hover:border-red'
        key={key}
      >
        <img
          src={getHeroImage(phase.hero_id)}
          alt={getHeroName(phase.hero_id)}
          title={getHeroName(phase.hero_id)}
        />
        <span className='absolute bottom-0 right-0 px-1 text-xs bg-black ord'>{phase.ord + 1}</span>
      </span>
    )
  })

  return (
    <div className='match-banpick'>
      <div className='flex items-end justify-center'>
        <div className='w-40 pr-4'>
          <img src={radiant.logo_url} alt={radiant.name} title={radiant.name} className='w-full' />
        </div>
        <div>
          <div className='flex items-center justify-center mb-2 bans'>
            <div className='flex items-center justify-end'>{radiant.bans.reverse()}</div>
            <div className='px-4 text-xs font-semibold tracking-wide text-center uppercase text-smoke'>
              Ban
            </div>
            <div className='flex items-center justify-end'>{dire.bans}</div>
          </div>
          <div className='flex items-center justify-center pick'>
            <div className='flex items-center justify-end'>{radiant.picks.reverse()}</div>
            <div className='px-4 text-xs font-semibold tracking-wide text-center uppercase'>
              Pick
            </div>
            <div className='flex items-center justify-end'>{dire.picks}</div>
          </div>
        </div>
        <div className='w-40 pl-4'>
          <img src={dire.logo_url} alt={dire.name} title={dire.name} className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default BanPick
