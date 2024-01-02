import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = ({ category, setIsLoading }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <>
      <div className="pt-5 bg-gray-900">
        <h2 className="text-center font-bold text-5xl text-white">
          Latest <span className="text-red-800">News</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 py-32 pt-8 gap-6">
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
