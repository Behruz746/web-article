import axios from "./api";

const ArticleService = {
  // bu function dinamik: har hil malumotlarini olish
  async postArticle(path, article) {
    const { data } = await axios.post(`/${path}`, { article });
    return data;
  },

  async deleteArticle(slug) {
    await axios.delete(`/articles/${slug}`);
  },

  async editeArticle(slug, article) {
    const { data } = await axios.put(`/${slug}`, { article });
    return data;
  },
};

export default ArticleService;
