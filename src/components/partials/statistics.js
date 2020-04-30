import { useState } from 'react'
import Minimap from './minimap'
import Graph from './graph'

const Statistics = ({ players, radiant_gold_adv, radiant_xp_adv, radiant_team, dire_team }) => {
  const [stat, setStat] = useState('nw')
  const handleChange = () => {
    setStat(stat === 'nw' ? 'xp' : 'nw')
  }

  return (
    <div className='flex'>
      <Minimap players={players} />
      <div className='relative flex-grow h-64 overflow-hidden'>
        <a
          className='absolute top-0 right-0 z-10 block px-1 text-xs font-semibold uppercase cursor-pointer bg-red'
          onClick={() => handleChange()}
        >
          {stat === 'nw' ? 'Net Worth' : 'Experience'}
        </a>
        {stat === 'nw' && (
          <Graph
            data={radiant_gold_adv}
            radiant_name={radiant_team.name}
            dire_name={dire_team.name}
          />
        )}
        {stat === 'xp' && (
          <Graph
            data={radiant_xp_adv}
            radiant_name={radiant_team.name}
            dire_name={dire_team.name}
          />
        )}
      </div>
    </div>
  )
}

export default Statistics
