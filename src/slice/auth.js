import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistence-storage";

// userlarni default malumotlari
const initialState = {
  isLoad: false,
  loggedIn: false,
  error: null,
  user: null,
  articels: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoad = true; // loading bolishi
    },
    addArticels: (state, action) => {
      state.articels = action.payload;
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
    logOut: (state) => {
      state.isLoad = false;
      state.loggedIn = false;
      state.error = null;
      state.user = null;
    },
  },
});

export const {
  addArticels,
  signUserStart,
  signUserSuccess,
  signUserFailure,
  logOut,
} = authSlice.actions; // functionlar export bolishi
export default authSlice.reducer;
