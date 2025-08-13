import React, { useState } from "react";
import { auth } from "../firebase.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import sign from '../assets/signin.svg'

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // fixed spelling
  const [email, setEmail] = useState("");
  const[DOB ,setDOB] =useState();
  

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registered successfully!");
      
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-gray-800 via-gray-600 to-gray-300 p-4 ">
      <div className="bg-white h-[500px] flex rounded-2xl shadow-lg max-w-5xl w-full shadow-black ">
        {/* Left Side */}
        <div className="w-[500px] bg-violet-100 text-white flex flex-col rounded-l-2xl p-8">
          <h1 className="text-4xl font-bold">
            <span className=" bg-gradient-to-r from-blue-600 to-teal-500  text-transparent bg-clip-text font-bold font-[Pacifico]">
             CodeShare
           </span>

           
          </h1>
          <p className="mt-4 text-5xl font-medium text-gray-400">
            Enlight Your Future
          </p>
          <img className="w-[300px] h-[300px]   object-cover rounded-full "
            src={sign}
            alt="Illustration"
            
          />
        </div>

        {/* Right Side */}
        <div className="w-[900px] p-15">
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>

          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="date"
              placeholder="DOB"
              value={DOB}
              onChange={(e) => setdate(e.target.value)}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-[#2E5A66] text-white py-3 rounded-lg hover:bg-[#244952] transition mt-[15px]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
