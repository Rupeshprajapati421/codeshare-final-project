import React from 'react'
import blogImg from '../assets/blog.jpg';
import { Search, ShoppingBag, Download, ArrowUp } from "lucide-react";

function Blog() {
  const steps = [
    {
      icon: <Search size={40} />,
      heading: "Browse & Discover",
      description: "Explore thousands of high-quality code assets from talented developers",
    },
    {
      icon: <ShoppingBag size={40} />,
      heading: "Purchase Instantly",
      description: "Buy code with secure payments and get immediate access to download files"
    },
    {
      icon: <Download size={40} />,
      heading: "Download & Use",
      description: "Get complete source code with documentation and use in your projects"
    },
    {
      icon: <ArrowUp size={40} />,
      heading: "Sell Your Code",
      description: "Upload your own code assets and earn money from your programming skills"
    }
  ];

  return (
    <div id="Blog" className="w-full flex flex-col text-center items-center py-10 bg-white">
      
      {/* Section Header */}
      <div className="w-[95vw] max-w-[800px] p-6 sm:p-10 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg">
        <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl text-gray-900">
          How CodeShare Works
        </h1>
        <p className="text-lg sm:text-2xl mt-4 text-gray-600">
          Join thousands of developers who trust our platform for buying and selling code
        </p>
      </div>

      {/* Steps */}
      <div className="w-full max-w-[1400px] px-4 sm:px-8 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center justify-center p-8 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-6 h-[90px] w-[90px] flex items-center justify-center rounded-2xl bg-gradient-to-b from-blue-600 to-blue-300 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-900">{step.heading}</h2>
            <p className="text-gray-600 mt-3 text-center">{step.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-[1400px] mt-16 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left p-4 sm:p-8">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl mt-4 text-gray-700">
            Whether you're looking to buy premium code or sell your own creations, CodeShare provides the perfect platform for developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
              Join as Buyer
            </button>
            <button className="px-8 py-3 rounded-xl border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 hover:shadow-lg transition duration-300">
              Become Seller
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={blogImg}
            alt="Blog Visual"
            className="rounded-2xl shadow-2xl object-cover h-[250px] sm:h-[350px] md:h-[400px] w-full md:w-[90%] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
