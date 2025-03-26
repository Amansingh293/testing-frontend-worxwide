import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_STRAPI_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    // Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
