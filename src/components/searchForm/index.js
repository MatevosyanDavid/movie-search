import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useStore } from 'store';

function SearchForm() {
  const [value, setValue] = useState('');
  const { actions: { getSearchMovies } } = useStore();
  const history = useHistory();


  const handleChange = ({ target: { value } }) => setValue(value);
  
  const handleSubmit = event => {
    event.preventDefault();
    if(value.trim().length === 0) {
      return;
    }
    getSearchMovies({ value, id: 1 });
    setValue('');
    history.push('/search');
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
