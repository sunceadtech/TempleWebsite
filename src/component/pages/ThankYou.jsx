import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Thankyou() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full text-center border border-gray-200">
        <h1 className="text-4xl font-bold text-green-700 mb-4">🙏 Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your temple submission has been received successfully.
        </p>
        <button
          onClick={handleBack}
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}
