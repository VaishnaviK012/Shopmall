import React from 'react'

function Generate() {
  return (
    <div className='parent'>
        <div className='justify-center flex mt-5'>
            <h2>Generated using 10Web</h2>
        </div>
        <div className='justify-center flex mt-3 pl-2'>
        <h4>Over 2 million websites successfully created using 10Web.</h4>
        </div>

        {/* button session */}
        <div className='justify-center flex mt-3'>
      <button className='bg-blue-600 text-white border rounded-md h-12 w-52'>Generate Your Website</button>
        </div>

        {/* content */}
        <div className='justify-center flex mt-5'>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

{/* content second */}
<div className="sm:ml-3 md:ml-56 ">
      <div className="owl-carousel owl-theme">
        <div className="item">
          <img src="./Pictures/3.png" alt="Image 1" className="w-full h-48 object-cover " />
        </div>
        <div className="item">
          <img src="./Pictures/4.png" alt="Image 2" className="w-full h-48 object-cover pl-4" />
        </div>
        <div className="item">
          <img src="./Pictures/5 (1).png" alt="Image 3" className="w-full h-48 object-cover pl-4" />
        </div>
        <div className="item">
          <img src="./Pictures/2.png" alt="Image 4" className="w-full h-48 object-cover pl-4" />
        </div>
        <div className="item">
          <img src="./Pictures/3 (1).png" alt="Image 5" className="w-full h-48 object-cover pl-4" />
        </div>
        <div className="item">
          <img src="./Pictures/7.png" alt="Image 6" className="w-full h-48 object-cover pl-4" />
        </div>
      </div>

      <div className="owl-carousel owl-theme">
        <div className="item">
          <img src="./Pictures/6 (1).png" alt="Image 1" className="w-full h-48 object-cover pl-4 " />
        </div>
        <div className="item">
          <img src="./Pictures/7.png" alt="Image 2" className="w-full h-48 object-cover pl-4 " />
        </div>
        <div className="item">
          <img src="./Pictures/8.png" alt="Image 3" className="w-full h-48 object-cover pl-4" />
        </div>
        <div className="item">
          <img src="./Pictures/9 (1).png" alt="Image 4" className="w-full h-48 object-cover pl-4" />
        </div>
        <div className="item">
          <img src="./Pictures/10 (1).png" alt="Image 5" className="w-full h-48 object-cover pl-4" />
        </div>
        <div className="item">
          <img src="./Pictures/3.png" alt="Image 6" className="w-full h-48 object-cover pl-4" />
        </div>
      </div>
    </div>
 
</div>
  

        
  )
}

export default Generate

