import Fetch from 'utils/fetch';
import { getMovies } from 'constants/api';
import {
  getItemByKey,
  transformData,
  getIndexByKey,
  saveFavorites,
  getPersistFavoritesData,
} from 'utils';

const getData = async ({ state }) => {
  const { results } = await Fetch.get(getMovies(1));
  const data = results.map(item => transformData(item));
  const fetchData = await Fetch.getVideos(data);

  state.data = getPersistFavoritesData(fetchData);
  state.favorites = state.data.filter(({ isFavorites }) => isFavorites === true);
};

const setFavorites = ({ state }, id) => {
  const favorite = getItemByKey(state.favorites, 'id', id);
  if(favorite) return;

  const newFavorite = getItemByKey(state.data, 'id', id);
  newFavorite.isFavorites = true;
  state.favorites = [...state.favorites, newFavorite];
  saveFavorites(state.favorites)
}

const removeFavorites = ({ state }, id) => {
  const newFavorite = [...state.favorites];
  const dataIndex = getIndexByKey(state.data, 'id', id);
  const favoriteIndex = getIndexByKey(state.favorites, 'id', id);

  newFavorite.splice(favoriteIndex, 1);
  state.data[dataIndex].isFavorites = false;
  state.favorites = newFavorite;
  saveFavorites(state.favorites)
}

const logout = ({ state }) => {
  state.logout = false;
};

export default {
  logout,
  getData,
  setFavorites,
  removeFavorites,
};
