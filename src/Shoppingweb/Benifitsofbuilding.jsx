import React, { useState } from 'react';

function Benifitsofbuilding() {
  // State to track which accordion section is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the accordion sections
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <div className='bg-black  text-white mt-5'>
        <div className=' pt-5 sm:ml-12 '>
            <h3 className='md:pl-44 md:text-4xl'>The benefits of building with 10Web</h3>
            <p className='sm:text-2xl mt-4 md:pl-44'>Quickly launch a professional shopping mall website without coding. Benefit from AI tools, fastest and fully <br /> automated hosting powered by Google Cloud, top notch security, scalable features, dedicated support, and more, <br /> all at a cost-effective price.Checkmark
            Automated Hosting</p>
        </div>
        <div className='grid grid-cols-2 sm:ml-10'>

            <div className=''>
            <div className="max-w-2xl mx-auto mt-10 ">
      {/* Accordion Section 1 */}
      <div className=" border-b border-gray-200 dark:border-gray-700">
        <h2>
          <button
            type="button"
            onClick={() => toggleAccordion(1)}
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 dark:text-gray-400 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          >
            <span className="flex items-center">
              <svg
                className="w-5  me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
             
                Automated Hosting
            </span>
            <svg
              className={`w-3 transform ${activeIndex === 1 ? 'rotate-180' : ''} transition-transform`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeIndex === 1 && (
          <div className="p-5 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 sm:text-2xl text-gray-500 dark:text-gray-400">
            No need to worry about hosting downtimes and technical <br /> maintenance again. With 99.9% uptime and elastic scaling,  <br /> your websites will be up and running at all times, so you can <br /> focus on other tasks.
            </p>
          </div>
        )}
      </div>

      {/* Accordion Section 2 */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <h2>
          <button
            type="button"
            onClick={() => toggleAccordion(2)}
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 dark:text-gray-400 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 gap-3"
          >
            <span className="flex items-center">
              <svg
                className="w-5  me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            
                PageSpeed Booster
            </span>
            <svg
              className={`w-3  transform ${activeIndex === 2 ? 'rotate-180' : ''} transition-transform`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeIndex === 2 && (
          <div className="p-5 border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 sm:text-2xl text-gray-500 dark:text-gray-400">
            Automatically optimize the frontend speed of your website <br /> and get a 90+ PageSpeed score, improved Core Web Vitals, <br /> 50% faster load times, higher rankings on Google and better <br /> website performance.
            </p>
           
          </div>
        )}
      </div>

      {/* Accordion Section 3 */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <h2>
          <button
            type="button"
            onClick={() => toggleAccordion(3)}
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 dark:text-gray-400 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 gap-3"
          >
            <span className="flex items-center">
              <svg
                className="w-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
             
                Cloudflare CDN
            </span>
            <svg
              className={`w-3  transform ${activeIndex === 3 ? 'rotate-180' : ''} transition-transform`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeIndex === 3 && (
          <div className="p-5 border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 sm:text-2xl text-gray-500 dark:text-gray-400">
            Reduce load times and improve performance by enabling <br /> Cloudflare Enterprise CDN. Get Enterprise CDN full page <br /> cache, DDoS and bot protection, free SSL certificate, web <br /> application firewall, and mobile optimization with Mirage.
            </p>
           
          </div>
        )}
      </div>
      {/* accordion 4 */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <h2>
          <button
            type="button"
            onClick={() => toggleAccordion(3)}
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 dark:text-gray-400 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 gap-3"
          >
            <span className="flex items-center">
              <svg
                className="w-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
             
           
                Security
            </span>
            <svg
              className={`w-3 transform ${activeIndex === 3 ? 'rotate-180' : ''} transition-transform`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeIndex === 3 && (
          <div className="p-5 border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 sm:text-2xl text-gray-500 dark:text-gray-400">
            We monitor all websites hosted on 10Web for security <br /> breaches, malware detection, DDoS attacks, preventing brute <br /> force attacks, and more.
            </p>
            
          </div>
        )}
      </div>

      {/* accordion 5 */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <h2>
          <button
            type="button"
            onClick={() => toggleAccordion(3)}
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 dark:text-gray-400 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 gap-3"
          >
            <span className="flex items-center">
              <svg
                className="w-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Automated daily backups
            </span>
            <svg
              className={`w-3 transform ${activeIndex === 3 ? 'rotate-180' : ''} transition-transform`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeIndex === 3 && (
          <div className="p-5 border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 sm:text-2xl text-gray-500 dark:text-gray-400">
            Rest easy with our automated daily backup service. Do not <br /> worry about data loss, and concentrate on other aspects of <br /> your website.
            </p>
            
          </div>
        )}
      </div>
    </div>
            </div>
   {/* <div className='mt-32 w-56  ml-52 '>
   <video
        className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
        controls
        autoPlay
        muted  // Muted for autoplay without user interaction (in most browsers)
        loop    // Loop the video indefinitely
      >
        <source src="./Pictures/backup.webm" type="video/webm" />
        <source src="./Pictures/backup.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   </div> */}
    </div>
    </div>
  );
}

export default Benifitsofbuilding;

