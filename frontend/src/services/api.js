import axios from "axios";

const api = axios.create({
  baseURL: "https://vibetuneai.onrender.com/",
});

export default api;