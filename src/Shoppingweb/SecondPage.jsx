import React from 'react'
import { Link } from 'react-router-dom'

function SecondPage() {
  return (
    <div className='mt-5'>
        <div className=' bg-black text-white flex  pl-32'>
            <div className='mt-5'>
            <h2>Build your ideal shopping mall website across any niche</h2>
          <div className='mt-4'> <h5> Create a wide array of shopping mall websites, covering every possible type and category.</h5>
          </div>
          <div className='flex mt-4 '> 
           <Link className='gap-2 text-white ml-9 font-semibold no-underline'>Fashion Retail</Link>
           <Link className='gap-2 text-white ml-9 font-semibold no-underline'>Electronic Stores</Link>
           <Link className='gap-2 text-white ml-9 font-semibold no-underline'>Food Court</Link>
           <Link className='gap-2 text-white ml-9 font-semibold no-underline'>Entertainment Zone</Link>

           </div>
           </div>
            {/* scnd lin */}
           
        </div>
        <div className=' bg-black text-white grid grid-cols-1 md:grid-cols-2'>
            <div className='mt-20 ml-32'>
                <h3>Electronics Stores</h3>
                <div className='mt-5'>
                <h4>Build a website that showcases your electronics store's latest gadgets and top deals.</h4>
            </div>
                <div className='mt-5'>
                <h4>Make it easy for customers to browse and buy with a user-friendly design and secure checkout process.</h4>
            </div>
                <div className=' mt-5 ml-24 border text-sm w-32 rounded-lg bg-blue-800'>
               <button>Generate Your Website</button>
            </div>


            </div>
           
          <div>
            <img src='/Pictures/shopping_mall.png' alt="" />
          </div>
        </div>
        
    </div>






  )
}

export default SecondPage