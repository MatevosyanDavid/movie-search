import { appKey } from 'configs';
import RequestStore from './requestStore';
import errorHandler from './errorHandler';
import { getMovies, getMoviesVideo } from 'constants/api';


const makeUnique = (url, method, data) => `${url}-${method}-${data}`;

class Fetch {
  static async get(url) {
    return Fetch.request(url, 'GET');
  }

  static async getVideos(data) {
    const promises = data.map(({ id }) => Fetch.request(getMoviesVideo(id)));
    await Promise.all(promises)
      .then(videos => {
        videos.forEach(({ results }, i) => {
          data[i].videos = results;
        })
      });
    return data;
  }

  static async request(url, method) {
    const response = await Fetch.cachableRequest(url, method);

    const result = await response.clone().json();

    return {
      headers: response.headers,
      ...result,
    };
  }

  static async cachableRequest(url, method) {
    const hash = makeUnique(url, method);
    const request = RequestStore.has(hash) ? RequestStore.get(hash) : fetch(url);

    RequestStore.set(hash, request);

    const response = await request;

    RequestStore.drop(hash);

    return errorHandler(response);
  }
}

export default Fetch;
