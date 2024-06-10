import axios from "axios";
import { getItem } from "../helpers/persistence-storage";

axios.defaults.baseURL = "http://localhost:3000/api";
// user malumotlarini tokin bilan olish uchun
axios.interceptors.request.use(
  (config) => {
    // localstore dan tokenni olish
    const token = getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Agar "Token" bo'lsa, "Bearer" o'rniga "Token" ni ishlating
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
