const {
  REACT_APP_ENDPOINT,
  REACT_APP_SEGMENT_KEY,
  REACT_APP_CERTIFICATE,
  REACT_APP_ENDPOINT_VERSION,
} = process.env;

const config = {
  isLoggedIn: true,
  segment: REACT_APP_SEGMENT_KEY,
  endPoint: `${REACT_APP_ENDPOINT}/${REACT_APP_ENDPOINT_VERSION}`,
  authenticated: !!window.sessionStorage.getItem('authenticated'),
  getItemById: (id, type) => `/${type}/${id}?api_key=${REACT_APP_SEGMENT_KEY}`,
  getItemBySearch: (name, type) =>
    `/search/${type}?api_key=${REACT_APP_SEGMENT_KEY}&query=${name}`,
  getAllMovies: (page, type) =>
    `/discover/${type}?api_key=${REACT_APP_SEGMENT_KEY}${REACT_APP_CERTIFICATE}${page}`,
}

export default config;
