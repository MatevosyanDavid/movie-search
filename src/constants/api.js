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
const getMoviesByName = name => `${baseUrl}/search/movie?api_key=${segmentKey}&query=${name}&page=1`;

// console.log(getMovies(1), '>>>>>>');
// console.log(getMoviesById(495764), '>>>>>>');
// console.log(getMoviesVideo(495764), '>>>>>>');
// console.log(getMoviesByName('spider'), '>>>>>>');

export {
  getMovies,
  getVideoSrc,
  getMoviesById,
  getMoviesVideo,
  getMoviesByName,
};
