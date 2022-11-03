import axios from "axios";

export const apiFake = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 3000,
});
