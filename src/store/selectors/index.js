export const getState = (state = {}) => state;
export const getData = state => getState(state).data;
export const getLoading = state => getState(state).loading;
export const getFavorites = state => getState(state).favorites;
export const getSearchMovies = state => getState(state).searchMovies;
