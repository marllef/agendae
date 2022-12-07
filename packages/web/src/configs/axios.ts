import axios from 'axios';
import { keys } from '~/configs';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3005/api",
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem(keys.AUTH_TOKEN);

    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
