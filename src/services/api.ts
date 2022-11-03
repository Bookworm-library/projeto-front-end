import axios from "axios";

export const apiFake = axios.create({
  baseURL: "",
  timeout: 3000,
});
