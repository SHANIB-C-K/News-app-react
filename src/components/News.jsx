import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b1e4072d030c42d4a4a7f4ca2e93269b`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <>
      <div className="pt-5">
        <h2 className="text-center font-bold text-5xl">
          Latest <span className="text-red-800">News</span>
        </h2>
        <div>
          {articles.map((news, index) => {
            return (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
