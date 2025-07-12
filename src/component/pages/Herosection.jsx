import React from 'react';

export default function Herosection() {
  return (
    <section
      className="relative w-full h-[100vh] sm:h-[70vh] bg-black overflow-hidden mt-8"
    >
      {/* Hero Background Image */}
      <img
        src="./images/city.jpg"
        alt="Temple Landscape"
        className="w-full h-full object-cover opacity-80"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md">
          Explore the Sacred Bharat Ke mandir
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-200 max-w-2xl">
          Discover history, spirituality, and divine architecture from every corner of the country.
        </p>
      </div>
    </section>
  );
}
