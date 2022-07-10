import axios from 'axios';

const request = axios.create({
   baseURL: 'https://api.spotify.com/v1',
});

request.interceptors.request.use(
   (config) => {
      const token = localStorage.getItem('spotifyToken');

      if (token) {
         config.headers!.authorization = `Bearer ${token}`;
      }
      return config;
   },
   (error) => Promise.reject(error)
);

export default request;
