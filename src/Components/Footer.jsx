import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-blue-950 flex flex-col items-center pt-6 pb-2'>
      <div className='flex flex-col md:flex-row flex-wrap gap-8 md:gap-12 lg:gap-20 w-full justify-center items-start'>
        <div className='w-full md:w-[350px] mb-4 md:mb-0 flex flex-col items-center md:items-start'>
          <h1 className='font-bold text-3xl md:text-4xl text-white pt-6 md:pt-18'>Codeshare</h1>
          <p className='text-white pt-3 text-center md:text-left text-base md:text-lg max-w-xs'>The ultimate marketplace for developers to discover, purchase, and sell high-quality code snippets and templates.</p>
        </div>
        <div className='w-full sm:w-[300px] md:w-[200px] flex justify-center md:justify-start'>
          <ul className='p-4 flex flex-col gap-2 md:gap-3 text-white w-full'>
            <li className='font-semibold text-lg md:text-xl pt-6 md:pt-10'> Marketplace</li>
            <li className='pt-2 md:pt-4'>Browse Code</li>
            <li>Categories</li>
            <li>Featured Products</li>
            <li>New Releases</li>
            <li>Best Sellers</li>
          </ul>
        </div>
        <div className='w-full sm:w-[300px] md:w-[200px] flex justify-center md:justify-start'>
          <ul className='p-4 flex flex-col gap-2 md:gap-3 text-white w-full'>
            <li className='font-semibold text-lg md:text-xl pt-6 md:pt-10'> For Sellers</li>
            <li className='pt-2 md:pt-4'>Start Selling</li>
            <li>Seller Guidelines</li>
            <li>Pricing Guide</li>
            <li>Marketing Tips</li>
            <li>Seller Dashboard</li>
          </ul>
        </div>
        <div className='w-full sm:w-[300px] md:w-[200px] flex justify-center md:justify-start'>
          <ul className='p-4 flex flex-col gap-2 md:gap-3 text-white w-full'>
            <li className='font-semibold text-lg md:text-xl pt-6 md:pt-10'> Support</li>
            <li className='pt-2 md:pt-4'>Help Center</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
      <hr className='w-[90%] h-0.5 bg-blue-500 mt-8 rounded-full border-0'/>
      <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-6xl text-blue-100 p-4 md:p-5 pt-6 md:pt-9 gap-4'>
        <h1 className='text-center text-sm md:text-base'>© 2024 CodeShare. All rights reserved.</h1>
        <div className='flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-right'>
          <a href="" className='hover:underline'>System Status</a>
          <a href="" className='hover:underline'>API</a>
          <a href="" className='hover:underline'>Affiliate Program</a>
        </div>
      </div>
    </div>
  )
}

export default Footer