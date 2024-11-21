import React, { useState } from 'react';
import './Navvv.css';

function Navv() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu handler
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="parent">
      {/* Navbar container */}
      <nav className="bg-white dark:bg-gray-900 p-4">
        <div className="max-w-screen-xl flex items-center justify-evenly mx-auto">
          {/* Logo */}
          <h3 className="text-2xl font-semibold dark:text-white">10Web</h3>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
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
        

        {/* Mobile Menu */}
        <div
          id="navbar-default"
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row md:space-x-8  transition-all duration-300 ease-in-out`}
        >
          <ul className="font-medium flex flex-col md:flex-row">
            <li>
              <a
                href="#"
                className=" pt-3 py-2 px-4   no-underline text-black  hover:text-gray-300"
              >
                AI
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" pt-3 py-2 px-4  no-underline  text-black  hover:text-gray-300"
              >
                Ecommerce
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" pt-3 py-2 px-4  no-underline text-black  hover:text-gray-300"
              >
                WordPress
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" pt-3 py-2 px-4  no-underline text-black  hover:text-gray-300"
              >
                Domains
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" pt-3 py-2 px-4  no-underline text-black  hover:text-gray-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" ml-4 no-underline text-blue-700  border  bg-gray-100 h-28 rounded-sm hover:text-gray-100"
              >
                Talk to Sales
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" pt-3 py-2 px-4  no-underline text-black  hover:text-gray-300"
              >
                Log in/Sign in
              </a>
            </li>
          </ul>

          <div className='border bg-black ml-4 sm:pl-4  text-white md:w-44 md:h-12 md:pl-2 rounded-md'>
            <button className='pl-2 w-40 h-8'>Get Started for Free</button>
          </div>
        </div>
        </div>

      </nav>
      

      {/* Main content */}
      <div className=" mt-20 flex justify-center">
        <h2 className="text-md md:text-5xl sm:text-4xl font-bold">
          Create <span className="text-blue-700">a shopping mall</span>
          <br />
          <span className="pl-4">website in seconds</span>
        </h2>
      </div>

      <div className="flex justify-center">
        <p className="mt-2 text-xl md:text-2xl sm:text-2xl pl-10">
          Design a dynamic shopping mall website effortlessly using AI Website Builder,
          <br />
          enhancing user experience with personalized store recommendations and
          <br />
         <span className='flex justify-center '>  interactive maps.</span>
          </p>
      </div>

          {/* images */}

      <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-0">
        <div><img src="./Pictures/OIP.jpeg" className="h-14 mx-auto mt-5 hover:scale-105 transition-transform" alt="AI Image" /></div>
        <div><img src="./Pictures/forbes-logo-0.png" className="h-32 md:mt-4 mx-auto hover:scale-105 transition-transform" alt="Forbes Logo" /></div>
        <div><img src="./Pictures/986464.png" className="h-20 mx-auto  md:mt-10 hover:scale-105 transition-transform" alt="Ecommerce Image" /></div>
      </div>

      <div className="flex justify-center">
        <button className="border rounded-lg md:text-base md:w-56 md:h-12 sm:h-16 sm:text-2xl sm:w-72 w-64 h-12 bg-black text-white">
          <i className="fa-solid fa-star"></i> Generate Your Website
        </button>
      </div>
    </div>
  );
}

export default Navv;
