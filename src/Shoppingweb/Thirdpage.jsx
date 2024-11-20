import React from 'react'
import { Link } from 'react-router-dom'

function Thirdpage() {
  return (
    <div className=''>
        
        <div className='justify-center flex mt-32 '>
            <h3>How to create a shopping mall website with 10Web</h3>
        </div>
        <div className='justify-center flex text-sm font-serif mt-3 pl-10'>
        <h4>Build your professional shopping mall website quickly and efficiently with 10Web’s AI-driven platform.</h4>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2   '>
            <img src='/Pictures/add-pages.jpg' alt="" className='h-62 w-auto' />

            <div className='justify-end mt-5 sm:ml-28'>
                                
                <div id="accordion-open" data-accordion="open">
                <h4 id="accordion-open-heading-1">
                    <button type="button" class="flex items-center justify-between  p-5 font-sm rtl:text-right text-gray-500  gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                    <span class="flex items-center">1 Answer simple questions</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h4>

                <div id="accordion-open-body-1" class="hidden" aria-labelledby="accordion-open-heading-1">
                    <div class="p-5  dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Provide basic details about your coaching practice.
                        Our setup asks about your niche, audience,
                        and services to customize your website creation process.</p>
                    </div>
                </div>
                <h4 id="accordion-open-heading-2">
                    <button type="button" class="flex items-center justify-between pl-10 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                    <span class="flex items-center ml-2">2 
                    Get AI generated functional website</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h4>
                <div id="accordion-open-body-2" class="hidden" aria-labelledby="accordion-open-heading-2">
                    <div class="p-5 ">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Based on your input, AI generates a full website — including tailored content, images, and a unique layout.
                    This process ensures your site is not only visually appealing but also aligned with your coaching goals and audience expectations.</p>
                    
                    </div>
                </div>
                
                <h4 id="accordion-open-heading-3">
                    <button type="button" class="flex items-center justify-between pl-10 mt-5 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                    <span class="flex items-center ml-2">3 Customize easily</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h4>
                <div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
                    <div class="p-5">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Adjust the AI-created site to perfection using our drag-and-drop no-code editor. Personalize content, images, and layout to better suit your brand and voice. This step blends AI efficiency with your unique touch, making your website truly yours.</p>
                    
                    
                    </div>
                </div>
                
                </div>
 
            </div>
        </div>
        
    </div>
  )
}

export default Thirdpage