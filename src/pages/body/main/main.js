import React from 'react';

import Card from 'components/cards';

import './index.css';

function Main({ data }) {
  return (
    <main>
      {
        data.map((item) => (
          <Card
            key={item.id}
            {...item}
          />
        ))
      }
    </main>
  )
}

export default Main;
