import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000/api', // Base URL for your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
