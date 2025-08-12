import React from 'react';
import { useState } from 'react';
import './App.css';
import AllProduct from './Pages/AllProduct';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from './Components/Login';



function App() {


  return (
    <>
     <Router>

      <Routes>
      <Route path="/" element={<AllProduct />} />
      <Route path="/login" element={<Login />} />
     
     </Routes>
     </Router>
     
      
    </>
  )
}


export default App
