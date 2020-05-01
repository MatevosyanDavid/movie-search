import { saveState, loadState } from 'utils';

const getTitle = str => str.length > 21 ? `${str.slice(0, 18)}...` : str;
const getItemByKey = (data, key, compare) => data.find(item => item[key] === compare);
const getIndexByKey = (data, key, compare) => data.findIndex(item => item[key] === compare);
const saveFavorites = favorites => saveState('favorites', favorites);

const getPersistFavoritesData = data => {
  const persistData = loadState('favorites');
  persistData && persistData.forEach(({ id }) => {
    const idx = getIndexByKey(data, 'id', id);
    if (idx !== -1) {
      data[idx].isFavorites = true
    }
  });
  return data
}

export {
  getTitle,
  getItemByKey,
  getIndexByKey,
  saveFavorites,
  getPersistFavoritesData,
}
