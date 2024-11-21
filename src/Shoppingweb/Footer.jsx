import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className='bg-black parent'>
        <div className='flex mt-5  justify-start gap-3 text-lg text-white'>

           
                <Link className=' text-white no-underline md:text-xl md:ml-24 '>
                    10Web.io
                </Link>
                
                
                <Link className='text-white no-underline md:text-2xl'>
                  AI Website Builder
                </Link>
            <h5 className='md:text-2xl'>a shopping mall</h5>
        </div>
        <div className='flex mt-5 justify-center md:text-2xl text-white'>

                <h4>Try 10Web free today</h4>
        </div>
        <div className='flex justify-center md:text-2xl text-white'>

                <h4>Build your online business in minutes with AI.</h4>
        </div>
        <div className='justify-center flex pt-5'>
      <button className='bg-blue-600 text-white border rounded-md h-12 w-72 md:text-xl'>Generate Your Website</button>
        </div>

        <div className='grid sm:grid-cols-1 justify-start md:text-xl sm:ml-60 sm:text-2xl md:grid-cols-5 ml-5  pt-5'>
            <div className='text-white mt-2 '>
                <h4>10Web</h4>
                <div className='md:text-base sm:text-xl'>
                    <p>
                    TenWeb, Inc. <br />
                    40 E Main St, Suite 721 <br />
                    Newark, DE 19711 <br />
                    United States
                    </p>
                </div>
            </div>
              
            <div className='text-white md:text-xl sm:mt-2 mt-3'>
               <h5>Company</h5>
               <div className='no-underline'> 
               <Link className='text-slate-500 no-underline hover:text-white '>
               About us
               </Link>
               </div>
               <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white mt-5'>
               Contact us
               </Link>
               </div>
               <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
               Security Statement
               </Link>
               </div>
               <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
              Affliates
               </Link>
               </div>
               <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
               Careers
               </Link>
               </div>
               <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
               Pricing
               </Link>
               </div>
            </div>
            <div className='text-white mt-3'>
                <h5>Product</h5>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
              AI Website Builder
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
              AI Ecommerce
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
             Page Speed Booster
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
             AI business Name <br /> Generator
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline   hover:text-white'>
              Industries
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
              AI Assistant
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
             AI Marketing strategy Generator
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
              Plugins
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
             Widges
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
            Website Management
               </Link>
            </div>
            </div>


            <div className='text-white sm:mt-5'>
                <h5>Customer</h5>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
            10Web for Agencies & Freelancer
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
               Case studies
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
               10Web for SMBs
               </Link>
            </div>
                <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
              Customers Reviews
               </Link>
            </div>
            </div>

            <div className='text-white sm:mt-5'>
            <h5>Resources</h5>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
             Help center
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
               Blog
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
               Website Builder Comparisions
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
            Hosting Comparisions
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
               AI Simplified Newsletter 
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
              Plugin Respository
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
             WordPress glossary
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
            WooCommerce Glossary
               </Link>
            </div>
            <div className='mt-2'> 
               <Link  className='text-slate-500 no-underline  hover:text-white'>
              Hosting Glossary
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
              Site Speed Glossary
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
             Hosting Solutions
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
             Press Kit
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
              Roadmap
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
               Submit your Idea
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
               Facebook Community
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
             AI Technology
               </Link>
            </div>
            <div className='mt-2'> 
               <Link className='text-slate-500 no-underline  hover:text-white'>
              System Status
               </Link>
            </div>
            
           
            </div>



          
           
           
    
    </div>

    <div className='text-white mt-5 pl-3 md:ml-28 md:mt-5 sm:mt-16 sm:ml-48'>
        <h6>Copyright © 2024 TenWeb. All rights reserved .</h6>
    </div>
            

    <div className='flex justify-between ml-3 md:ml-24 gap-0   sm:ml-48 sm:mt-0'>
      <div className='mt-32'>
        <Link className='text-white no-underline hover:underline '>
        Privacy
        </Link>
        <Link className='ml-5 text-white no-underline hover:underline'>
        Terms of services
        </Link>
        <Link className='ml-5 text-white no-underline hover:underline'>
       SLA
        </Link>
        <Link className='ml-5 text-white no-underline hover:underline'>
       Report Abuse
        </Link>
        <Link className='ml-5 text-white no-underline hover:underline'>
        Domain Name Services Agreement
        </Link>
        <Link className=' pl-2 text-white no-underline hover:underline'>
       Accessiblity
        </Link>
        </div>

        <div className='flex  gap-1 mt-56 md:mr-28 md:gap-5 '>

  <i className="fab fa-slack bg-gray-900  gap-3 text-md p-1 text-white border rounded-full"></i>
  <i className="fab fa-twitter bg-gray-900 gap-3 text-md p-1 text-white border rounded-full"></i>
  <i className="fab fa-youtube bg-gray-900  text-md p-1 text-white border rounded-full"></i>
  <i className="fab fa-facebook bg-gray-900  text-md p-1 text-white border rounded-full"></i>
  <i className="fab fa-linkedin bg-gray-900  text-md p-1 text-white border rounded-full"></i>
  
</div>
    </div>
    </div>
   
  )
}


export default Footer