import Fetch from 'utils/fetch';
import { getMovies, getMoviesByName } from 'constants/api';
import {
  getItemByKey,
  transformData,
  getIndexByKey,
  saveFavorites,
  getPersistFavoritesData,
} from 'utils';

const getData = async ({ state }, page) => {
  const { results, total_pages } = await Fetch.get(getMovies(page));
  const data = results.map(item => transformData(item));
  const mergeData = await Fetch.getMergeData(data);

  state.totalTages = total_pages;
  state.data = getPersistFavoritesData(mergeData);
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

const getSearchMovies = async ({ state }, name) => {
  const { results } = await Fetch.get(getMoviesByName(name));
  const data = results.map(item => transformData(item));
  const mergeData = await Fetch.getMergeData(data);
  
  state.searchResult = mergeData
}

const logout = ({ state }) => {
  state.logout = false;
};

export default {
  logout,
  getData,
  setFavorites,
  removeFavorites,
  getSearchMovies,
};
