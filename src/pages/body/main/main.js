import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { useStore } from 'store';
import Card from 'components/cards';
import Pagination from 'components/pagination';

import './index.css';

function Main({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const { state: { totalTages }, actions: { getData } } = useStore();
  const location = useLocation().pathname.includes('search');

  const handlePageClick = useCallback(({ selected }) => {
    setCurrentPage(selected);
    getData(selected + 1);
  }, [currentPage]);

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
      <Pagination
        pageCount={totalTages}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </main>
  )
}

export default Main;
