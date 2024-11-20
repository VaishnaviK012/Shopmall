import React from 'react'

function Fifthpage() {
  return (
    <div className=''>
        <div className='ml-32 mt-20 sm:text-6xl'>
            <h3>5 tips to build a shopping mall website</h3>
        </div>
        <div className='md:ml-48 grid grid-cols-5 md:grid-cols-2 sm:grid-cols-1 mt-8 sm:ml-28 sm:text-xl sm:pt-5'>
            <div className=''>
                <h3>
                Intuitive Navigation</h3>
                <p>Ensure your shopping mall website has a straightforward and <br /> easy-to-navigate layout. Shoppers should find stores, deals, <br /> and information without hassle, enhancing their online experience.</p>
            </div>
            <div>
                    <h3>
                    Store Directories</h3>
                    <p>Incorporate an interactive store directory with search <br /> functionality. This allows visitors to easily locate stores,<br /> read about them, and see their location within the physical mall.</p>
            </div>
            <div>

                <h3>
                Real-time Updates</h3>
                <p>Keep your website updated with the latest store promotions, <br /> events, and news. Real-time updates keep shoppers informed <br />and engaged, encouraging more frequent visits.</p>
            </div>
            <div>
                    <h3>
                    Mobile Optimization</h3>
                    <p>Ensure your website is fully optimized for mobile devices. <br /> A significant portion of users will access your  site on <br /> their phones, so a seamless mobile experience is crucial.</p>
            </div>
            <div>
                <h3>Virtual Tours</h3>
                <p>Offer virtual tours of the shopping mall. This innovative feature <br /> can help online visitors explore the mall layout, store locations, <br /> and amenities, enhancing their planning and visit.</p>
            </div>
             
           
        </div>

        <div className='flex justify-center mt-3 h-12'>
            <button className='bg-black border rounded-lg text-white w-52'>Generate Your Website</button>
        </div>
    </div>
  )
}

export default Fifthpage