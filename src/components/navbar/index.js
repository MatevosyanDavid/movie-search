import React from 'react';

import Link from 'components/link'
import SearchForm from 'components/searchForm';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">
          Search Movies
        </span>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <Link to="/movies" label="Movies" />
            <Link to="/favorites" label="Favorites" />
            <Link to="/about" label="About" />
          </ul>
          <SearchForm />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;