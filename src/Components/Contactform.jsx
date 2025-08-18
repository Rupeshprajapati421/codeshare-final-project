import React, { useState } from 'react'
import { db } from "../firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      setSuccess("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      setSuccess("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg w-full mx-auto mt-12 p-6 sm:p-8 bg-gray-300 rounded-2xl shadow-xl shadow-black  duration-300 hover:scale-[1.02]">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700 text-center">
        Contact Us
      </h2>

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-center animate-fadeIn">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-300 hover:shadow-md"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-300 hover:shadow-md"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-300 hover:shadow-md"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all duration-300 
            ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700 hover:shadow-lg hover:scale-105"}`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contactform;
