import React, { useEffect, useState } from "react";
import { getArticles } from "../assets/js/near/utils";
import { noArticleImg } from "../constant/index";

function MyArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      let articles = await getArticles();
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  return (
    <div className="article">
      {articles?.length === 0 ? (
        <div className="noArticleContainer">
          <span>No Articles Found</span>
          <img src={noArticleImg} alt="" />
        </div>
      ) : (
        articles &&
        articles.map((article, index) => (
          <div className="articleCard" key={index}>
            <div className="nameContainer">
              <span className="articleName">{article.split("---")[0]}</span>
            </div>
            <div className="headingContainer">
              <span className="articleHeading">{article.split("---")[1]}</span>
            </div>
            <div className="imgContainer">
              <img src={article.split("---")[4]} alt="" />
            </div>
            <div className="contentContainer">
              <p className="articleContent">{article.split("---")[3]}</p>
            </div>
            <div className="autherContainer">
              <span className="articleAuther">~{article.split("---")[2]}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyArticles;
