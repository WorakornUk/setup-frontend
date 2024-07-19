import axios from 'axios';
import { getAccessToken, removeAccessToken } from '../../utils/local-storage';

axios.defaults.baseURL = 'http://localhost:6969';

axios.interceptors.request.use(
  config => {
    const accessToken = getAccessToken();
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  err => Promise.reject(err)
);

axios.interceptors.response.use(
  value => Promise.resolve(value),
  err => {
    if (err.response.status === 401) {
      removeAccessToken();
      window.location.assign('/login');
      return;
    }
    return Promise.reject(err);
  }
);

// // Add a response interceptor to handle unauthorized errors globally
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response && error.response.status === 401) {
//       removeAccessToken();
//       window.location.assign('/login');
//     }
//     return Promise.reject(error);
//   }
// );

export default axios;
