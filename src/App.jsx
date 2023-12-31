import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <News />
      </div>
    </>
  );
}

export default App;
