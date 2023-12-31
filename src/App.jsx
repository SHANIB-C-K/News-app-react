import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <News />
        <NewsItem />
      </div>
    </>
  );
}

export default App;
