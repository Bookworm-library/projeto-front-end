import axios from "axios";

/*API LOCAL FAKE => "http://localhost:3001/" (EM CASOS DE EMERGÊNCIA) */

export const apiFake = axios.create({
  baseURL: "https://projeto-front-end-api-fake.herokuapp.com/",
  timeout: 3000,
});

export const apiSearch = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  params: {
    key: "AIzaSyDmtrWfOjtqUgW5oYlmQvVIq6_SCbGDsJM",
  },
  timeout: 2000,
});
