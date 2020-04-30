import Player from './teams_player'

const Teams = ({ players, radiant_tag, dire_tag }) => {
  const radiant = []
  const dire = []

  players.map((player, key) => {
    const team = player.isRadiant ? radiant : dire
    team.push(<Player data={player} key={key} team_tag={player.isRadiant ? radiant_tag : dire_tag} />)
  })

  return (
    <div className='match-teams'>
      <div className='flex'>
        <div className='w-1/2 px-2'>{radiant}</div>
        <div className='w-1/2 px-2'>{dire}</div>
      </div>
    </div>
  )
}

export default Teams
