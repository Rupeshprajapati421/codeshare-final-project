import React from 'react'
import blogImg from '../assets/blog.jpg';
import { Search } from "lucide-react";
import { ShoppingBag } from 'lucide-react';
import { Download } from "lucide-react";
import { ArrowUp } from "lucide-react";

function Blog() {
  const steps = [
    {
      icon:<Search/>,
       heading: "Browse & Discover",
      description: "Explore thousands of high-quality code assets from talented developers",
    },
    {
     icon:< ShoppingBag/>,
      heading:"Purchase Instantly",
      description:"Buy code with secure payments and get immediate access to download files"
    },
    {
      icon:<Download/>,
       heading:"Download & Use",
      description:"Get complete source code with documentation and use in your projects"
    },
    {  
      icon:< ArrowUp />,
       heading:"Sell Your Code",
      description:"Upload your own code assets and earn money from your programming skills"
    }
  ];
  return (
    <div id="Blog" className='w-full flex flex-col text-center items-center'>
      <div className='w-[95vw] max-w-[800px] h-auto bg-white p-4 sm:p-8 flex flex-col justify-center text-center items-center rounded-2xl shadow-xl mt-4'>
        <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl'>How CodeShare Works</h1>
        <p className='text-lg sm:text-2xl mt-4 text-gray-500'>Join thousands of developers who trust our platform for buying and selling code</p>
      </div>

      <div className='w-[98vw] max-w-[1400px] min-h-[900px]  flex flex-col justify-baseline items-center p-2 sm:p-6 md:p-10 gap-y-8 sm:gap-y-10 rounded-2xl shadow-2xl  mt-6'>
        <div className='w-full flex flex-col md:flex-row gap-6 md:gap-10 pt-6 md:pt-10 items-center justify-center'>
          {steps.map((step, idx) => (
            <div key={idx} className='flex flex-col items-center justify-center bg-white shadow-2xl rounded-2xl p-6 sm:p-8 w-[90vw] max-w-[300px] h-[180px] sm:h-[220px] md:h-85'>
              <span className='sm:text-2xl text-white text-2xl text-center flex justify-center items-center mb-4 h-[90px] w-[90px] bg-gradient-to-b from-blue-500 to-blue-200  font-extrabold sm:mb-6 rounded-2xl'>{step.icon}</span>
              <h1 className='text-xl sm:text-xl md:text-2xl font-bold text-black'>{step.heading}</h1>
              <p className='text-base sm:text-lg pt-3 text-gray-800 '>{step.description}</p>
            </div>
          ))}
        </div>
        <div className='w-full flex flex-col md:flex-row items-center gap-6 md:gap-x-5 h-auto md:h-[400px]'>
          <div className='w-full md:w-1/2 h-auto md:h-[95%] p-2 sm:p-6 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl pt-4 md:pt-10'>Ready to Start Your Journey?</h1>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-800 pt-4 sm:pt-6'>Whether you're looking to buy premium code or sell your own creations, CodeShare provides the perfect platform for developers.</p>
            <div className='h-auto w-full mt-6 md:mt-[50px] font-medium text-lg sm:text-xl gap-4 sm:gap-6 flex flex-col sm:flex-row items-center justify-center'>
              <button className='px-8 sm:px-10 py-3 sm:py-4 border-4 text-white rounded-xl bg-blue-700'>Join as buyer</button>
              <button className='px-8 sm:px-9 py-3 sm:py-4 rounded-xl text-blue-700 font-medium border-blue-950 border-4'>Become Seller</button>
            </div>
          </div>
          <div className='w-full md:w-1/2 h-auto md:h-[95%] flex items-center justify-center rounded-2xl mt-6 md:mt-0'>
            <img src={blogImg} alt="Blog Visual" className='h-[200px] sm:h-[300px] md:h-[95%] w-full md:w-[95%] object-cover rounded-2xl opacity-100' />
          </div>
        </div>
      </div>
       
     
        
    </div>
  )
}

export default Blog