import axios from 'axios';

const api = axios.create({
  baseURL: 'https://192.168.0.1',
});

export default api;
