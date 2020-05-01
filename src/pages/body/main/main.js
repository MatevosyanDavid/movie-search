import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Card from 'components/cards';
import Pagination from 'components/pagination';

import './index.css';

function Main({ data, getRequest, totalPages }) {
  const [currentPage, setCurrentPage] = useState(0);

  const location = useLocation().pathname.includes('search');

  useEffect(() => {
    return () => localStorage.removeItem('formValue');
  }, [])

  const handlePageClick = useCallback(({ selected }) => {
    setCurrentPage(selected);
    getRequest(selected)
  }, [currentPage]);

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
      <Pagination
        pageCount={totalPages}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </div>
  )
}

export default Main;
