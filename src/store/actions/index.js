import Fetch from 'utils/fetch';
import { getMovies, getMoviesByName } from 'constants/api';
import {
  loadState,
  getItemByKey,
  transformData,
  getIndexByKey,
  saveFavorites,
  getPersistFavoritesData,
} from 'utils';

const getData = async ({ state }, page) => {
  state.isLoaded = true;
  const { results, total_pages } = await Fetch.get(getMovies(page));
  const mergeData = await Fetch.getMergeData(results);
  const data = mergeData.map(item => transformData(item));

  state.totalPages = total_pages;
  state.data = getPersistFavoritesData(data);
  state.favorites = loadState('favorites') || [];
  state.isLoaded = false;
};

const setFavorites = ({ state }, id) => {
  const favorite = getItemByKey(state.favorites, 'id', id);
  if (favorite) return;

  const newFavorite = getItemByKey(state.data, 'id', id);
  newFavorite.isFavorites = true;
  state.favorites = [...state.favorites, newFavorite];
  saveFavorites(state.favorites);
};

const removeFavorites = ({ state }, id) => {
  const newFavorite = [...state.favorites];
  const dataIndex = getIndexByKey(state.data, 'id', id);
  const favoriteIndex = getIndexByKey(state.favorites, 'id', id);

  if (state.data[dataIndex]) {
    state.data[dataIndex].isFavorites = false;
  }

  newFavorite.splice(favoriteIndex, 1);
  state.favorites = newFavorite;
  saveFavorites(state.favorites);
};

const getSearchMovies = async ({ state }, { value, id }) => {
  state.isLoaded = true;
  const { results, total_pages } = await Fetch.get(getMoviesByName(value, id));
  const data = results.map(item => transformData(item));
  const mergeData = await Fetch.getMergeData(data);

  state.searchResult = mergeData;
  state.searchTotalPages = total_pages;
  state.isLoaded = false;
};

const logout = ({ state }) => {
  state.logout = false;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logout,
  getData,
  setFavorites,
  removeFavorites,
  getSearchMovies,
};
