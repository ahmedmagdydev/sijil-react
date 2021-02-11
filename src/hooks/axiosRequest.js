import axios from 'axios';
import { apiBaseUrl } from '../constants/api';

export const axiosInstance = axios.create({
  baseURL: `${apiBaseUrl}/api/`,
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' },
});
