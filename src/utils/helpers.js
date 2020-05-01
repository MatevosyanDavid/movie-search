import { saveState } from 'utils';

const getTitle = str => str.length > 21 ? `${str.slice(0, 18)}...` : str;
const getItemByKey = (data, key, compare) => data.find(item => item[key] === compare);
const getIndexByKey = (data, key, compare) => data.findIndex(item => item[key] === compare);
const persistFavorites = favorites => {
  const favoriteIds = favorites.map(item => item.id);
  saveState('favorites', favoriteIds)
}

export {
  getTitle,
  getItemByKey,
  getIndexByKey,
  persistFavorites,
}
