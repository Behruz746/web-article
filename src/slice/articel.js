import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoad: false,
  articles: [],
  articleDetail: null,
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
    getArticleDetailStart: (state) => {
      state.isLoad = true;
    },
    getArticleDetailSuccess: (state, action) => {
      state.articleDetail = action.payload;
      state.isLoad = false;
    },
    getArticleDetailFailure: () => {
      state.isLoad = false;
      state.error = action.payload;
      console.log("error");
    },
  },
});

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
} = articelsSlice.actions;
export default articelsSlice.reducer;
