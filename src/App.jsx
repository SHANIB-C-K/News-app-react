import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

function App() {
  const [category, setCategory] = useState("general");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar setCategory={setCategory} />
        <News category={category} setIsLoading={setIsLoading} />
        <NewsItem isLoading={isLoading} />
      </div>
    </>
  );
}

export default App;
