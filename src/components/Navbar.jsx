// This is Navbar page

// This is importing section
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useAutoAnimate } from "@formkit/auto-animate/preact";

const Navbar = ({ setCategory }) => {
  const [isClick, setIsClick] = useState(false);

  const HandleClick = () => {
    setIsClick(!isClick);
  };

  const links = [
    { id: 1, name: "General", value: "general" },
    { id: 2, name: "Technology", value: "technology" },
    { id: 3, name: "Business", value: "business" },
    { id: 4, name: "Health", value: "health" },
    { id: 5, name: "Science", value: "science" },
    { id: 6, name: "Sports", value: "sports" },
    { id: 7, name: "Entertainment", value: "entertainment" },
  ];

  function OnClick(value) {
    setCategory(value);
  }
  return (
    <>
      <nav className="shadow-md bg-gray-900 text-white duration-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
              News App
            </span>
          </a>
          <div className="flex justify-between items-center">
            <button
              onClick={HandleClick}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isClick ? (
                <IoClose className="w-20 h-20 lg:hidden" />
              ) : (
                <GiHamburgerMenu className="w-20 h-20 lg:hidden" />
              )}
            </button>
            <div
              className="hidden w-full lg:block lg:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border  rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  bg-gray-800 lg:bg-gray-900 border-gray-700">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="block py-2 px-3 hover:text-primary bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0  text-blue-500 cursor-pointer"
                    onClick={() => OnClick(link.value)}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
            {isClick && (
              <div className="bg-gray-950 fixed inset-x-0 top-24 mx-8 flex flex-col items-center justify-center lg:hidden rounded-xl text-blue-700">
                <ul className="bg-gray-950 flex flex-col items-center justify-center my-8 gap-6">
                  {links.map((link) => (
                    <li
                      key={link.id}
                      className="block py-2 px-3 hover:text-primary"
                      onClick={() => OnClick(link.value)}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
