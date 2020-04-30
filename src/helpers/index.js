import heroes from '../json/hero'
import items from '../json/item'

const getHeroName = hero_id => heroes[hero_id]

const getHeroImage = hero_id => {
  if (!getHeroName(hero_id)) return
  return `/assets/images/heroes/${getHeroName(hero_id)
    .replace(/\s/g, '_')
    .replace(/\'/g, '')}_icon.png`
}

const getHeroIcon = hero_id => {
  if (!getHeroName(hero_id)) return
  return `/assets/icons/heroes/${getHeroName(hero_id)
    .replace(/\s/g, '_')
    .replace(/\'/g, '')}_minimap_icon.png`
}

const getItemName = item_id => (items[item_id] ? items[item_id].localized_name : null)

const getItemImage = item_id => {
  if (!getItemName(item_id)) return
  const item_name = getItemName(item_id)
    .replace(/\s/g, '_')
    .replace(/\'/g, '')
  return `/assets/images/items/${item_name}.png`
}

export { getHeroName, getHeroImage, getHeroIcon, getItemName, getItemImage }
