import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

function Body() {
  return (
    <>
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
  )
}