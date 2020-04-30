import { baseUrlImg } from 'configs';

import img from 'assets/code.jpg';
import poster from 'assets/poster.jpg';

const transformData = ({
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
  poster: poster_path ? `${baseUrlImg}${poster_path}` : img,
  backdrop: backdrop_path ? `${baseUrlImg}${backdrop_path}` : poster,
});

export default transformData;
