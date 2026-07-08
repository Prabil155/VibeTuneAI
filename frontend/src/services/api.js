import axios from "axios";

const api = axios.create({
  baseURL: "https://vibetuneai-2.onrender.com/",
});

export default api;