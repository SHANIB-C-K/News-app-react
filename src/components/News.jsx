import React, { useEffect, useState } from "react";

const News = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.article));
  }, []);

  return (
    <>
      <div className="pt-5">
        <h2 className="text-center font-bold text-5xl">
          Latest <span className="text-red-800">News</span>
        </h2>
      </div>
    </>
  );
};

export default News;
