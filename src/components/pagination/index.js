import React from 'react';
import ReactPaginate from 'react-paginate';

import './index.css';

const Pagination = ({ currentPage, handlePageClick, pageCount }) => {

  return (
    <ReactPaginate
      nextLabel={'Next'}
      breakLabel={'...'}
      previousLabel={'Prev'}
      pageCount={pageCount}
      pageRangeDisplayed={5}
      forcePage={currentPage}
      marginPagesDisplayed={2}
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
    />
  );
};

export default Pagination;
