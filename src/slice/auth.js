import { createSlice } from "@reduxjs/toolkit";

// userlarni malumotlari
const initialState = {
  isLoad: false,
  loggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLoad = true;
    },
    loginUserSuccess: (state) => {},
    loginUserFailure: (state) => {},
  },
});

export const { loginUserStart, loginUserSuccess, loginUserFailure } =
  authSlice.actions;
export default authSlice.reducer;
