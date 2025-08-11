import React from 'react'
import image from '../assets/background.jpg'

function Home() {
  return (
    <>
      <div
        id="home"
        className="w-full h-screen bg-amber-200"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="h-screen w-full bg-gradient-to-br from-blue-500/80 via-blue-500/80 to-purple-500 flex items-center justify-center">
          <div className="h-[90%] w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 text-center gap-6 sm:gap-8 mt-[60px] sm:mt-[72px]">
            <h1 className="w-full mt-10 sm:mt-[70px]">
              <span className="font-extrabold text-4xl sm:text-6xl md:text-7xl text-white font-[Outfit] ml-2 sm:ml-[20px] block ">Buy & Sell</span>
              <span className="font-extrabold text-4xl sm:text-6xl font-[Outfit] md:text-7xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">Premium Code</span>
            </h1>
            <p className="text-lg sm:text-2xl md:text-[25px] font-semibold text-white w-full">
              The ultimate marketplace for developers to discover, purchase, and sell high-quality code snippets, templates, and complete projects
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full my-2 sm:my-4">
              <button className="p-4 sm:p-[23px] w-[90vw] max-w-[250px] bg-white rounded-[12px] text-blue-600 cursor-pointer font-semibold text-lg sm:text-[20px]">Browse Marketplace</button>
              <button className="p-4 sm:p-[23px] w-[90vw] max-w-[180px] border-3 border-white rounded-[12px] text-white cursor-pointer font-semibold text-lg sm:text-[20px]">Start Selling</button>
            </div>
            <div className="h-[80px] w-full flex flex-wrap justify-center items-center gap-8 sm:gap-20 md:gap-32 lg:gap-44">
              <p className="text-center min-w-[100px]">
                <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">50K+</span><br />
                <span className="text-white">Code Items</span>
              </p>
              <p className="text-center min-w-[100px]">
                <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">15K+</span><br />
                <span className="text-white">Developers</span>
              </p>
              <p className="text-center min-w-[100px]">
                <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">98%</span><br />
                <span className="text-white">Satisfaction</span>
              </p>
               <p className="text-center min-w-[100px]">
                <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">24/7</span><br />
                <span className="text-white">Support</span>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home