import { getHeroImage, getHeroName, getItemImage, getItemName } from '../../helpers'

const Slot = ({ item }) => {
  return (
    <div className='w-1/6'>
      <div className='block ml-1 overflow-hidden rounded'>
        {item ? (
          <img
            src={getItemImage(item)}
            alt={getItemName(item)}
            title={getItemName(item)}
            className='block'
          />
        ) : (
          <span
            className='block w-full opacity-25 null-item bg-granite'
            style={{ paddingTop: '73.333333333%' }}
          ></span>
        )}
      </div>
    </div>
  )
}

const Items = ({ items, xclass }) => {
  return (
    <div className={`flex flex-wrap ${xclass || 'w-64'}`}>
      {items.map((item, key) => (
        <Slot item={item} key={key} />
      ))}
    </div>
  )
}

const Player = ({ data, team_tag }) => {
  const {
    account_id,
    backpack_0,
    backpack_1,
    backpack_2,
    backpack_3,
    hero_id,
    item_0,
    item_1,
    item_2,
    item_3,
    item_4,
    item_5,
    item_neutral,
    level,
    name,
    personaname,
  } = data

  return (
    <div className='flex items-stretch player'>
      <div className='relative w-20 h-12 mb-4 mr-4 overflow-hidden text-center rounded hero-avatar'>
        <img
          src={getHeroImage(hero_id)}
          alt={getHeroName(hero_id)}
          title={getHeroName(hero_id)}
          className='h-full max-w-none'
        />
      </div>
      <div className='flex-grow'>
        <div className='mb-1'>
          <a
            className='max-w-full overflow-hidden text-sm font-semibold text-white whitespace-no-wrap'
            style={{ textOverflow: 'ellipsis' }}
            href={`https://www.dotabuff.com/players/${account_id}`}
            title={name || personaname}
          >
            {team_tag && <strong className='font-bold text-mid-gray'>{team_tag + '.'}</strong>}
            {name || personaname}
          </a>
        </div>
        <div className='flex items-center'>
          <span className='block w-5 h-5 mr-2 text-xs font-bold leading-4 text-center border rounded-full player-level text-yellow'>
            {level}
          </span>
          <span className='text-xs font-semibold uppercase text-smoke'>{getHeroName(hero_id)}</span>
        </div>
      </div>
      <div className='w-1/2'>
        <div className='flex items-center justify-center'>
          <div>
            <Items items={[item_0, item_1, item_2, item_3, item_4, item_5]} />
            <Items items={[backpack_0, backpack_1, backpack_2, backpack_3]} xclass='w-2/3 mt-1' />
          </div>
          <div className='relative w-8 h-8 ml-2 overflow-hidden rounded-full item-neutral'>
            {item_neutral ? (
              <img
                src={getItemImage(item_neutral)}
                alt={getItemName(item_neutral)}
                title={getItemName(item_neutral)}
                className='absolute block h-full mx-auto transform -translate-x-1/2 max-w-none left-1/2'
              />
            ) : (
              <span className='block w-full h-full opacity-25 null-item bg-granite'></span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
