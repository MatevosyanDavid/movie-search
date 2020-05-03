import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { useStore } from 'store';
import { saveState, loadState } from 'utils';
import Card from 'components/cards';
import Loader from 'components/loader';
import NoData from 'components/noData';
import Pagination from 'components/pagination';

import './index.css';

function Main({ data }) {
  const pos = loadState('pos');

  const [currentPage, setCurrentPage] = useState(pos || 0);
  const location = useLocation().pathname.includes('search');
  const { state: { totalPages, isLoaded }, actions: { getData } } = useStore();

  const handlePageClick = useCallback(({ selected }) => {
    setCurrentPage(selected);
    getData(selected + 1);
    saveState('pos', selected);
    window.scrollTo(0, 0)
  }, [getData]);

  if(isLoaded) {
    return <Loader />;
  }

  return (
    <div className="main-blok">
      <main>
        {
          data.length 
            ? data.map((item) => (
                <Card
                  searchCard={location}
                  key={item.id}
                  {...item}
                />
              ))
            : <NoData /> 
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
