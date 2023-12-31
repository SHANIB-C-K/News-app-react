// This is Navbar page

// This is importing section
import React from "react";
import DarkMode from "./DarkMode";

const Navbar = ({ setActive, setCategory }) => {
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
      <nav className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
              News App
            </span>
          </a>
          <div className="flex justify-between items-center">
          <div className="pr-4">
            <DarkMode />
            {/* This is DarkMode page call */}
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="block py-2 px-3 lg:text-black hover:text-primary bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500"
                  onClick={() => OnClick(link.id, link.value)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
