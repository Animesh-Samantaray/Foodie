import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { FaShoppingBasket, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // centralized menu items
  const menuItems = [
    { name: "Home", type: "link", path: "/" },
    { name: "Menu", type: "scroll", id: "explore-menu" },
    { name: "Contact Us", type: "link", path: "/contact" },
  ];

  const {val} = useContext(StoreContext);

  
  const handleClick = (item) => {
    setIsOpen(false); // close mobile menu if open
    if (item.type === "scroll") {
      const section = document.getElementById(item.id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    // no need to do anything if type is link, <Link> handles it
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 min-w-[320px]">
      <div className="flex justify-between items-center px-6 py-4">
        <img src={logo} alt="logo" className="h-10 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              {item.type === "link" ? (
                <Link
                  to={item.path}
                  className={`hover:text-blue-600 ${
                    location.pathname === item.path ? "text-blue-700" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleClick(item)}
                  className="hover:text-blue-600 font-medium"
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <FaShoppingBasket className="text-2xl cursor-pointer text-gray-600 hover:text-blue-500"  onClick={()=>navigate('/cart')}/>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              
            </div>
          </div>

          <button className="hidden sm:block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={()=>navigate('/signup')}>
            Sign in
          </button>

          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col gap-4 p-4 font-medium text-gray-700">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                {item.type === "link" ? (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-2 rounded-md hover:bg-gray-100 ${
                      location.pathname === item.path ? "text-blue-700 font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleClick(item)}
                    className="block py-2 px-2 rounded-md hover:bg-gray-100 text-left w-full"
                  >
                    {item.name}
                  </button>
                )}
              </li>
            ))}

            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            onClick={()=>navigate('/signup')}>
              Sign in
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
