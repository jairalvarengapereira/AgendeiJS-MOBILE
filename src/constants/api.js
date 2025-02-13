import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.6:3001", // ou a URL correta do servidor
});

export default api;