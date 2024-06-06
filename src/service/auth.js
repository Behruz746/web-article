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
  // user malumotlarini olish
  async getUser() {
    // const response = await axios.get("/user");
  },
};

export default authService;
