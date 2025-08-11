import React from 'react'
import { FaReact, FaMobileAlt } from 'react-icons/fa';
import { LayoutDashboard } from "lucide-react";
import dashboard from '../assets/dashboard.jpg'
import ecommerce from '../assets/e-commerce.jpg'
import mobile from '../assets/mobile.jpg'

function Sellcode() {
  const sellcode = [
    {
      image: dashboard,
      heading: "React dashboard Template",
      description: "Reusable UI Components and Hooks.",
      price: "₹999",
      button: "Buy Now"
    },
    {
      image: ecommerce,
      heading: "E-Commerce API backend",
      description: "Modern and responsive HTML templates.",
      price: "₹499",
      button: "Buy Now"
    },
    {
      image:mobile ,
      heading: "Mobile UI kit",
      description: "Beautiful CSS libraries for fast styling.",
      price: "₹299",
      button: "Buy Now"
    }
  ];
  return (  
    <>
    <div id="sell code" className='w-full flex-col justify-center text-center p-4 sm:p-8 md:p-12'>
      <div className='w-full max-w-6xl mx-auto flex flex-col items-center'>
        <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl'>Featured Code</h1>
        <p className='text-lg sm:text-2xl text-gray-900 mt-4'>Discover premium code assets from top developers worldwide</p>
        <div className='h-auto w-full max-w-xl flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 shadow-2xl rounded-3xl bg-gray-100 p-2 sm:p-0'>
          <button className='px-6 py-2 bg-white text-blue font-semibold  rounded-xl hover:text-blue-700 cursor-pointer w-full sm:w-auto '>Trending</button>
          <button className='px-6 py-2 bg-white font-semibold hover:text-blue-500 cursor-pointer rounded-xl w-full sm:w-auto'>Newest</button>
          <button className='px-6 py-2 bg-white font-semibold hover:text-blue-500 cursor-pointer rounded-xl w-full sm:w-auto'>Best Sellers</button>
        </div>
      </div>
      <div className='min-h-[600px] w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-10 mt-8'>
        {sellcode.map((item, idx) => (
          <div
            key={idx}
            className='h-[420px] w-[95vw] max-w-[350px] md:h-[500px] md:w-[420px] bg-white rounded-xl shadow-2xl flex flex-col items-center justify-between p-4 sm:p-6 hover:scale-105 transition-transform mb-6 md:mb-0'
          >
            <div className='h-[180px] sm:h-[220px] md:h-[250px] w-full flex items-center justify-center'>
              {item.image && (
                <img src={item.image} alt={item.heading} className='h-full w-full object-cover rounded-t-xl' />
              )}
            </div>
            <h2 className='font-bold text-lg sm:text-xl md:text-2xl mb-2 mt-2'>{item.heading}</h2>
            <p className='text-gray-700 mb-2 text-base sm:text-lg'>{item.description}</p>
            <p className='text-lg font-semibold text-green-600 mb-4'>{item.price}</p>
            <button className='px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-900 transition cursor-pointer'>{item.button}</button>
          </div>
        ))}
      </div>
      <button className='px-7 py-3 rounded-2xl bg-blue-700 text-white text-lg sm:text-xl mt-8 w-full max-w-xs mx-auto  hover:bg-blue-900 cursor-pointer'>Explore all products</button>
    </div>
    </>
  )
}

export default Sellcode