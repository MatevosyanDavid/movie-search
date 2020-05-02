import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useStore } from 'store';
import { loadState } from 'utils';
import { useMount } from 'utils/hooks';

import Main from './main';
import Favorites from './favorites';
import MovieInfo from 'components/movieInfo';

const pos = loadState('pos');

function Body() {
  const {
    state: {
      data,
      favorites,
      searchResult,
    },
    actions: {
      getData,
    }
  } = useStore();

  useMount(() => {
    getData((pos && pos + 1) || 1);
  });

  return (
    <>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/movies">
            <Main data={data} />
          </Route>
          <Route exact path="/search">
            <Main data={searchResult} />
          </Route>
          <Route
            exact
            path="/search/:id"
            render={({ match: { params: { id } } }) => {
              const infoData = searchResult.find(item => item.id === +id);
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

export default Body;
