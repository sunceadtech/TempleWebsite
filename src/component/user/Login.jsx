import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dummy login handler
  const handleLogin = (e) => {
    e.preventDefault();
    // For now, just show alert and navigate
    alert('Login successful!');
    navigate('/'); // Redirect to homepage or `/thankyou`
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-5xl w-full h-auto mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side - Temple Image & Info */}
        <div className="bg-green-50 flex flex-col items-center justify-center p-6">
          <img
            src="https://i.im.ge/2024/08/07/fFqmJa.Brahma-Temple-Pushkar.webp"
            alt="Temple"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-green-700 text-center">
            Welcome Back to TempleConnect
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Reconnect with spiritual places across India.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Login to Your Account
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
