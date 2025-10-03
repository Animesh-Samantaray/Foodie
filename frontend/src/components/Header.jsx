import React from 'react';
import header from '../assets/header.png';

const Header = () => {
  return (
    <div className="w-full relative mt-[50px]">
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${header})` }}
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center rounded-xl shadow-lg relative"
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10  bg-opacity-20 rounded-xl">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
            Order Your Favorite Food
          </h1>
          <h2 className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mt-4 drop-shadow-md">
            Fresh, tasty, and delivered right to your door. 🍔🍕🥗  
            Get your favorite meals in minutes with just a click!
          </h2>
          <button className="mt-6 px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-md transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
