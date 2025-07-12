import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    navigate('/thankyou'); // navigate to thank you page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-5xl w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side - Temple Image & Info */}
        <div className="bg-green-50 flex flex-col items-center justify-center p-6">
          <img
            src="https://i.im.ge/2024/08/07/fFqmJa.Brahma-Temple-Pushkar.webp"
            alt="Temple"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-green-700 text-center">
            Welcome to TempleConnect
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Discover and connect with spiritual places across India.
          </p>
        </div>

        {/* Right Side - Signup Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg" required />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" required />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg" required />
            <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg" required />

            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
