import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Categories', href: '#categories' },
    { label: 'Sell Code', href: '#sell-code' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-[1000] bg-white shadow-md">
      <div className="max-w-7xl mx-auto h-[70px] flex items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://img.freepik.com/premium-vector/web-development-concept-website-coding-web-page-3d-vector-icon-cartoon-minimal-style_365941-672.jpg"
            alt="codeshare"
            className="h-[50px] sm:h-[60px] object-contain"
          />
          <h2 className="text-[22px] sm:text-[28px] font-extrabold font-[Pacifico] tracking-wide bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            CodeShare
          </h2>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-[17px] font-[Outfit]">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="relative group hover:text-blue-600 transition-colors duration-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#signin"
            className="text-[17px] hover:text-blue-600 transition-colors"
          >
            Signin
          </a>
          <Link to="/login">
            <button className="px-5 py-2 rounded-[10px] bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-sm">
              Get started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <svg
            className="w-7 h-7 text-blue-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-[18px] font-[Outfit]">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-4 pb-6">
          <a
            href="#signin"
            onClick={() => setMenuOpen(false)}
            className="text-[17px] hover:text-blue-600"
          >
            Signin
          </a>
          <Link to="/login">
            <button
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 rounded-[10px] bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-sm"
            >
              Get started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
