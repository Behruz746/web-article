import { createSlice } from "@reduxjs/toolkit";

// userlarni default malumotlari
const initialState = {
  isLoad: false,
  loggedIn: false,
  error: null,
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
      state.isLoad = true; // loading bolishi
    },
    registerUserSuccess: (state) => {
      state.loggedIn = true; // user login bolishi
      state.isLoad = false; // loading remove bolishi
    },
    registerUserFailure: (state) => {
      state.isLoad = false; // loading remove bolishi
      state.error = "error"; // error bolgandagi malumot
    },
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions; // functionlar export bolishi
export default authSlice.reducer;
