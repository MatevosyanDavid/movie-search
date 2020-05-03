import React from 'react';
import ReactPaginate from 'react-paginate';

import { isMobile } from 'utils';

import './index.css';

const Pagination = ({ currentPage, handlePageClick, pageCount }) => {

  return (
    <ReactPaginate
      nextLabel={'Next'}
      breakLabel={'...'}
      previousLabel={'Prev'}
      pageCount={pageCount}
      forcePage={currentPage}
      nextClassName="page-item"
      pageClassName="page-item"
      activeClassName={'active'}
      breakClassName={'break-me'}
      previousClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      onPageChange={handlePageClick}
      previousLinkClassName="page-link"
      containerClassName={'pagination'}
      pageRangeDisplayed={isMobile() ? 1 : 5}
      marginPagesDisplayed={isMobile() ? 1 : 2}
    />
  );
};

export default Pagination;
