import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function AddTemple() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mainGod: "",
    country: "",
    state: "",
    district: "",
    locality: "",
    latitude: "",
    longitude: "",
  });

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setFormData((prev) => ({
          ...prev,
          latitude: e.latlng.lat.toFixed(6),
          longitude: e.latlng.lng.toFixed(6),
        }));
      },
    });

    return formData.latitude && formData.longitude ? (
      <Marker position={[formData.latitude, formData.longitude]} />
    ) : null;
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Temple Data:", formData);

    // Redirect to Thank You page after submission
    navigate("/thankyou");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 mt-30 mb-10">
      {/* Left: Map */}
      {/* Left: Map */}
      <div className="rounded-lg overflow-hidden shadow-md bg-white z-0 pt-1 relative">
        <MapContainer
          center={[28.6139, 77.209]}
          zoom={5}
          className="w-full h-full min-h-[500px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </div>

      {/* Right: Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Add Temple</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: "name", label: "Temple Name" },
            { name: "mainGod", label: "Main God Name" },
            { name: "country", label: "Country" },
            { name: "state", label: "State" },
            { name: "district", label: "District" },
            { name: "locality", label: "Locality" },
          ].map(({ name, label }) => (
            <input
              key={name}
              type="text"
              name={name}
              placeholder={label}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}

          <div className="flex gap-4">
            <input
              type="text"
              name="latitude"
              placeholder="Latitude"
              value={formData.latitude}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              value={formData.longitude}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Add Temple
          </button>
        </form>
      </div>
    </div>
  );
}
