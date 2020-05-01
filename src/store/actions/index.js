import Fetch from 'utils/fetch';
import { getMovies } from 'constants/api';
import {
  loadState,
  getAllData,
  getItemByKey,
  transformData,
  getIndexByKey,
  persistFavorites,
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
  persistFavorites(state.favorites)
}

const removeFavorites = ({ state }, id) => {
  const newFavorite = [...state.favorites];
  const dataIndex = getIndexByKey(state.data, 'id', id);
  const favoriteIndex = getIndexByKey(state.favorites, 'id', id);

  newFavorite.splice(favoriteIndex, 1);
  state.data[dataIndex].isFavorites = false;
  state.favorites = newFavorite;
  persistFavorites(state.favorites)
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
