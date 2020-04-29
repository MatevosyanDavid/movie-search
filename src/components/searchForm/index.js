import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import services from 'services';
import { searchMovies } from 'store/actions';
import { transformData, getAllData } from 'utils';

function SearchForm() {
  const [value, setValue] = useState('');

  const history = useHistory()
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => setValue(value);
  
  const handleSubmit = event => {
    event.preventDefault();
    if(value.trim().length === 0) {
      return
    }
    services.getSearchData(value)
      .then(({ data }) => data.results.map(item => transformData(item)))
      .then(data => getAllData(data, dispatch, searchMovies))
      .catch(console.error)
    history.push('/search')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form-inline my-2 my-lg-0"
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search"
        className="form-control mr-sm-2"
      />
      <button 
        type="submit"
        className="btn btn-secondary my-2 my-sm-0"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
