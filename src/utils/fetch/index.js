import { appKey } from 'configs';

import RequestStore from './requestStore';
import errorHandler from './errorHandler';

const makeUnique = (url, method, data) => `${url}-${method}-${data}`;

class Fetch {
  static async get(url) {
    return Fetch.request(url, 'GET');
  }

  static async request(url, method, data, signal) {

    const headers = {
      'Content-Type': 'application/json',
    };

    const body = (method === 'POST' || method === 'PUT') ? JSON.stringify(data) : null;

    const response = await Fetch.cachableRequest(url, method, headers, body, signal);

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
