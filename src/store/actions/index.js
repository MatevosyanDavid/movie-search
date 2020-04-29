import { transformData, getAllData } from 'utils';

export const fetchMovie = (services) => (dispatch) =>
  Promise.all(services.getAllData())
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
