import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useStore } from 'store';
import { useMount } from 'utils/hooks';

import Main from './main';
import About from './about';
import Favorites from './favorites';
import MovieInfo from 'components/movieInfo';
import { loadState } from 'utils';


function Body() {
  const loadFormValue = loadState('formValue');
  const {
    state: {
      data,
      favorites,
      totalPages,
      searchResult,
      searchTotalPages,
    },
    actions: {
      getData,
      getSearchMovies,
    }
  } = useStore();

  useMount(() => {
    getData(1);
  });

  return (
    <>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/movies">
            <Main 
              data={data}
              totalPages={totalPages}
              getRequest={selected => getData(selected + 1)}
            />
          </Route>
          <Route exact path="/search">
            <Main
              data={searchResult}
              totalPages={searchTotalPages}
              getRequest={
                selected => getSearchMovies({ value: loadFormValue, id: selected + 1})
              }
            />
          </Route>
          <Route exact path="/about">
            <About />
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
