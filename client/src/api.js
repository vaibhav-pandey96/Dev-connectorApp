import axios from "axios";

// Base URL from environment variable
const API_BASE = import.meta.env.VITE_API_BASE_URL;

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});
console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

export default api;
