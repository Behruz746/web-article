import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoad: false,
  articles: [],
  error: null,
};

export const articelsSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoad = true;
    },
    getArticlesSuccess: (state, action) => {
      state.articles = action.payload;
      state.isLoad = false;
    },
    getArticlesFailure: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
      console.log("error");
    },
  },
});

export const { getArticlesStart, getArticlesSuccess, getArticlesFailure } =
  articelsSlice.actions;
export default articelsSlice.reducer;
