import axios from "axios";

/*API LOCAL FAKE => "http://localhost:3001/" (EM CASOS DE EMERGÊNCIA) */

export const apiFake = axios.create({
  baseURL: "http://localhost:3001/",
  /* baseURL: "https://projeto-front-end-api-fake-new.herokuapp.com/", */
  timeout: 3000,
});

export const apiSearch = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  params: {
    key: "AIzaSyDmtrWfOjtqUgW5oYlmQvVIq6_SCbGDsJM",
  },
  timeout: 2000,
});
