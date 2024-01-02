import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

function App() {
  const [category, setCategory] = useState("general");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Navbar setCategory={setCategory} />
      <News category={category} setIsLoading={setIsLoading} />
      <NewsItem isLoading={isLoading} />
    </>
  );
}

export default App;
