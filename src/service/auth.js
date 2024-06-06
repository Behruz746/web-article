import axios from "./api";

const authService = {
  // user ro'yhatan o'tishi
  async useRegister(user) {
    const response = await axios.post("/users", { user });
    return response;
  },
  // user login bolishi
  async useLogin() {
    // const response = await axios.post("/users/login");
  },
  // user malumotlarini olish
  async getUser() {
    // const response = await axios.get("/user");
  },
};

export default authService;
