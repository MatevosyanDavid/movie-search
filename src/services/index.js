import axios from 'axios';

import config from 'config';

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
