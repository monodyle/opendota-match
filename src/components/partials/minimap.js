import { getHeroIcon, getHeroName } from '../../helpers'

const Tower = ({ team, lane, tier }) => {
  return (
    <span className={`absolute w-4 h-4 block tower team-${team} lane-${lane} tier-${tier}`}></span>
  )
}
const Minimap = ({ players }) => {
  return (
    <div
      className='relative w-64 h-64 overflow-hidden bg-center bg-cover minimap'
      style={{
        backgroundImage: 'url(/assets/images/map.png)',
      }}
    >
      {['radiant', 'dire'].map((team, k) => (
        <div key={k}>
          {['off', 'mid', 'safe'].map(lane =>
            ['1', '2', 'rack', 'rack', '3'].map((tier, key) => (
              <Tower team={team} lane={lane} tier={tier} key={key} />
            ))
          )}
          <Tower team={team} lane='mid' tier='4' />
          <Tower team={team} lane='mid' tier='4' />
        </div>
      ))}
      {players.map((p, k) => (
        <span
          key={k}
          className={`absolute block bg-center bg-no-repeat bg-contain lane-${p.lane} role-${
            p.lane_role
          } team-${p.isRadiant ? 'radiant' : 'dire'} minimap-icon`}
          title={(p.name || p.personaname) + ' as ' + getHeroName(p.hero_id)}
          style={{
            backgroundImage: 'url(' + getHeroIcon(p.hero_id) + ')',
            width: 'calc(10%)',
          }}
        ></span>
      ))}
    </div>
  )
}

export default Minimap
