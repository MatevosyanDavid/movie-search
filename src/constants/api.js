import {
  baseUrl,
  segmentKey,
  cetrificate,
  baseUrlVideo,
} from 'configs';

const getVideoSrc = videoKey => `${baseUrlVideo}${videoKey}`;
const getMoviesById = id => `${baseUrl}/movie/${id}?api_key=${segmentKey}`;
const getMoviesVideo = (id) => `${baseUrl}/movie/${id}/videos?api_key=${segmentKey}`;
const getMovies = page => `${baseUrl}/discover/movie?api_key=${segmentKey}${cetrificate}${page}`;
const getMoviesByName = (name, page) =>
  `${baseUrl}/search/movie?api_key=${segmentKey}&query=${name}&page=${page}`;

export {
  getMovies,
  getVideoSrc,
  getMoviesById,
  getMoviesVideo,
  getMoviesByName,
};
