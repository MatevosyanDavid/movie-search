import React, { useState } from 'react';
import classNames from 'classnames';

import Link from 'components/link'
import SearchForm from 'components/searchForm';

function Navbar() {
  const [isVisible, setIsVisivle] = useState(false);
  const showMenuHandler = () => setIsVisivle(!isVisible);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">
          Search Movies
        </span>
        <button className="navbar-toggler" onClick={showMenuHandler}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={classNames('navbar-collapse', { collapse: !isVisible })}>
          <ul className="navbar-nav mr-auto">
            <Link
              to="/movies"
              label="Movies"
              showMenuHandler={showMenuHandler}
            />
            <Link
              to="/favorites"
              label="Favorites"
              showMenuHandler={showMenuHandler}
            />
          </ul>
          <SearchForm setIsVisivle={setIsVisivle} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
