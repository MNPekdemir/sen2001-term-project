import axios from 'axios';
import history from '../router/history';

console.log('base api', process.env);
const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        'x-auth': localStorage.getItem('token'),
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('role');
      localStorage.removeItem('id');
      localStorage.removeItem('token');

      history.push('/');
    }
    return Promise.reject(error);
  }
);

export default instance;
