import Fetch from 'utils/fetch';
import { getMovies, getMoviesVideo } from 'constants/api';
import { transformData, getAllData } from 'utils';

const getData = async ({ state }) => {
  const { results } = await Fetch.get(getMovies(1));
  const data = results.map(item => transformData(item));
  state.data = await Fetch.getVideos(data);
};

const logout = ({ state }) => {
  state.logout = false;
};

const fakeAction = ({ state }) => {
  state.data = [];
  state.favorites = [];
  state.searchResult = [];
};

export default {
  logout,
  getData,
  fakeAction,
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
