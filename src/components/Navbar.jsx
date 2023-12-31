// This is Navbar page

// This is importing section
import React from "react";
import DarkMode from "./DarkMode";

const Navbar = ({ active, setActive, setCategory }) => {
  const links = [
    { id: 1, name: "General", value: "general" },
    { id: 2, name: "Technology", value: "technology" },
    { id: 3, name: "Business", value: "business" },
    { id: 4, name: "Health", value: "health" },
    { id: 5, name: "Science", value: "science" },
    { id: 6, name: "Sports", value: "sports" },
    { id: 7, name: "Entertainment", value: "entertainment" },
  ];

  function OnClick(id, value) {
    setActive(id);
    setCategory(value);
  }
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-cennter">
            <div className="py-2">
              <a
                href="/"
                className="flex items-center gap-2 text-2xl md:3xl font-bold"
              >
                <h1>News App</h1>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <DarkMode />
                {/* This is DarkMode page call */}
              </div>
              <ul className=" lg:block flex space-x-8">
                {
                  /* Map through the array of objects and create a list item for each object.*/
                  links.map((link) => (
                    <li
                      key={link.id}
                      className="inline-block py-4 px-4 hover:text-primary"
                      onClick={() => OnClick(link.id, link.value)}
                    >
                      {link.name}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
