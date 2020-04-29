import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from 'pages/main';
import Navbar from 'components/navbar';
import Favorites from 'pages/favorites';
import MovieInfo from 'components/movieInfo';
import { getFavorites, getData, getSearchMovies } from 'store/selectors';

import 'app.css';

function App({ data, favorites, searchMovies }) {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/movies">
            <Main data={data} />
          </Route>
          <Route exact path="/search">
            <Main data={searchMovies} />
          </Route>
          <Route
            exact
            path="/search/:id"
            render={({ match: { params: { id } } }) => {
              const infoData = searchMovies.find(item => item.id === +id);
              return infoData && <MovieInfo {...infoData} />
            }}
          />
          <Route
            exact
            path="/movies/:id"
            render={({ match: { params: { id } } }) => {
              const infoData = data.find(item => item.id === +id);
              return infoData && <MovieInfo {...infoData} />
            }}
          />
          <Route exact path="/favorites" component={Favorites} />
          <Route 
            exact
            path="/favorites/:id"
            render={({ match: { params: { id } } }) => {
              const infoData = favorites.find(item => item.id === +id);
              return infoData && <MovieInfo {...infoData} />
            }}
          />
          <Redirect from="/" to="/movies" />
        </Switch>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  data: getData(state),
  favorites: getFavorites(state),
  searchMovies: getSearchMovies(state),
});

export default connect(mapStateToProps)(App);
