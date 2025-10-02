import React from 'react'
import header from '../assets/header.png'

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${header})` }}
      className="relative h-[700px] w-full bg-cover bg-center"
    >
      
      <div className="absolute inset-0  flex flex-col items-center justify-center text-center px-6">
        <div className="fade-in">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-md">
            Order Your Favorite Food
          </h1>
          <h2 className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mt-4">
            Fresh, tasty, and delivered right to your door. 🍔🍕🥗  
            Get your favorite meals in minutes with just a click!
          </h2>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
