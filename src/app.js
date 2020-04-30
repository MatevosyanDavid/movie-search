import React from 'react';
import { Provider } from 'overmind-react'

import { store } from 'store';

import 'app.css';

function App() {
  return (
    <Provider value={store}>
      {/* Most be Layout */}
      <div>Hello</div>
    </Provider>
  );
}

export default App;
