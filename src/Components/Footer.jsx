import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-10 px-6 md:px-12 pt-10 pb-6">
        {/* Brand */}
        <div className="w-full md:w-[350px] flex flex-col items-center md:items-start">
          <h1 className="font-extrabold text-3xl md:text-4xl text-white tracking-wide">
            <span className="text-blue-400">Code</span>share
          </h1>
          <p className="text-blue-100 pt-4 text-center md:text-left text-base md:text-lg leading-relaxed">
            The ultimate marketplace for developers to discover, purchase, and sell high-quality code snippets and templates.
          </p>
        </div>

        {/* Links */}
        {[
          {
            title: "Marketplace",
            links: ["Browse Code", "Categories", "Featured Products", "New Releases", "Best Sellers"],
          },
          {
            title: "For Sellers",
            links: ["Start Selling", "Seller Guidelines", "Pricing Guide", "Marketing Tips", "Seller Dashboard"],
          },
          {
            title: "Support",
            links: ["Help Center", "Contact Us", "Terms of Service", "Privacy Policy", "Community"],
          },
        ].map((section, idx) => (
          <div key={idx} className="w-full sm:w-[300px] md:w-[200px]">
            <ul className="flex flex-col gap-2 md:gap-3">
              <li className="font-semibold text-lg md:text-xl text-blue-300">{section.title}</li>
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="text-blue-100 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-blue-800 mx-6 md:mx-12"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-blue-200 px-6 md:px-12 py-4 gap-3 text-sm">
        <p>© 2024 CodeShare. All rights reserved.</p>
        <div className="flex gap-4">
          {["System Status", "API", "Affiliate Program"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
