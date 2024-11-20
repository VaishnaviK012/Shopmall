// import React, { useState } from 'react'

// function FQA() {
//       // State to track which accordion section is open
//   const [activeIndex, setActiveIndex] = useState(null);

//   // Toggle the accordion sections
//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };
//   return (
//     <div>
//         <div className='flex sm:ml-24 sm:mt-24'>
//             <h2>FQA</h2>
//         </div>
        
//         <div className='grid grid-cols-6'>

           
//       {/* Accordion Section 1 */}
//       <div className=" border-b border-gray-200 dark:border-gray-700">
//         <h2>
//           <button
//             type="button"
//             onClick={() => toggleAccordion(1)}
//             className="flex items-center justify-between w-full md:ml-16 font-medium  md:text-xl gap-3"
//           >
//             <span className="flex items-center">
//               <svg
//                 className="w-5  me-2 shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
             
//                How does the 10web AI Website Builder specifically cater to creating a website for a shopping mall?
//             </span>
//             <svg
//               className={`w-3 transform ${activeIndex === 1 ? 'rotate-180' : ''} transition-transform`}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>
//         {activeIndex === 1 && (
//           <div className="md:ml-20 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 sm:text-2xl md:text-lg text-gray-500 dark:text-gray-400">
//              The 10Web Ai Webisite builder is design to carte to various business needs,including shopping malls. by analysis the specific business need to provide your shopping mall, 
//              such as the types of store, service offered and target audience, the AI can generate a customized Webisite.
//             The platform extensive customization options allow you to tailor the website to match the shopping malls branding 
//             and customer engagement strategies. 
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Second Accordion */}
//       <div className=" border-b border-gray-200  dark:border-gray-700">
//         <h2>
//           <button
//             type="button"
//             onClick={() => toggleAccordion(1)}
//             className="flex items-center justify-between w-full md:ml-16 font-medium  md:text-xl gap-3"
//           >
//             <span className="flex items-center">
//               <svg
//                 className="w-5  me-2 shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
             
//                 Can I integrate an online store with my shopping mall <br />website created through 10web AI Website Builder?
//             </span>
//             <svg
//               className={`w-3 transform ${activeIndex === 1 ? 'rotate-180' : ''} transition-transform`}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>
//         {activeIndex === 1 && (
//           <div className="md:ml-20 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 sm:text-2xl md:text-lg text-gray-500 dark:text-gray-400">
//              Yes, You can integrate an online store with your shopping mall wesbite.The builder's drag-and-drop interface allows for easy integrate of  e-commerce funtionalities
//              , enabling your  visitors to  browser and purchase products online. Additionality , the platforms supports various e-commerce puglins and tools to enchance your online store's capabilities.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Third Accordtion */}
//       <div className=" border-b border-gray-200 mt-5 dark:border-gray-700">
//         <h2>
//           <button
//             type="button"
//             onClick={() => toggleAccordion(1)}
//             className="flex items-center justify-between w-full md:ml-16 font-medium  md:text-xl gap-3"
//           >
//             <span className="flex items-center">
//               <svg
//                 className="w-5  me-2 shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
             
//                How does the 10Web AI Website builder ensure my shopping mall website is optimized for search engines?
//             </span>
//             <svg
//               className={`w-3 transform ${activeIndex === 1 ? 'rotate-180' : ''} transition-transform`}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>
//         {activeIndex === 1 && (
//           <div className="md:ml-20 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 sm:text-2xl md:text-lg text-gray-500 dark:text-gray-400">
//             The platform offers built -in-SEO optimazation features to help your shopping mall Website rank higher in search engine results.It guides you through optimizing your wesbite's content, structure, and meta tags.
//             Futhermore, AI generated Website is designed to be mobile-firendly and fast-loading, which are key factore in SEO performance.
//             </p>
//           </div>
//         )}
//       </div>
//       <div className=" border-b border-gray-200 mt-5 dark:border-gray-700">
//         <h2>
//           <button
//             type="button"
//             onClick={() => toggleAccordion(1)}
//             className="flex items-center justify-between w-full md:ml-16 font-medium  md:text-xl gap-3"
//           >
//             <span className="flex items-center">
//               <svg
//                 className="w-5  me-2 shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
             
//               What kind of support can I expect while building my shopping mall Website with 10Web AI Website Builder?
//             </span>
//             <svg
//               className={`w-3 transform ${activeIndex === 1 ? 'rotate-180' : ''} transition-transform`}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>
//         {activeIndex === 1 && (
//           <div className="md:ml-20 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 sm:text-2xl md:text-lg text-gray-500 dark:text-gray-400">
//             10Web provides extensive support to ensure a smooth website building experince. You have access to 24/7 live chat, dedicated Slack channels,
//             and community  forums where you can ask questions,seek advice, and share experiences with other users. This support network is designed to help 
//             you overcome any challenges you may  encounter during the Webisite creation process.
//             </p>
//           </div>
//         )}
//       </div>
//       <div className=" border-b border-gray-200 mt-5 dark:border-gray-700">
//         <h2>
//           <button
//             type="button"
//             onClick={() => toggleAccordion(1)}
//             className="flex items-center justify-between w-full md:ml-16 font-medium  md:text-xl gap-3"
//           >
//             <span className="flex items-center">
//               <svg
//                 className="w-5  me-2 shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
             
//             How secure will my shopping mall website be with 10web AI Website Builder?
//             </span>
//             <svg
//               className={`w-3 transform ${activeIndex === 1 ? 'rotate-180' : ''} transition-transform`}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>
//         {activeIndex === 1 && (
//           <div classNamet="md:ml-20 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 sm:text-2xl md:text-lg text-gray-500 dark:text-gray-400">
//           Websites created with the 10Web AI Builder are hosted on Google Cloud , benefiting from high-performance infrastrure and robust security 
//           measures. This include SSL encryption to protect data transfers, DDoS protection  to gurad against  attacks, and regular security updates. 
//           These  features ensure that your shopping mall websites is secure and reliable for your visitors.
//             </p> 
//           </div>
//         )}
//       </div>

//       <div className=" border-b border-gray-200 mt-5 dark:border-gray-700">
//         <h2>
//           <button
//             type="button"
//             onClick={() => toggleAccordion(1)}
//             className="flex items-center justify-between w-full md:ml-16 font-medium  md:text-xl gap-3"
//           >
//             <span className="flex items-center">
//               <svg
//                 className="w-5  me-2 shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
             
//             Can i Customize performance settings of my shopping mall website on the 10Web AI Website Builder platforms?
//             </span>
//             <svg
//               className={`w-3 transform ${activeIndex === 1 ? 'rotate-180' : ''} transition-transform`}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>
//         {activeIndex === 1 && (
//           <div classNamet="md:ml-20 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 sm:text-2xl md:text-lg text-gray-500 dark:text-gray-400">
//         Yes, the 10Web AI Website Builder provides options to customize the performance settings of your Website. you can adjust various parameters such as caching,image optimizaton, and file minification 
//         to enchance your website's  loading speed and overall performance. These adjustments can be made through the platform's user-friendly interface,
//         ensuring that your shopping mall website offers a smooth and fast browsing experience to your visitors.
//             </p> 
//           </div>
//         )}
//       </div>
     
//         </div>
        
//     </div>
   
  
//   )
// }

// export default FQA
import React, { useState } from 'react';

function FQA() {
  // State to track which accordion section is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the accordion sections
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className='flex sm:ml-24 sm:mt-24'>
        <h2>FQA</h2>
      </div>

      <div className='grid grid-cols-6 sm:grid-cols-1 mt-2 '>
        {/* Accordion Section 1 */}
        <div className="border-b border-gray-200 dark:border-gray-700 ">
          <h2>
            <button
              type="button"
              onClick={() => toggleAccordion(0)} // Unique index for each section
              className="flex items-center justify-between w-full md:ml-16 font-medium md:text-xl gap-3"
            >
              <span className="flex items-center">
                {/* <svg
                  className="w-5 me-2 shrink-0 " 
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg> */}
                <h4>How does the 10Web AI Website Builder specifically cater to creating a website for a shopping mall?</h4>
              </span>
              <svg
                className={`w-3 transform ${activeIndex === 0 ? 'rotate-180' : ''} transition-transform`}
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
          {activeIndex === 0 && (
            <div className="md:ml-20 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 sm:text-2xl md:text-2xl sm:pl-5  text-gray-500 dark:text-gray-400">
                The 10Web AI Website Builder is designed to cater to various business needs, including shopping malls. By analyzing the specific business needs of your shopping mall, such as the types of stores, services offered, and target audience, the AI can generate a customized website. 
                The platform's extensive customization options allow you to tailor the website to match the shopping mall's branding and customer engagement strategies.
              </p>
            </div>
          )}
        </div>

        {/* Accordion Section 2 */}
        <div className="border-b  border-gray-200 dark:border-gray-700 pt-4">
          <h2>
            <button
              type="button"
              onClick={() => toggleAccordion(1)} // Unique index for each section
              className="flex items-center justify-between w-full md:ml-16 font-medium md:text-xl gap-3"
            >
              <span className="flex items-center">
                {/* <svg
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
                </svg> */}
                <h4>Can I integrate an online store with my shopping mall website created through 10Web AI Website Builder?</h4>
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
            <div className="md:ml-20 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 sm:text-2xl  md:text-2xl text-gray-500 dark:text-gray-400 sm:pl-5">
                Yes, you can integrate an online store with your shopping mall website. The builder's drag-and-drop interface allows for easy integration of e-commerce functionalities, enabling your visitors to browse and purchase products online. Additionally, the platform supports various e-commerce plugins and tools to enhance your online store's capabilities.
              </p>
            </div>
          )}
        </div>

        {/* Accordion Section 3 */}
        <div className="border-b border-gray-200 pt-4 dark:border-gray-700">
          <h2>
            <button
              type="button"
              onClick={() => toggleAccordion(2)} // Unique index for each section
              className="flex items-center justify-between w-full md:ml-16 font-medium md:text-xl gap-3"
            >
              <span className="flex items-center">
                {/* <svg
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
                </svg> */}
              <h4>  How does the 10Web AI Website Builder ensure my shopping mall website is optimized for search engines?</h4>
              </span>
              <svg
                className={`w-3 transform ${activeIndex === 2 ? 'rotate-180' : ''} transition-transform`}
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
            <div className="md:ml-20 border-t-0  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 sm:text-2xl md:text-2xl  text-gray-500 dark:text-gray-400 sm:pl-4">
                The platform offers built-in SEO optimization features to help your shopping mall website rank higher in search engine results. It guides you through optimizing your website's content, structure, and meta tags. Furthermore, the AI-generated website is designed to be mobile-friendly and fast-loading, which are key factors in SEO performance.
              </p>
            </div>
          )}
        </div>

        {/* Accordion Section 4 */}
        <div className="border-b border-gray-200 pt-4 dark:border-gray-700">
          <h2>
            <button
              type="button"
              onClick={() => toggleAccordion(3)} // Unique index for each section
              className="flex items-center justify-between w-full md:ml-16 font-medium md:text-xl gap-3"
            >
              <span className="flex items-center">
                {/* <svg
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
                </svg> */}
               <h4> Is the 10Web AI Website Builder capable of handling high traffic for a shopping mall website?</h4>
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
            <div className="md:ml-20 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 sm:text-2xl md:text-2xl text-gray-500 dark:text-gray-400 sm:pl-4">
                Yes, the 10Web AI Website Builder is built to handle high traffic volumes, making it suitable for shopping mall websites that require robust performance. The platform offers optimized hosting with a focus on scalability, fast page loading, and smooth user experience, even during peak traffic periods.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FQA;
