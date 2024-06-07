import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistence-storage";

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
    signUserStart: (state) => {
      state.isLoad = true; // loading bolishi
    },
    signUserSuccess: (state, action) => {
      state.loggedIn = true; // user login bolishi
      state.isLoad = false; // loading remove bolishi
      state.user = action.payload;
      setItem("token", action.payload.token);
    },
    signUserFailure: (state, action) => {
      state.isLoad = false; // loading remove bolishi
      state.error = action.payload; // error bolgandagi malumot
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure } =
  authSlice.actions; // functionlar export bolishi
export default authSlice.reducer;
