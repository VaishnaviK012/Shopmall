import React, { useState } from 'react';

function Navv() {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="overflow-hidden">
      {/* Navbar container */}
      <nav className="bg-white dark:bg-gray-900 p-4">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto">
          {/* Logo */}
          <h3 className="text-2xl font-semibold dark:text-white">10Web</h3>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu} // Toggle menu visibility on button click
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
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
        </div>

        {/* Mobile Menu */}
        <div
          id="navbar-default"
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row md:space-x-8 bg-gray-50 dark:bg-gray-800`}
        >
          <ul className="font-medium flex flex-col md:flex-row">
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                AI
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Ecommerce
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                WordPress
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Domains
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Talk to Sales
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Log in/Sign in
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <div className="mt-20 flex justify-center">
        <h1 className="text-5xl font-bold">
          Create <span className="text-blue-700">a shopping mall</span>
          <br />
          <span className="ml-16">website in seconds</span>
        </h1>
      </div>

      <div className="flex justify-center">
        <p className="mt-4 text-sm md:text-2xl sm:text-4xl">
          Design a dynamic shopping mall website effortlessly using AI Website Builder,
          <br />
          enhancing user experience with personalized store recommendations and
          <br />
          <span className="ml-72">interactive maps.</span>
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-10">
        <div>
          <img src="./Pictures/OIP.jpeg" className="h-24 mx-auto hover:scale-105 transition-transform" alt="AI Image" />
        </div>
        <div>
          <img src="./Pictures/forbes-logo-0.png" className="h-48 mx-auto" alt="Forbes Logo" />
        </div>
        <div>
          <img src="./Pictures/986464.png" className="h-28 mx-auto" alt="Ecommerce Image" />
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <button className="border rounded-lg md:text-base md:w-56 md:h-12 sm:h-16 sm:text-2xl sm:w-72 bg-black text-white">
          <i className="fa-solid fa-star"></i> Generate Your Website
        </button>
      </div>
    </div>
  );
}

export default Navv;
