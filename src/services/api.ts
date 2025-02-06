import axios from "axios";

import { API_CLIENT_ID, API_TOKEN } from "./mock";

const api = axios.create({
  baseURL: "https://api.igdb.com/v4/",
  headers: {
    'Client-ID': API_CLIENT_ID,
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'text/plain'
  },
});

export { api };