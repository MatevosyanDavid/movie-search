import Fetch from 'utils/fetch';
import { getMovies } from 'constants/api';
import {
  getAllData,
  getItemByKey,
  transformData,
  getIndexByKey,
} from 'utils';

const getData = async ({ state }) => {
  const { results } = await Fetch.get(getMovies(1));
  const data = results.map(item => transformData(item));
  state.data = await Fetch.getVideos(data);
};

const setFavorites = ({ state }, id) => {
  const favorite = getItemByKey(state.favorites, 'id', id);
  if(favorite) return;

  const newFavorite = getItemByKey(state.data, 'id', id);
  newFavorite.isFavorites = true;
  state.favorites = [...state.favorites, newFavorite];
}

const removeFavorites = ({ state }, id) => {
  const newFavorite = [...state.favorites];
  const dataIndex = getIndexByKey(state.data, 'id', id);
  const favoriteIndex = getIndexByKey(state.favorites, 'id', id);

  newFavorite.splice(favoriteIndex, 1);
  state.data[dataIndex].isFavorites = false;
  state.favorites = newFavorite;
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

export const fetchMovie = (services) => (dispatch) =>
  Promise.all(services.getAllData(2))
    .then(response => {
      return response.reduce((acc, { data: { results }}) => {
        acc.push(...results.map(item => transformData(item)))
        return acc;
      }, [])
      .sort((a, b) => b.popularity - a.popularity);
    })
    .then(data => getAllData(data, dispatch, moviesLoaded))
    .catch(err => dispatch(moviesError(err)));

export const moviesLoaded = payload => ({
  type: 'MOVIE_LOADED',
  payload,
});

export const moviesError = payload => ({
  type: 'MOVIE_ERROR',
  payload,
});

export const addFavorites = payload => ({
  type: 'ADD_FAVORITES',
  payload,
});

export const searchMovies = payload => ({
  type: 'SEARCH_MOVIES',
  payload: payload.data,
});
