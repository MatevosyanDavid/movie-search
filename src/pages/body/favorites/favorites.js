import React from 'react';

import { loadState } from 'utils';
import Card from 'components/cards';

function Favorites() {
  const favorites = loadState('favorites')
  return (
    <main className="favorites-page">
      {
        favorites && favorites.map(item => (
          <Card
            key={item.id}
            {...item}
          />
        ))
      }
    </main>
  );
}

export default Favorites;
