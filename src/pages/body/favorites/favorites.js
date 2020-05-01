import React from 'react';

import { useStore } from 'store';
import Card from 'components/cards';

function Favorites() {
  const { state: { favorites } } = useStore();
  return (
    <main className="favorites-page">
      {
        favorites.map(item => (
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
