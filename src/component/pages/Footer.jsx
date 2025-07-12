import React from 'react';
import { Heart, Search, Download, Home } from 'lucide-react';

export default function TempleFooter() {
  return (
    <footer
      className="relative w-full bg-center bg-cover text-white"
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/14615.jpg')`,
      }}
      aria-label="Temple themed footer"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-left">
        {/* Title & Tagline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">🛕 Bharat ke Mandir</h2>
          <p className="text-base md:text-lg text-gray-300">
            Discover and explore sacred temples across Bharat.
          </p>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm md:text-base">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-yellow-400 mb-2">Explore</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/nearby-temples" className="hover:underline">Nearby Temples</a></li>
              <li><a href="/search" className="hover:underline">Search Temples</a></li>
              <li><a href="/watch-video" className="hover:underline">Your Contribution</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-yellow-400 mb-2">About</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/blog" className="hover:underline">Our Blog</a></li>
              <li><a href="/terms" className="hover:underline">Disclaimer</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-yellow-400 mb-2">Support</h3>
            <ul className="space-y-2">
              <li><a href="/donate" className="hover:underline">Donate to Us</a></li>
              <li><a href="/dharma-donation" className="hover:underline">Donate for Dharma</a></li>
              <li><a href="/download-app" className="hover:underline">Download App</a></li>
            </ul>
          </div>

          {/* Column 4 - Dharma Icons */}
          <div>
            <h3 className="font-semibold text-yellow-400 mb-2">Connect</h3>
            <div className="flex space-x-4 text-yellow-400 text-2xl mt-2">
              <Heart className="animate-bounce" aria-label="Love Dharma" />
              <Home className="animate-bounce delay-100" aria-label="Temple Home" />
              <Search className="animate-bounce delay-200" aria-label="Temple Search" />
              <Download className="animate-bounce delay-300" aria-label="App Download" />
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center text-xs text-gray-400">
          <p>🙏 Join us in preserving India's rich temple heritage.</p>
          <p>&copy; {new Date().getFullYear()} Bharat ke Mandir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
