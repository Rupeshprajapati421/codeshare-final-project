import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Categories from './Components/Categories';

import Blog from './Components/Blog';
import Sellcode from './Components/sellcode';
import Footer from './Components/Footer';



function App() {


  return (
    <>
      
      <Navbar/>
      <Home/>
      <Categories/>
      <Sellcode/>
      <Blog/>
      <Footer/>
      
    </>
  )
}


export default App
