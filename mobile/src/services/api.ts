import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.86.97:3333',
});

export default api;
