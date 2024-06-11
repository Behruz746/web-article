import React, { useEffect } from "react";
import userData from "../service/data";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
} from "../slice/articel";

function Article() {
  const { id } = useParams();
  const { articleDetail } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    const getArticle = async () => {
      dispatch(getArticleDetailStart());
      try {
        const { article } = await userData.getData(`articles/${id}`);
        dispatch(getArticleDetailSuccess(article));
      } catch (error) {
        dispatch(getArticleDetailFailure(error));
      }
    };

    getArticle();
  }, [id]);

  return (
    <div className="container">
      <div className="article__content">
        <h1 className="article__title">{articleDetail?.title}</h1>
        <p className="article__description">{articleDetail?.description}</p>
        <p className="article__date"></p>
      </div>
    </div>
  );
}

export default Article;
