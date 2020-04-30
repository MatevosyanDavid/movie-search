import axios from 'axios';

const config = {
  isLoggedIn: true,
  segment: process.env.REACT_APP_SEGMENT_KEY,
  endPoint: `${process.env.REACT_APP_BASE_URL}`,
  authenticated: !!window.sessionStorage.getItem('authenticated'),
  getItemById: (id, type) => `/${type}/${id}?api_key=${process.env.REACT_APP_SEGMENT_KEY}`,
  getItemBySearch: (name, type) =>
    `/search/${type}?api_key=${process.env.REACT_APP_SEGMENT_KEY}&query=${name}`,
  getAllMovies: (page, type) =>
    `/discover/${type}?api_key=${process.env.REACT_APP_SEGMENT_KEY}${process.env.REACT_APP_CERTIFICATE}${page}`,
}

class Services {
  constructor({
    segment,
    endPoint,
    getItemById,
    getAllMovies,
    getItemBySearch,
  }) {
    this.segment = segment;
    this.endPoint = endPoint;
    this.getItemById = getItemById;
    this.getAllMovies = getAllMovies;
    this.getItemBySearch = getItemBySearch;
  }

  getAllData = (pageCount, type = 'movie') => Array(pageCount).fill(0).map((_, i) => (
    axios.get(`${this.endPoint}${this.getAllMovies(i + 1, type)}`)
  ));
  
  getDataById = (name, type = 'movie') => axios.get(`${this.endPoint}${this.getItemById(name, type)}`);
  
  getSearchData = (name, type = 'movie') => axios.get(`${this.endPoint}${this.getItemBySearch(name, type)}`);
}

const services = new Services(config)

export default services;
