import React, { useEffect } from "react";
import userData from "../service/data";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
} from "../slice/articel";
import moment from "moment";

function Article() {
  const { id } = useParams();
  const { articleDetail, isLoad } = useSelector((state) => state.article);
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

  return isLoad ? (
    <Loader />
  ) : (
    articleDetail !== null && (
      <div className="container">
        <div className="article__content">
          <h1 className="article__title">{articleDetail.title}</h1>
          <p className="article__description ">{articleDetail.description}</p>
          <div>
            {articleDetail.body}{" "}
            <p className="article__date m-0">
              <span className="fw-bold">created at: </span>
              {moment(articleDetail.createdAt).format("DD MMM, YYYY")}
            </p>
          </div>
          <div className="d-flex row gap-1 mt-3">
            <p className="m-0 text-capitalize">
              <span className="fw-bold text-lowercase">auther name:</span>{" "}
              {articleDetail.author.username}
            </p>
            <p className="m-0">
              <span className="fw-bold">auther bio:</span>{" "}
              {articleDetail.author.bio}
            </p>
            <button type="button" className="btn btn-primary mt-3">
              auther profile
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Article;
