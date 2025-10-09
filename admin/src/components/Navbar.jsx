import React from "react";
import { User } from "lucide-react"; // lightweight icon (optional)

const Navbar = () => {
  return (
    <nav className="h-[80px] w-full sticky top-0 left-0 bg-blue-400  flex items-center justify-between px-6 z-50">
      {/* Logo Section */}
      <div className="text-white font-bold text-2xl tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300">
        LOGO
      </div>

      {/* Nav Links (optional future add) */}
      <div className="hidden md:flex gap-8 text-white font-medium text-lg">
        <a href="#" className="hover:text-yellow-200 transition-colors duration-300">
          Home
        </a>
        <a href="#" className="hover:text-yellow-200 transition-colors duration-300">
          About
        </a>
        <a href="#" className="hover:text-yellow-200 transition-colors duration-300">
          Services
        </a>
        <a href="#" className="hover:text-yellow-200 transition-colors duration-300">
          Contact
        </a>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-all duration-300">
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div className="hidden sm:flex flex-col text-white leading-tight">
          <span className="font-semibold">Animesh</span>
          <span className="text-xs text-gray-100">Engineer</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
