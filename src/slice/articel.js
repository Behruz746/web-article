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
    // GET articles
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
    },
    // GET article detail
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
    // POST article
    postArticleStart: (state) => {
      state.isLoad = true;
    },
    postArticleSuccess: (state) => {
      state.isLoad = false;
    },
    postArticleFailure: (state, action) => {
      state.isLoad = false;
      state.error = action.payload;
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
  postArticleStart,
  postArticleSuccess,
  postArticleFailure,
} = articelsSlice.actions;
export default articelsSlice.reducer;
