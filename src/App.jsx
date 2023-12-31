import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [catagory, setCatagory] = useState("general");
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar setCatagory={setCatagory} />
        <News catagory={catagory} />
      </div>
    </>
  );
}

export default App;
