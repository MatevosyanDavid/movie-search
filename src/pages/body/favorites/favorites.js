import React from 'react';

import { loadState } from 'utils';
import Card from 'components/cards';
import NoData from 'components/noData';

function Favorites() {
  const favorites = loadState('favorites');
  return (
    <main className="favorites-page">
      {
        favorites && favorites.length
          ? favorites.map(item => (
            <Card
              key={item.id}
              {...item}
            />
          ))
        : <NoData />
      }
    </main>
  );
}

export default Favorites;
