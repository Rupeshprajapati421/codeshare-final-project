import React from "react";
import { Link } from "react-router-dom"; // Import Link for clickable title

function Explore() {
  const items = [
    {
      img: "https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg",
      title: "Web Templates",
      desc: "Pre-built dashboards, landing pages, portfolio sites.",
      price: 499,
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/3b9f93230379817.Y3JvcCwxNjE2LDEyNjQsNCww.png",
      title: "Mobile App Templates",
      desc: "Ready-to-use app starters for Android/iOS",
      price: 799,
    },
    {
      img: "https://www.shutterstock.com/image-vector/user-interface-elements-set-banking-260nw-2444322297.jpg",
      title: "UI Components & Widgets",
      desc: "Buttons, navigation bars, modals, sliders, charts.",
      price: 299,
    },
    {
      img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "Backend & API Code",
      desc: "Node.js, Express, Django, Laravel starter projects.",
      price: 999,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBA1z1fislDCQDEYDEviqP89inUtSsaiAzXg&s",
      title: "Scripts & Automation",
      desc: "Bash scripts for DevOps, deployment automation.",
      price: 199,
    },
    {
      img: "https://images-rsg.storage.googleapis.com/wp-content/uploads/2023/10/How-to-make-game-assets-1024x589.jpg",
      title: "Game Development Assets",
      desc: "2D/3D sprites, animations, and game scripts.",
      price: 599,
    },
    {
      img: "https://media.istockphoto.com/id/1448152453/vector/big-data-technology-and-data-science-illustration-data-flow-concept-querying-analysing.jpg?s=612x612&w=0&k=20&c=To0lhCrVmDYdSkOUOGxGsjlYe0buj_wwGCDqYhF9p2o=",
      title: "Machine Learning Models",
      desc: "Pre-trained ML models for image, text, or audio.",
      price: 999,
    },
    {
      img: "https://insights.daffodilsw.com/hubfs/MAGENTO%20EXTENSION.jpg",
      title: "Plugins & Extensions",
      desc: "VS Code extensions, browser add-ons.",
      price: 199,
    },
    {
      img: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/07/best-finance-apps.jpg",
      title: "GExpense Tracker",
      desc: "Track expenses and visualize spending patterns.",
      price: 599,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
          >
            {/* Image with Hover Zoom */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Clickable Title */}
              <Link
                to={`/product/${index}`} // Example route
                className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300"
              >
                {item.title}
              </Link>

              <p className="text-gray-600 mb-4 flex-grow group-hover:text-gray-800 transition-colors duration-300">
                {item.desc}
              </p>

              {/* Price & Button */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-green-600">
                  ₹{item.price}
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-transform duration-300 hover:scale-105">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
