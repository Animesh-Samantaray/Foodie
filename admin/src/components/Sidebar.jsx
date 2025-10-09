import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlusCircle, FaListAlt, FaShoppingBag } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="h-screen w-[250px] fixed left-0 top-[80px] bg-blue-400 ">
      

      {/* Navigation */}
      <nav className="flex flex-col mt-6 space-y-3 px-4">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium cursor-pointer transition-all duration-200
            ${isActive ? "bg-blue-600 text-white font-semibold" : "text-blue-700 hover:bg-blue-100"}`
          }
        >
          <FaPlusCircle className="text-xl" />
          <span>Add Items</span>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium cursor-pointer transition-all duration-200
            ${isActive ? "bg-blue-600 text-white font-semibold" : "text-blue-700 hover:bg-blue-100"}`
          }
        >
          <FaListAlt className="text-xl" />
          <span>List Items</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium cursor-pointer transition-all duration-200
            ${isActive ? "bg-blue-600 text-white font-semibold" : "text-blue-700 hover:bg-blue-100"}`
          }
        >
          <FaShoppingBag className="text-xl" />
          <span>Orders</span>
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-5 w-full text-center text-sm text-blue-500">
        <p>© 2025 FoodAdmin</p>
      </div>
    </div>
  );
};

export default Sidebar;
