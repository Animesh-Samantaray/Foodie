import React from 'react';
import {menu_list} from '../assets/menulist.js';
import './ExploreMenu.css'; // for hiding scrollbar

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold mb-2">Explore Our Menu</h1>
      <p className="text-gray-600 mb-6">Choose food from our menu below</p>

      <div className="flex hide-scrollbar overflow-x-scroll">
        {menu_list.map((item, index) => {
          const isActive = category === item.item_name;
          return (
            <div
              key={index}
              className="min-w-[160px] text-center mr-4 cursor-pointer pt-[10px] px-[5px]"
              onClick={() =>
                setCategory((prev) => (prev === item.item_name ? 'All' : item.item_name))
              }
            >
              <img
                src={item.item_image}
                alt={item.item_name}
                className={`w-40 aspect-square rounded-full mb-3 object-cover border-4 shadow-md transition-all duration-300  
                  ${isActive ? 'border-blue-500 scale-110 shadow-lg' : 'border-gray-300 scale-100'}`}
              />
              <p className={`font-bold  text-gray-800 ${isActive?'text-teal-500':'text-gray-800'} `}>{item.item_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
