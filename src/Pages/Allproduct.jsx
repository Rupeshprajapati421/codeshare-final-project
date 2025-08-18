import React from 'react';
;

import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Categories from '../Components/Categories';

import Blog from '../Components/Blog';
import Sellcode from "../Components/Sellcode"; 

import Footer from '../Components/Footer';
import Contactform from '../Components/Contactform';





function Allproduct() {


  return (
    <>
      
      <Navbar />
      <Home/>
      <Categories/>
      <Sellcode/>
      <Contactform/>
      <Blog/>
      <Footer/>
      
    </>
  )
}


export default Allproduct
