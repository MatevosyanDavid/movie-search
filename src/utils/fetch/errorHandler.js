import { store } from 'store';

const errorHandler = response => {
  // TODO::: add chack for bad request
  if (response.status === 401) {
    store.state.isLoggedIn !== false && store.actions.logout();
  }
  return response;
};

export default errorHandler;
