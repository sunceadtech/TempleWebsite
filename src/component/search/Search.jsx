import React, { useState } from 'react';
import { data } from '../../api/data.js';
import { motion, AnimatePresence } from 'framer-motion';

export default function Search() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(data[0]); // default temple

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const value = query.toLowerCase().trim();

      const found = data.find(
        (temple) =>
          temple.name.toLowerCase().includes(value) ||
          temple.state.toLowerCase().includes(value)
      );

      setResult(found || null);
      setQuery(''); // clear the input field
    }
  };

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-16 mt-4 md:mt-8">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-green-700 mb-10"
        >
          Search for Temples
        </motion.h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            value={query}
            onChange={handleSearchInput}
            onKeyDown={handleSearchSubmit}
            placeholder="Search by temple name or state (e.g., Kedarnath, Tamil Nadu)..."
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Temple Result */}
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key={result.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={
                  result.image ||
                  'https://via.placeholder.com/400x250?text=Temple+Image'
                }
                alt={result.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-bold text-gray-800">
                  {result.name}
                </h2>
                <p className="text-gray-600">
                  <strong>State:</strong> {result.state}
                </p>
                <p className="text-gray-700">
                  <strong>Info:</strong> {result.info}
                </p>
                <p className="text-gray-700">
                  <strong>Story:</strong> {result.story}
                </p>
                <p className="text-gray-700">
                  <strong>Architecture:</strong> {result.architecture}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="no-result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center text-red-600 text-lg"
            >
              No matching temple found.
            </motion.p>
          )}
        </AnimatePresence>
      </section>

      {/* Popular Temples Section */}
      <div className="mt-16 mb-4 md:mb-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Popular Temples
        </h2>

        <div className="w-[70%] mx-auto bg-white rounded-lg shadow-inner overflow-hidden">
          <div className="flex animate-scroll-rtl gap-4 px-4 py-6 w-max">
            {[...data.slice(0, 6), ...data.slice(0, 6)].map((temple, idx) => (
              <div
                key={idx}
                className="min-w-[200px] max-w-[200px] bg-white shadow-gray-200 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={
                    temple.image ||
                    'https://via.placeholder.com/200x120?text=Temple'
                  }
                  alt={temple.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-2 text-center">
                  <h3 className="font-semibold text-base text-gray-800">
                    {temple.name}
                  </h3>
                  <p className="text-sm text-gray-500">{temple.state}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

