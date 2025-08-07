import React from 'react'
import { FaReact, FaMobileAlt } from 'react-icons/fa';

function Sellcode() {
  const sellcode = [
    {
      image: '',
      heading: "React Components",
      description: "Reusable UI Components and Hooks.",
      price: "₹999",
      button: "Buy Now"
    },
    {
      image: '',
      heading: "HTML Templates",
      description: "Modern and responsive HTML templates.",
      price: "₹499",
      button: "Buy Now"
    },
    {
      image: '',
      heading: "CSS Libraries",
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
              <div className='h-[60px] w-[500px] bg-gr ml-[450px] flex items-center justify-center gap-6 mt-[50px] shadow-2xl rounded-3xl'>
                <button className='px-7 py-2 border-2 rounded-xl'>Trending</button>
                <button className='px-7 py-2 border-2 rounded-xl'>Newest</button>
                <button className='px-8 py-2 border-2 rounded-xl'>Best Sellers</button>
               </div>
            </div>
           
            <div className='min-h-[600px] w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-10'>
              {sellcode.map((item, idx) => (
                <div
                  key={idx}
                  className='h-[420px] w-[90vw] max-w-[350px] md:h-[500px] md:w-[420px] bg-white rounded-xl shadow-2xl flex flex-col items-center justify-between p-4 sm:p-6 hover:scale-105 transition-transform mb-6 md:mb-0'
                >
                  <img src={item.image} alt={item.heading} className='h-32 w-32 md:h-40 md:w-40 object-contain mb-4' />
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