import img from 'assets/code.jpg';
import poster from 'assets/poster.jpg';
import services from 'services';

const { REACT_APP_IMG_ENDPOINT } = process.env;

export const transformData = ({
  id,
  videos,
  overview,
  popularity,
  vote_count,
  poster_path,
  release_date,
  backdrop_path,
  original_title,
}) => ({
  id,
  videos,
  overview,
  popularity,
  isFavorites: false,
  voteCount: vote_count,
  title: original_title,
  releaseDate: release_date,
  poster: poster_path ? `${REACT_APP_IMG_ENDPOINT}${poster_path}` : img,
  backdrop: backdrop_path ? `${REACT_APP_IMG_ENDPOINT}${backdrop_path}` : poster,
});

export const getTitle = str => str.length > 21 ? `${str.slice(0, 18)}...` : str;

export function getAllData(data, dispatch, action) {
  const requestFromId = data.map(({ id }) => services.getDataById(`${id}/videos`));
  Promise.all(requestFromId)
    .then((response) => {
      response.forEach(({ data: { results } }, i) => {
        data[i].videos = results
      });
      dispatch(action({ data }))
    })
  .catch(console.error);
}

export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return
  }
}

export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {

  }
}
