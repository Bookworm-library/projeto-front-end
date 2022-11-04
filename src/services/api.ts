import axios from "axios";

export const apiFake = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 3000,
});

export const apiSearch = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  params: {
    key: "AIzaSyDmtrWfOjtqUgW5oYlmQvVIq6_SCbGDsJM",
  },
  timeout: 2000,
});
