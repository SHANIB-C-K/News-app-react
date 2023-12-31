// This is Navbar page

// This is importing section
import React from "react";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-cennter">
            <div className="py-2">
              <a
                href="#"
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
              <ul className="hidden sm:flex gap-4">
                <li>
                  <div className="inline-block py-4 px-4 hover:text-primary">Technology</div>
                </li>
                <li>
                  <div className="inline-block py-4 px-4 hover:text-primary">Business</div>
                </li>
                <li>
                  <div className="inline-block py-4 px-4 hover:text-primary">Health</div>
                </li>
                <li>
                  <div className="inline-block py-4 px-4 hover:text-primary">Sports</div>
                </li>
                <li>
                  <div className="inline-block py-4 px-4 hover:text-primary">Entertainment</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
