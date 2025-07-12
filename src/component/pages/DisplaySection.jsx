import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../api/data.js"; // JSON array of temple objects

function DisplaySection() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemples = () => {
      try {
        const parsedData = typeof data === "string" ? JSON.parse(data) : data;
        if (Array.isArray(parsedData)) {
          setTemples(parsedData);
        }
      } catch (error) {
        console.error("Failed to parse temple data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemples();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-medium text-gray-700">
        Loading temples...
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Bharat Ke Mandir
      </h2>

      <div className="grid grid-cols-1 gap-10">
        {temples.map((temple, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-[1.02]"
          >
            <Link to={`/temple/${index}`} className="block relative">
              <img
                src={
                  temple.image ||
                  "https://via.placeholder.com/600x350?text=Temple+Image"
                }
                alt={temple.name}
                className="w-full h-72 sm:h-80 object-cover"
              />

              {/* Overlay Tag */}
              <div className="absolute top-4 left-4 bg-green-700 text-white text-xs sm:text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                {temple.state} • Bharat Ke Mandir
              </div>
            </Link>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {temple.name}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg line-clamp-3 leading-relaxed">
                {(temple.info || "").slice(0, 160)}...
              </p>
              <Link
                to={`/temple/${index}`}
                className="text-green-700 hover:text-green-900 mt-4 inline-block font-medium transition-colors duration-200"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DisplaySection;
