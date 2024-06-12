import axios from "./api";

const userData = {
  // bu function dinamik: har hil malumotlarini olish
  async getData(path, method = "get") {
    const { data } = await axios[method](`/${path}`);
    return data;
  },

  async editeUserProfile(path, user) {
    await axios.put(`/${path}`, { user });
  },
};

export default userData;
