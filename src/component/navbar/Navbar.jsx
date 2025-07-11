import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Home as HomeIcon,
  Info as InfoIcon,
} from "lucide-react";
import { IoMdSearch } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaHeart,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Nearby Temples", path: "/nearby" },
    { name: "Add Temples", path: "/addTemple" },
    { name: "About Us", path: "/about" },
    {
      name: "Profile",
      children: [
        { name: "Your Favorites", path: "/favourites" },
        { name: "Near By Temples", path: "/nearby" },
        { name: "Your Contributions", path: "/contributions" },
        { name: "Signup", path: "/signup" },
        { name: "Login", path: "/login" },
      ],
    },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 shadow-md z-50 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6">
        {/* ============================ */}
        {/*     Laptop Navbar Section   */}
        {/* ============================ */}
        <div className="hidden lg:flex justify-between items-center h-16 lg:h-20">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="./images/logo3.png"
                alt="Temples of India Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <h2 className="text-lg sm:text-xl font-semibold text-black">
                Temples of India
              </h2>
            </Link>
          </div>

          {/* Center: Menu Items */}
          <div className="flex items-center space-x-4 cursor-pointer">
            {navItems.slice(0, navItems.length - 1).map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="py-2 px-3 text-gray-700 font-medium hover:text-black rounded-lg hover:bg-green-200 transition-colors"
              >
                <>
                  {item.name === "Add Temples" && (
                    <FaMapMarkerAlt className="inline-block text-green-500 mr-2" />
                  )}
                  {item.name}
                </>
              </Link>
            ))}
            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="py-2 px-3 text-gray-700 font-medium rounded-lg flex items-center space-x-1 transition-colors hover:bg-green-200 hover:text-gray-700">
                <span className="cursor-pointer">
                  {navItems[navItems.length - 1].name}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                {navItems[navItems.length - 1].children.map((child, idx) => (
                  <Link
                    key={idx}
                    to={child.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-green-200 hover:text-black transition-colors"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Dropdown Menu */}
          {/*justify between div hai main navbar ka */}
        </div>

        {/* ============================ */}
        {/*     Mobile Navbar Section    */}
        {/* ============================ */}
        <div className="flex items-center justify-between w-full h-16 lg:hidden">
          {/* Menu Icon */}
          <button onClick={() => setIsOpen(true)} className="p-2">
            <Menu className="w-6 h-6 text-black" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="./images/logo3.png"
              alt="Temples of India Logo"
              className="w-8 h-8 object-contain"
            />
            <h2 className="text-base font-semibold text-black">
              Temples of India
            </h2>
          </Link>

          {/* Search Icon */}
          <Link to="/search" className="p-2">
            <IoMdSearch className="w-6 h-6 text-red-600" />
          </Link>
        </div>
      </div>

      {/* ============================ */}
      {/*     Mobile Drawer Menu       */}
      {/* ========== Mobile Drawer (Visible only below lg) ========== */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 overflow-y-auto lg:hidden`}
      >
        {/* ========== Drawer Header with Logo & Name ========== */}
        <div className="flex items-center justify-between p-4 border-b border-gray-300 shadow-md">
          <div className="flex items-center space-x-3">
            <img
              src="./images/logo3.png"
              alt="Temples of India Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold text-black">Sunce Group</h2>
          </div>

          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="p-2">
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* ========== Main Navigation Links ========== */}
        <div className="px-4 py-4 space-y-1">
          {navItems.slice(0, navItems.length - 1).map((item, index) => {
            // Assign icons based on item name
            let icon = null;
            switch (item.name) {
              case "Home":
                icon = <HomeIcon className="w-5 h-5 mr-2" />;
                break;
              case "Search":
                icon = <IoMdSearch className="w-5 h-5 mr-2" />;
                break;
              case "Nearby Temples":
              case "Add Temples":
                icon = (
                  <FaMapMarkerAlt className="w-5 h-5 mr-2 text-green-600" />
                );
                break;
              case "About Us":
                icon = <InfoIcon className="w-5 h-5 mr-2" />;
                break;
              default:
                break;
            }

            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-lg font-medium border-b transition-colors"
              >
                {icon}
                {item.name}
              </Link>
            );
          })}

          {/* ========== Profile Section (Dropdown Items) ========== */}
          <div className="mt-4">
            {/* Profile Label */}
            <p className="text-gray-800 font-semibold mb-3 flex items-center space-x-2 text-lg border-b border-white">
              {navItems[navItems.length - 1].name}
              <ChevronDown className="w-4 h-4" />
            </p>

            {/* Profile Child Links */}
            <div className="ml-2 space-y-1">
              {navItems[navItems.length - 1].children.map((child, idx) => {
                // Assign icons based on child name
                let icon = null;
                switch (child.name) {
                  case "Your Favorites":
                    icon = <FaHeart className="w-4 h-4 mr-2 text-red-500" />;
                    break;
                  case "Near By Temples":
                    icon = (
                      <FaMapMarkerAlt className="w-4 h-4 mr-2 text-green-600" />
                    );
                    break;
                  case "Your Contributions":
                    icon = <InfoIcon className="w-4 h-4 mr-2" />;
                    break;
                  case "Signup":
                    icon = (
                      <FaUserPlus className="w-4 h-4 mr-2 text-blue-600" />
                    );
                    break;
                  case "Login":
                    icon = (
                      <FaSignInAlt className="w-4 h-4 mr-2 text-blue-600" />
                    );
                    break;
                  default:
                    break;
                }

                return (
                  <Link
                    key={idx}
                    to={child.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center py-2 px-4 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-base border-b transition-colors"
                  >
                    {icon}
                    {child.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/*mobile section ends */}
    </nav>
  );
};

export default Navbar;
