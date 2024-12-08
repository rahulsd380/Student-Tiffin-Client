import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://student-tiffin-backend.vercel.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
