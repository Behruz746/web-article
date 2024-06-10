import axios from "./api";

const authService = {
  // user ro'yhatan o'tishi
  async useRegister(user) {
    const { data } = await axios.post("/users", { user });
    return data;
  },
  // user login bolishi
  async useLogin(user) {
    const { data } = await axios.post("/users/login", { user });
    return data;
  },
  // bu function dinamik: har hil malumotlarini olish
  async getData(path) {
    const { data } = await axios.get(`/${path}`);
    return data;
  },
};

export default authService;
