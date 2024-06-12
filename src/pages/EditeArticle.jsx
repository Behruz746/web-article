import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "../components";
import userData from "../service/data";
import ArticleService from "../service/article";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
  postArticleStart,
  postArticleSuccess,
  postArticleFailure,
} from "../slice/articel";
import { useDispatch } from "react-redux";

function EditeArticle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const getArticle = async () => {
      dispatch(getArticleDetailStart());
      try {
        const { article } = await userData.getData(`articles/${slug}`);
        dispatch(getArticleDetailSuccess(article));
        setTitle(article.title);
        setDescription(article.description);
        setBody(article.body);
      } catch (error) {
        console.log(error);
        dispatch(getArticleDetailFailure(error));
      }
    };
    getArticle();
  }, [slug]);

  const formSubmit = async (e) => {
    e.preventDefault();
    if (title && description && body !== "") {
      dispatch(postArticleStart());
      // article data
      const article = { title, description, body };
      try {
        await ArticleService.editeArticle(`articles/${slug}`, article);
        dispatch(postArticleSuccess());
        navigate("/");
      } catch (error) {
        dispatch(postArticleFailure(error));
        console.log(error);
      }
    }
  };

  const formProps = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  };

  return (
    <div className="container d-flex row align-items-center">
      <h1 className="fs-2 text-center">Edite article</h1>
      <Form {...formProps} />
    </div>
  );
}

export default EditeArticle;
