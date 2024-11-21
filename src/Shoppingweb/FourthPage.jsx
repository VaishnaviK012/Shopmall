import React from 'react'

function FourthPage() {
  return (
    <div className='bg-black parent'>
        <div className='grid md:grid-cols-3  sm:grid-cols-1 gap-0'>
            <div>
                <img src='./Pictures/1.png' className='sm:h-50 md:h-50' alt="" />
            </div>
            <div>

                {/* <img src='./Pictures/3.png' className='h-32' alt="" /> */}
                
                <div className='mt-0 gap-0 flex justify-center md:pt-40 '>
                    
        < div className='text-white mt-0 text-center '>
        <h4 className='text-green-700'>Editor</h4>
            <h2>Empower your creativity with <br />our 10web editor</h2>
        </div>
       
        </div>
        <div className=' gap-0 flex justify-center md:pt-4 '>
        < div className='text-white  text-center md:font-sm'>
            <h4>Customize your content with AI- powered text and image generation, add animations and interactions</h4>
        </div>
            
       
        </div>
      
            </div>
            <div>
                <img src='./Pictures/5.png' className='h-56 w-96' alt="" />
            </div>
            
        </div>
       
        
    </div>
  )
}

export default FourthPage

