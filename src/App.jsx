import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [category, setCategory] = useState("general");
  const [setActive] = useState(1);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar setActive={setActive} setCategory={setCategory} />
        <News category={category} />
      </div>
    </>
  );
}

export default App;
