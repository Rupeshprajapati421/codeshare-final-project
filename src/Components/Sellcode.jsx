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
    <div id="sell code" className='w-full  flex-col justify-center text-center p-[40px] '>
           <div className='h-[250px] w-full  justify-center text-center items-center'>
              <h1 className='font-bold text-6xl'>Featured Code</h1>
              <p className='text-2xl text-gray-900 mt-[20px]'>Discover premium code assets from top developers worldwide</p>
              <div className='h-[60px] w-[500px] text-blue-900 bg-gr ml-[450px] bg-gray-200 flex items-center justify-center gap-6 mt-[50px] shadow-2xl rounded-3xl'>
                <button className='px-7 py-2 bg-white text-blue font-semibold cursor-pointer rounded-xl'>Trending</button>
                <button className='px-7 py-2 bg-white font-semibold cursor-pointer rounded-xl'>Newest</button>
                <button className='px-8 py-2 bg-white font-semibold cursor-pointer rounded-xl'>Best Sellers</button>
               </div>
            </div>
           
            <div className='min-h-[600px] w-full   flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-10'>
             
              {sellcode.map((item, idx) => (
                <div
                  key={idx}
                  className='h-[420px] w-[90vw] max-full  md:h-[500px] md:w-[420px] bg-white rounded-xl shadow-2xl flex flex-col items-center justify-between  sm:p-6 hover:scale-105 transition-transform mb-6 md:mb-0'
                >
                  <div className='h-[250px] w-full bg-amber-900 flex items-center justify-center'>
                    {idx === 0 && item.image && (
                      <img src={item.image} alt={item.heading} className='h-full w-full object-cover rounded-t-xl' />
                    )}
                    {idx===1 && item.image && (
                      <img src={item.image} alt={item.heading}  className='h-full w-full object-cover rounded-t-xl' />
                    )}
                     {idx===2 && item.image &&(
                      <img src={item.image} alt={item.heading}  className='h-full w-full object-cover rounded-t-xl'/>
                     )}
                  </div>
                  <h2 className='font-bold text-xl md:text-2xl mb-2'>{item.heading}</h2>
                  <p className='text-gray-700 mb-2 text-base md:text-lg'>{item.description}</p>
                  <p className='text-lg font-semibold text-green-600 mb-4'>{item.price}</p>
                  <button className='px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition'>{item.button}</button>
                </div>
              ))}
            </div>
            <button className='px-9 py-4 rounded-2xl bg-blue-700 text-white text-xl'> Explore all products</button>
    </div>
    </>
  )
}

export default Sellcode