import React from 'react';
import { menu_list } from '../assets/menulist.js';
import './ExploreMenu.css'; // keeps scrollbar hidden

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 md:py-10" id='explore-menu'>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900">
        Explore Our Menu
      </h1>
      <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
        <b>Slide</b> & <b>select</b> your favorite foods from below
      </p>

      <div className="flex hide-scrollbar overflow-x-auto gap-4 sm:gap-6 md:gap-8 py-2">
        {menu_list.map((item, index) => {
          const isActive = category === item.item_name;
          return (
            <div
              key={index}
              className="flex-shrink-0 text-center cursor-pointer px-1 sm:px-2 md:px-3 transition-transform duration-300 hover:scale-105"
              onClick={() =>
                setCategory(prev => (prev === item.item_name ? 'All' : item.item_name))
              }
            >
              <div
                className={`relative w-16 sm:w-20 md:w-28 lg:w-32 aspect-square rounded-full overflow-hidden border-4 transition-shadow duration-300 ${
                  isActive
                    ? 'border-blue-500 shadow-lg'
                    : 'border-gray-300 shadow-md'
                }`}
              >
                <img
                  src={item.item_image}
                  alt={item.item_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className={`mt-2 font-semibold text-xs sm:text-sm md:text-base transition-colors duration-300 ${
                  isActive ? 'text-blue-500' : 'text-gray-800'
                }`}
              >
                {item.item_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
