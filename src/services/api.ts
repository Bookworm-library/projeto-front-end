import axios from "axios";

/*API LOCAL FAKE => "https://projeto-front-api-fake-atual.herokuapp.com/" (EM CASOS DE EMERGÊNCIA) */

export const apiFake = axios.create({
  baseURL: "http://localhost:3001/" , 
  timeout: 3000,
});

export const apiSearch = axios.create({

  baseURL: "https://www.googleapis.com/books/v1/volumes",
  params: {
    key: "AIzaSyDmtrWfOjtqUgW5oYlmQvVIq6_SCbGDsJM",
  },
  timeout: 2000,
});
