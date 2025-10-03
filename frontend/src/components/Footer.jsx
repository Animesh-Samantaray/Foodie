import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 border-b border-gray-700 pb-8">
        <div>
          <h2 className="text-2xl font-bold text-white">🍴 FoodieHub</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Your one-stop destination for delicious meals. Fresh, tasty, and delivered with love.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Menu", "Contact"].map((link) => (
              <li
                key={link}
                className="hover:text-pink-400 transition cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            {["Delivery", "Catering", "Takeaway", "Corporate Orders"].map((service) => (
              <li
                key={service}
                className="hover:text-pink-400 transition cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm sm:text-base text-gray-400 mb-3">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-md text-gray-800 text-sm focus:outline-none"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-6 text-sm sm:text-base text-gray-500">
        <p>© {new Date().getFullYear()} FoodieHub. All rights reserved.</p>
        <div className="flex space-x-6 mt-3 sm:mt-0 text-lg">
          <a href="#" className="hover:text-pink-400 transition" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-pink-400 transition" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-pink-400 transition" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
