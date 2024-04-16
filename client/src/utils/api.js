import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4002/",
});

export default api;