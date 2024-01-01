import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar setCategory={setCategory} />
        <News category={category} />
      </div>
    </>
  );
}

export default App;
