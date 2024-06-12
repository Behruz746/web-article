import React, { useState } from "react";
import { Form } from "../components";
import ArticleService from "../service/article";
import {
  postArticleStart,
  postArticleSuccess,
  postArticleFailure,
} from "../slice/articel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const articleDateClear = () => {
    setTitle("");
    setDescription("");
    setBody("");
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (title && description && body !== "") {
      dispatch(postArticleStart());
      // article data
      const article = { title, description, body };
      try {
        await ArticleService.postArticle("articles", article);
        dispatch(postArticleSuccess());
        articleDateClear();
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
      <h1 className="fs-2 text-center">Create article</h1>
      <Form {...formProps} />
    </div>
  );
}

export default CreateArticle;
