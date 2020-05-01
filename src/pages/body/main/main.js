import React from 'react';
import { useLocation } from 'react-router-dom';

import Card from 'components/cards';

import './index.css';

function Main({ data }) {
  const location = useLocation().pathname.includes('search');
  return (
    <main>
      {
        data.map((item) => (
          <Card
            searchCard={location}
            key={item.id}
            {...item}
          />
        ))
      }
    </main>
  )
}

export default Main;
