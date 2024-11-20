import React from 'react'

function Browser() {
  return (
    <div className=''>
        
        <div className='ml-20 sm:mt-4 sm:ml-28'>
            <h2>Browse <span className='text-blue-700'>AI Website Builder </span> by industry</h2> 
        </div>
        <div className='grid grid-cols-6 sm:mr-16 sm:grid-cols-1 md:grid-cols-4 mt-5 '>
            <button className='border border-black  rounded-3xl md:text-xl sm:text-3xl font-semibold text-xl h-16 w-34 border-black-950 ml-36'>Yoga retreat</button>
            <button className='border  border-black sm:mt-4 sm:text-3xl md:text-xl rounded-3xl font-semibold text-xl h-16 w-34 border-black-950 ml-36'>Tobacco Shop</button>
            <button className='border  border-black sm:mt-4 sm:text-3xl md:text-xl rounded-3xl font-semibold text-xl h-16 w-34 border-black-950 ml-36'>Wardrobe Shop</button>
            <button className='border  border-black sm:mt-4 sm:text-3xl  md:text-xl rounded-3xl font-semibold text-xl h-16 w-34 border-black-950 ml-36 '>Homeware Store</button>
            <button className='border  border-black sm:mt-4 sm:text-3xl md:text-xl rounded-3xl font-semibold text-xl h-16 w-34 border-black-950 ml-36 '>Law practice</button>
            <button className='border  border-black sm:mt-4 sm:text-3xl md:text-xl rounded-3xl font-semibold text-xl h-16 w-34 border-black-950 ml-36 bg-black text-white '>See all industries</button>
           
        </div>
    </div>
  )
}

export default Browser