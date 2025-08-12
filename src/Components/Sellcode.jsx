import React from "react";
import dashboard from "../assets/dashboard.jpg";
import ecommerce from "../assets/e-commerce.jpg";
import mobile from "../assets/mobile.jpg";

function Sellcode() {
  const sellcode = [
    {
      image: dashboard,
      heading: "React Dashboard Template",
      description: "Reusable UI components and hooks for modern apps.",
      price: "₹999",
      button: "Buy Now",
    },
    {
      image: ecommerce,
      heading: "E-Commerce API Backend",
      description: "Fully functional backend for online stores.",
      price: "₹499",
      button: "Buy Now",
    },
    {
      image: mobile,
      heading: "Mobile UI Kit",
      description: "Beautiful and responsive mobile UI designs.",
      price: "₹299",
      button: "Buy Now",
    },
  ];

  return (
    <div id="sell-code" className="w-full flex-col justify-center text-center p-6 sm:p-10 md:p-16 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Section Heading */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Code
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl">
          Discover premium code assets from top developers worldwide
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 bg-white shadow-lg rounded-2xl p-2">
          {["Trending", "Newest", "Best Sellers"].map((label, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="min-h-[600px] w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 mt-12">
        {sellcode.map((item, idx) => (
          <div
            key={idx}
            className="h-[460px] w-[95vw] max-w-[350px] md:h-[500px] md:w-[420px] bg-white rounded-2xl shadow-lg hover:shadow-2xl flex flex-col overflow-hidden hover:-translate-y-2 transition-all duration-300"
          >
            {/* Product Image */}
            <div className="h-[200px] sm:h-[230px] md:h-[250px] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.heading}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow p-5 text-left">
              <h2 className="font-bold text-xl sm:text-2xl mb-2">{item.heading}</h2>
              <p className="text-gray-600 mb-3 text-base sm:text-lg">
                {item.description}
              </p>
              <p className="text-lg font-semibold text-green-600 mb-4">
                {item.price}
              </p>

              {/* Buy Button */}
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mt-auto">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg sm:text-xl mt-12 w-full max-w-xs mx-auto shadow-lg hover:scale-105 transition-all duration-300">
        Explore All Products
      </button>
    </div>
  );
}

export default Sellcode;
