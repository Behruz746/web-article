import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../components";
import { useSelector } from "react-redux";
import { Loader } from "../ui";

function Home() {
  const { isLoad, articles } = useSelector((state) => state.article);
  return (
    <div className="container">
      {isLoad ? (
        <Loader />
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles.map((item) => (
            <Card {...item} key={uuidv4()} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
