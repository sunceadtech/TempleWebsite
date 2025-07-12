import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../api/data.js";

function TempleDetails() {
  const { id } = useParams();
  const [temple, setTemple] = useState(null);

  useEffect(() => {
    const temples = typeof data === "string" ? JSON.parse(data) : data;
    const foundTemple = temples[id];
    setTemple(foundTemple || null);
  }, [id]);

  if (!temple) {
    return (
      <div className="p-8 text-center text-xl text-gray-700">
        Temple not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 mt-4 md:mt-32 pb-16">
      <div className="space-y-8">
        {/* Temple Image */}
        <img
          src={temple.image}
          alt={temple.name}
          className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
        />

        {/* Temple Name */}
        <h1 className="text-4xl font-extrabold text-green-800">
          {temple.name}
        </h1>

        {/* Temple State */}
        <p className="text-lg text-gray-700 font-medium">
          <span className="font-semibold text-green-900">📍 State:</span>{" "}
          {temple.state}
        </p>

        {/* Temple Info Sections */}
        <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p>
            <strong className="text-green-900">Info:</strong> {temple.info}
          </p>
          <p>
            <strong className="text-green-900">Story:</strong> {temple.story}
          </p>
          <p>
            <strong className="text-green-900">Architecture:</strong>{" "}
            {temple.architecture}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TempleDetails;

