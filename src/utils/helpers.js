import { saveState, loadState } from 'utils';

const getTitle = str => str.length > 21 ? `${str.slice(0, 18)}...` : str;
const getItemByKey = (data, key, compare) => data.find(item => item[key] === compare);
const getIndexByKey = (data, key, compare) => data.findIndex(item => item[key] === compare);
const saveFavorites = favorites => {
  const favoriteIds = favorites.map(item => item.id);
  saveState('favorites', favoriteIds)
}

const getPersistFavoritesData = data => {
  const persistKeys = loadState('favorites');
  return data.map(item => {
    if (persistKeys && persistKeys.includes(item.id)) {
      item.isFavorites = true;
    }
    return item;
  })
}

export {
  getTitle,
  getItemByKey,
  getIndexByKey,
  saveFavorites,
}
