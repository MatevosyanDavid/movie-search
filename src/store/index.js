import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import services from 'services';
import appReducer from 'store/reducers';
import { fetchMovie } from 'store/actions';
import defaultState from 'store/defaultState';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  thunk,
];

const store = createStore(
  appReducer,
  defaultState,
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)
);

store.dispatch(fetchMovie(services));

export default store;
