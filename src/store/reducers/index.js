import { loadState } from "utils";
import { updateFavorites } from './helpers';

const appReducer = (state, action) => {
  switch(action.type) {
    case 'MOVIE_LOADED':
      const persist = loadState('favorites');
      const { data } = action.payload;

      persist.forEach(item => {
        const idx = data.findIndex(({ id }) => item.id === id );
        if(idx !== -1) {
          action.payload.data[idx] = item;
        }
      });

      return {
        ...state,
        data,
        loading: true,
        favorites: persist,
      };

    case 'ADD_FAVORITES':      
      const favorites = [...state.favorites];
      const newData = updateFavorites(state.data, favorites, action)
      
      return {
        ...state,
        data: newData,
        favorites,
      }
      
    case 'SEARCH_MOVIES':
      return {
        ...state,
        searchMovies: action.payload
      };
    
    case 'MOVIE_ERROR':
      return {
        ...state,
        ...action.payload,
        loading: true,
      };

    default:
      return state;
  }
}

export default appReducer;
