import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Task 4
export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
