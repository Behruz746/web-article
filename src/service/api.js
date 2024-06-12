import axios from "axios";
import { getItem } from "../helpers/persistence-storage";

axios.defaults.baseURL = "http://localhost:3000/api";
axios.interceptors.request.use((config) => {
  const token = getItem("token");
  const authorization = token ? `Token ${token}` : `Bearer ${token}`;
  config.headers.Authorization = authorization;
  return config;
});

// axios.interceptors.request.use(
//   (config) => {
//     const token = getItem("token");
//     if (token) {
//       config.headers.Authorization = `Token ${token}`; // yoki `Bearer ${token}`
//     }
//     config.headers["Content-Type"] = "application/json"; // Muayyan kontent-tipi qo'shish
//     console.log(config);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axios;
