import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function NearByTemple() {
  const [position, setPosition] = useState(null);
  const [nearby, setNearby] = useState([]);

  const temples = [
    { name: 'Temple A', lat: 28.7041, lon: 77.1025, info: 'Mandir in Delhi' },
    { name: 'Temple B', lat: 28.709, lon: 77.109, info: 'Another Temple in Delhi' },
    { name: 'Temple C', lat: 28.71, lon: 77.1, info: 'Shiv Mandir near you' },
  ];

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      },
      () => alert('Please enable location access to view nearby temples.'),
      { enableHighAccuracy: true }
    );
  }, []);

  // Filter nearby temples within 5km
  useEffect(() => {
    if (position) {
      const R = 6371;
      const nearbyList = temples.filter((t) => {
        const dLat = ((t.lat - position.lat) * Math.PI) / 180;
        const dLon = ((t.lon - position.lon) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos((position.lat * Math.PI) / 180) *
            Math.cos((t.lat * Math.PI) / 180) *
            Math.sin(dLon / 2) ** 2;
        const distance = 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return distance <= 5;
      });
      setNearby(nearbyList);
    }
  }, [position]);

  // Loading state
  if (!position) {
    return (
      <div className="min-h-[500px] flex items-center justify-center text-gray-600">
        Loading location...
      </div>
    );
  }

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Temples Near You
      </h2>

      {/* Map */}
      <div className="relative h-[600px] rounded-xl overflow-hidden shadow-lg border">
        <MapContainer
          center={[position.lat, position.lon]}
          zoom={13}
          scrollWheelZoom={true}
          className="w-full h-full z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
          <Marker position={[position.lat, position.lon]}>
            <Popup>You are here</Popup>
          </Marker>
          <Circle center={[position.lat, position.lon]} radius={5000} color="blue" />

          {nearby.map((temple, index) => (
            <Marker key={index} position={[temple.lat, temple.lon]}>
              <Popup>
                <div className="space-y-1">
                  <p className="font-bold">{temple.name}</p>
                  <p className="text-sm text-gray-700">{temple.info}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&origin=${position.lat},${position.lon}&destination=${temple.lat},${temple.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-green-700 hover:underline font-medium text-sm"
                  >
                    Get Directions
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Navigate Button */}
      {nearby.length > 0 && (
        <div className="flex justify-center mt-6">
          <a
            href={`https://www.google.com/maps/dir/?api=1&origin=${position.lat},${position.lon}&destination=${nearby[0].lat},${nearby[0].lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Navigate to Nearest Temple
          </a>
        </div>
      )}

      {/* Temple List */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Nearby Temples Within 5km:
        </h3>
        {nearby.length ? (
          <ul className="space-y-2">
            {nearby.map((t, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between"
              >
                <span className="text-gray-800">
                  <span className="font-medium text-black">{t.name}:</span>{' '}
                  {t.info}
                </span>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&origin=${position.lat},${position.lon}&destination=${t.lat},${t.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Get Directions
                </a>
              </li>
            ))}
          </ul>
        ) : (
  <div className="">
  <p className="text-gray-600 mb-2">No temples found nearby.</p>
  <a
    href={`https://www.google.com/maps/search/temples/@${position.lat},${position.lon},14z`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 text-sm text-blue-600 font-medium hover:underline"
  >
    Search Temples Around You on Google Maps
  </a>
</div>

        )}
      </div>
    </section>
  );
}
