import React from "react";
import logo from "../assets/logo.png";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // ✅ import router tools

const Navbar = () => {
  const location = useLocation();

  // Define menu items with their paths
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Mobile-App", path: "/mobile-app" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-10 w-auto" />

      {/* Menu */}
      <ul className="flex gap-6 font-medium text-gray-700">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`cursor-pointer hover:text-blue-600 ${location.pathname === item.path ? "text-blue-700" : "" }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <FaSearch className="text-xl cursor-pointer text-gray-600 hover:text-blue-500" />

        {/* Basket with dot */}
        <div className="relative">
          <FaShoppingBasket className="text-2xl cursor-pointer text-gray-600 hover:text-blue-500" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            
          </div>
        </div>

        {/* Sign in button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
