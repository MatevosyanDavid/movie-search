import React, { useCallback } from 'react';
import { Provider } from 'overmind-react'

import { store } from 'store';

import 'app.css';
import { useStore } from 'store';

const Some = () => {
  const {state, actions: { getData }} = useStore();
  const handleClick = useCallback(() => {
    getData();
  }, []);
  console.log(state.data, '>>>>>>');
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handleClick}>
        click
      </button>
    </div>
  )
}

function App() {
  return (
    <Provider value={store}>
      {/* Most be Layout */}
      <Some />
    </Provider>
  );
}

export default App;
