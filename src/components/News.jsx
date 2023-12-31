import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = ({ cataGory }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&cataGory=${cataGory}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

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
