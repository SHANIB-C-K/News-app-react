//Importing section 

import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

function App() {
  //usestates
  const [category, setCategory] = useState("general");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {/* This is Navbar page */}
      <Navbar setCategory={setCategory} />
      {/* This is News page */ }
      <News category={category} setIsLoading={setIsLoading} />
      {/* This is NewsItem page */}
      <NewsItem isLoading={isLoading} />
    </>
  );
}

export default App;
