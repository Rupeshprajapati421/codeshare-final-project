import React from 'react';
import { FaReact, FaMobileAlt } from 'react-icons/fa';
import { Brain, Palette } from 'lucide-react';
import { LayoutTemplate } from 'lucide-react';


function Categories() {
  const categories = [
    {
      icon: <FaReact />,
      
      heading: "React Components",
      description: "Reasuable UI ,Components and Hooks.",
      bgColor: "bg-white",
      textColor: "text-blue-500",

      price: "₹999",
    },
    {
      icon: <  LayoutTemplate />,
      heading: "VUE Js Templates",
      description: "Resources for iOS and Android app development.",
      bgColor: "bg-white",
      textColor: "text-green-600",
      price: "₹799",
    },
    {
      icon: <Brain />,
      heading: "AI & ML",
      description: "Machine learning models, datasets, and utilities.",
      bgColor: "bg-white",
      textColor: "text-purple-600",
      price: "₹1199",
    },
    {
      icon: <Palette />,
      heading: "UI/UX Design",
      description: "Design systems, icons, and prototyping assets.",
      bgColor: "bg-white",
      textColor: "text-pink-600",
      price: "₹499",
    },
    {
      icon: "🛠️",
      heading: "Dev Tools",
      description: "Productivity tools and utilities for developers.",
      bgColor: "bg-white",
      textColor: "text-yellow-600",
      price: "₹599",
    },
    {
      icon: "🔒",
      heading: "Security",
      description: "Authentication, encryption, and security libraries.",
      bgColor: "bg-white",
      textColor: "text-red-600",
      price: "₹899",
    },
  ];

  return (
    <div id="categories" className="min-h-screen w-full bg-white py-16">
      {/* Header */}
      <div className="h-[230px] w-full text-center flex flex-col justify-center items-center">
        <h1 className="font-bold text-6xl pt-[60px]">Browse by Category</h1>
        <p className="text-2xl pt-[20px]">
          Find exactly what you need from our diverse collection of code assets
        </p>
      </div>

      {/* Background box */}
      <div className="max-w-7xl mx-auto bg-white p-4 sm:p-8 md:p-10">
        {/* Category Cards */}
        <div className="w-full flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14 lg:gap-16 py-8 sm:py-12">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`${cat.bgColor} rounded-xl shadow-2xl p-4 sm:p-6 w-[90vw] max-w-[320px] h-80 flex flex-col items-center hover:scale-105 transition-transform`}
            >
              <div className={`${cat.textColor} text-5xl sm:text-6xl mb-6 sm:mb-8`}>
                {cat.icon}
              </div>
              <h2 className="font-bold text-xl sm:text-2xl mb-1">{cat.heading}</h2>
              <p className="text-gray-700 mb-3 text-center text-base sm:text-lg">{cat.description}</p>
              <p className="text-lg font-semibold text-gray-800 mt-auto">Price: <span className="text-green-600">{cat.price}</span></p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4">
          <button className="px-10 py-5 bg-blue-700 rounded-2xl font-medium text-xl font-[Outfit] text-white hover:scale-105 transition-all duration-200 hover:bg-blue-800">
            View all Categories
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
