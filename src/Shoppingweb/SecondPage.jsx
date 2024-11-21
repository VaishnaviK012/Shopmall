import React from 'react'
import { Link } from 'react-router-dom'

function SecondPage() {
  return (
    <div className='parent'>
    
    <div className='mt-5'>
        <div className=' bg-black text-white flex'>
            <div className='mt-5 pl-2'>
            <h2>Build your ideal shopping mall website across any niche</h2>
          <div className='mt-4'> <h5> Create a wide array of shopping mall websites, covering every possible type and category.</h5>
          </div>
          <div className='flex mt-4 '> 
           <Link className=' text-white pl-2 font-semibold no-underline'>Fashion Retail</Link>
           <Link className=' text-white pl-2 font-semibold no-underline'>Electronic Stores</Link>
           <Link className=' text-white pl-2 font-semibold no-underline'>Food Court</Link>
           <Link className=' text-white pl-2 font-semibold no-underline'>Entertainment Zone</Link>

           </div>
           </div>
            {/* scnd lin */}
           
        </div>
        <div className=' bg-black text-white grid grid-cols-1 md:grid-cols-2'>
            <div className='mt-10 pl-2'>
                <h3>Electronics Stores</h3>
                <div className='mt-5'>
                <h4>Build a website that showcases your electronics store's latest gadgets and top deals.</h4>
            </div>
                <div className='mt-5'>
                <h4>Make it easy for customers to browse and buy with a user-friendly design and secure checkout process.</h4>
            </div>
                <div className=' ml-28 mt-7  border text-sm w-40 h-8 pl-2 pt-1 rounded-lg bg-blue-800'>
               <button className=''>Generate Your Website</button>
            </div>


            </div>
           {/* img */}
          <div className='mt-5'>
            <img src='/Pictures/shopping_mall.png' alt="" />
          </div>
        </div>
        
    </div>
    </div>






  )
}

export default SecondPage