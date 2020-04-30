import React from 'react';
import { Provider } from 'overmind-react'

import Layout from 'layout';
import { store } from 'store';

function App() {
  return (
    <Provider value={store}>
      <Layout />
    </Provider>
  );
}

export default App;
