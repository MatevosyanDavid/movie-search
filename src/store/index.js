import { createOvermind } from 'overmind';
import { createHook } from 'overmind-react';

import initialState from './state';
import actions from './actions';

export const store = createOvermind(
  {
    state: initialState,
    actions,
  },
  {
    devtools: true,
  },
);

export const useStore = createHook();
