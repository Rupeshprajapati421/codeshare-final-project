// App.jsx
import React from 'react';
import './App.css';
import Allproduct from './Pages/Allproduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin.jsx';
import Login from './Components/Login.jsx'; // Capitalized import
import Allcategories from './Components/Allcategories.jsx';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
    <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Allproduct />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/Allcategories" element={<Allcategories />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
