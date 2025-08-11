import React, { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className='w-full bg-white h-[70px] fixed top-0 left-0 right-0 z-1000 flex items-center justify-between'>
        {/* Logo */}
  <div className='h-full w-[200px] bg-white flex items-center justify-center ml-2 sm:ml-4'>
          <img className='h-full w-[70px] sm:w-[100px]' src="https://img.freepik.com/premium-vector/web-development-concept-website-coding-web-page-3d-vector-icon-cartoon-minimal-style_365941-672.jpg" alt="codeshare" />
          <h2 className='text-[22px] sm:text-[30px] font-extrabold font-[Pacifico] ml-2'>CodeShare</h2>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex h-full w-[500px] bg-white items-center justify-center'>
          <ul className='flex items-center justify-center gap-7 text-[19px] font-[Outfit]  '>
            <a  className='hover:text-blue-500 cursor-pointer' href="#home "><li className=''>Home</li></a>
            <a className='hover:text-blue-500 cursor-pointer' href="#categories"><li>Categories</li></a>
            <a className='hover:text-blue-500 cursor-pointer' href="#sell code"><li>Sell Code</li></a>
            <a className='hover:text-blue-500 cursor-pointer' href="#Blog"><li>Blog</li></a>
          </ul>
        </div>

        {/* Desktop Auth Buttons */}
        <div className='hidden md:flex h-full w-[250px] bg-white items-center gap-[20px] mr-[20px]'>
          <a className='text-[18px] hover:text-blue-500 cursor-pointer ' href="#signin"> Signin</a>
          <button className='p-[12px] w-[130px] cursor-pointer  hover:bg-blue-800 transition-colors duration-300 rounded-[10px] bg-blue-600 text-white'>Get started</button>
        </div>

       {/* Mobile Menu Button */}
<div className='md:hidden flex items-center'>  
  <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
    <svg className='w-8 h-8 text-blue-700 ' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
    </svg>
  </button>
</div>


        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className='absolute top-[70px] left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 z-[2000] md:hidden'>
            <ul className='flex flex-col gap-6 text-[20px] font-[Outfit]'>
              <a href="#home" onClick={() => setMenuOpen(false)}><li>Home</li></a>
              <a href="#categories" onClick={() => setMenuOpen(false)}><li>Categories</li></a>
              <a href="#sell code" onClick={() => setMenuOpen(false)}><li>Sell Code</li></a>
              <a href="#Blog" onClick={() => setMenuOpen(false)}><li>Blog</li></a>
            </ul>
            <div className='flex flex-col gap-4 mt-6'>
              <a className='text-[18px]' href="#signin" onClick={() => setMenuOpen(false)}>Signin</a>
              <button className='p-[12px] w-[130px] rounded-[10px] bg-blue-600 text-white'>Get started</button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar