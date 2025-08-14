import React from "react";
import image from "../assets/background.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        id="home"
        className="w-full h-screen relative overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/70 to-indigo-900/80 backdrop-blur-[2px]" />

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl flex flex-col gap-8 animate-fadeIn">
            {/* Heading */}
            <h1 className="space-y-2">
              <span className="block font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
                Buy & Sell
              </span>
              <span className="block font-extrabold text-4xl sm:text-6xl md:text-7xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-tight">
                Premium Code
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-2xl md:text-[22px] text-white/90 font-medium leading-relaxed">
              The ultimate marketplace for developers to discover, purchase, and
              sell high-quality code snippets, templates, and complete projects.
            </p>

            {/* Buttons */}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/explore">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                Browse Marketplace
              </button>
              </Link>
              <Link to="/Allcategories">
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
                Start Selling
              </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-12 sm:gap-20 mt-6">
              {[
                { value: "50K+", label: "Code Items" },
                { value: "15K+", label: "Developers" },
                { value: "98%", label: "Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-white animate-slideUp opacity-90 hover:opacity-100 transition-all"
                >
                  <span className="block font-bold text-3xl sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-sm sm:text-base">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
