import React from 'react';
import { Link } from "react-router-dom";
import { FaReact } from 'react-icons/fa';
import { Brain, Palette, LayoutTemplate, Smartphone, Database, Loader } from 'lucide-react';
import Allcategories from './Allcategories';

function Categories() {
  const categories = [
    {
      icon: <FaReact />,
      heading: "React Components",
      description: "Reusable UI components and hooks for your projects.",
      gradient: "from-blue-50 to-blue-100",
      textColor: "text-blue-500",
      price: "₹999",
    },
    {
      icon: <LayoutTemplate />,
      heading: "Vue.js Templates",
      description: "High-quality Vue templates for modern apps.",
      gradient: "from-green-50 to-green-100",
      textColor: "text-green-600",
      price: "₹799",
    },
    {
      icon: <Brain />,
      heading: "Backend APIs",
      description: "Ready-to-use APIs and backend solutions.",
      gradient: "from-purple-50 to-purple-100",
      textColor: "text-purple-600",
      price: "₹1199",
    },
    {
      icon: <Smartphone />,
      heading: "Mobile Apps",
      description: "iOS & Android apps with clean UI and code.",
      gradient: "from-pink-50 to-pink-100",
      textColor: "text-pink-600",
      price: "₹499",
    },
    {
      icon: <Database />,
      heading: "Database Scripts",
      description: "SQL scripts and database utilities for developers.",
      gradient: "from-yellow-50 to-yellow-100",
      textColor: "text-yellow-600",
      price: "₹599",
    },
    {
      icon: <Loader />,
      heading: "CSS Animations",
      description: "Beautiful animations to enhance your web projects.",
      gradient: "from-red-50 to-red-100",
      textColor: "text-red-600",
      price: "₹899",
    },
  ];

  return (
    <div id="categories" className="min-h-screen w-full bg-gradient-to-b from-white via-gray-50 to-white py-16">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Browse by Category
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Find exactly what you need from our diverse collection of premium code assets.
        </p>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br ${cat.gradient} backdrop-blur-lg`}
          >
            <div className={`${cat.textColor} flex items-center justify-center mb-6`}>
              {React.isValidElement(cat.icon)
                ? React.cloneElement(cat.icon, { size: 60 })
                : <span style={{ fontSize: '80px' }}>{cat.icon}</span>
              }
            </div>
            <h2 className="font-bold text-2xl mb-2 text-gray-800">{cat.heading}</h2>
            <p className="text-gray-600 mb-4">{cat.description}</p>
            <p className="text-lg font-semibold text-gray-800 mt-auto">
              Price: <span className="text-green-600">{cat.price}</span>
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div  className="flex justify-center mt-12">
       <Link to="/Allcategories">
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white text-lg shadow-lg hover:scale-105 transition-all duration-300">
          View All Categories
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
