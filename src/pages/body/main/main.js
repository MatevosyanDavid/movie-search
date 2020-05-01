import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import Card from 'components/cards';
import Pagination from 'components/pagination';

import { useStore } from 'store';

import './index.css';

function Main({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const { state: { totalPages }, actions: { getData } } = useStore();
  const location = useLocation().pathname.includes('search');

  const handlePageClick = useCallback(({ selected }) => {
    setCurrentPage(selected);
    getData(selected + 1);
  }, [getData]);

  return (
    <div className="main-blok">
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
      { !location &&
        <Pagination
          pageCount={totalPages}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      }
    </div>
  )
}

export default Main;
