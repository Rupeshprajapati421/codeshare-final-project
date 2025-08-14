// Components/Login.jsx
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.jsx";

function Login() {
  
  const[email,setEmail]=useState("");
  const[password,setpassword]=useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Registered successfully!");
        navigate("/")
      } catch (error) {
        console.error(error.message);
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-300 p-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-lg s p-8  max-w-md text-white shadow-lg w-full shadow-black">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          Sign in
        </h2>
        <p className="text-sm text-center text-gray-400 mb-6">
          Sign in with your email and password
        </p>
        
        <form  onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1 ">Your Email</label>
            <input  
              type="email"
              placeholder="Enter your email"  onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Your Password</label>
            <input
              type="password"
              placeholder="Enter your password" onChange={(e) => setpassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md text-black bg-white  focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-yellow-400" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-yellow-300 hover:text-yellow-400">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-600 hover:to-blue-800 py-2 rounded-md font-semibold transition"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-sm mt-4 text-gray-400">
            Not a member?{" "}
            <a href="Signin" className="text-yellow-300 hover:text-yellow-400">
              Register here!
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
