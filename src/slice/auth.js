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
    // Login
    loginUserStart: (state) => {
      state.isLoad = true;
    },
    loginUserSuccess: (state) => {},
    loginUserFailure: (state) => {},
    // Register
    registerUserStart: (state) => {
      state.isLoad = true;
    },
    registerUserSuccess: (state) => {},
    registerUserFailure: (state) => {},
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  registerUserStart,
} = authSlice.actions;
export default authSlice.reducer;
