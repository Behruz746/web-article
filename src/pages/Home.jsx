import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui";
import ArticleService from "../service/article";
import userData from "../service/data";
import {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesFailure,
} from "../slice/articel";

function Home() {
  const dispatch = useDispatch();
  const { isLoad, articles } = useSelector((state) => state.article);

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const { articles } = await userData.getData("articles");
      dispatch(getArticlesSuccess(articles));
    } catch (error) {
      console.log(error);
      dispatch(getArticlesFailure(error));
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="home">
      <div className="container">
        {isLoad ? (
          <Loader />
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map((item) => (
              <Card {...item} getArticles={getArticles} key={uuidv4()} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
