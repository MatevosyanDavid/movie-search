import React from 'react';

import { loadState } from "utils";
import Card from 'components/cards';

function Favorites() {
  const data = loadState('favorites');
  return (
    <main className="favorites-page">
      {
        data && data.map(item => (
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
