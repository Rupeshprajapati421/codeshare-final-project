import React, { useState } from "react";
import { auth } from "../firebase.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import sign from "../assets/signin.svg";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-300 p-2 sm:p-4">
      <div className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg 
                      w-full max-w-sm sm:max-w-md md:max-w-5xl 
                      shadow-black overflow-hidden">
        
        {/* Left Side */}
        <div className="md:w-1/2 bg-violet-100 flex flex-col items-center justify-center p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text font-bold font-[Pacifico]">
              CodeShare
            </span>
          </h1>
          <p className="mt-2 sm:mt-4 text-lg sm:text-2xl md:text-3xl font-medium text-gray-400 text-center">
            Enlight Your Future
          </p>
          <img
            className="w-28 h-28 sm:w-48 sm:h-48 md:w-72 md:h-72 object-cover rounded-full mt-4 sm:mt-6"
            src={sign}
            alt="Illustration"
          />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-4 sm:p-6 md:p-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Create Account</h2>

          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="date"
              placeholder="DOB"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
              className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-[#2E5A66] text-white py-2 sm:py-3 rounded-lg hover:bg-[#244952] transition mt-3 sm:mt-4"
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
