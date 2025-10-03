import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-52 sm:w-56 md:w-60 border border-gray-100 flex flex-col">
      
      {/* Image */}
      <div className="w-full h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate">
          {name}
        </h3>

        <p className="text-xs sm:text-sm md:text-sm text-gray-600 line-clamp-2 mt-1">
          {description}
        </p>

        {cartItems[id] > 0 ? (
          <p className="text-xs sm:text-sm md:text-sm font-medium text-gray-700 mt-2">
            Quantity:{" "}
            <span className="font-semibold text-pink-600">{cartItems[id]}</span>
          </p>
        ) : (
          <p className="text-xs sm:text-sm md:text-sm font-medium text-gray-700 mt-2">
            <span>Not added yet</span>
          </p>
        )}

        {/* Price + Buttons */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-base sm:text-lg md:text-xl font-bold text-pink-600">
            ${price}
          </span>

          <div className="flex gap-2">
            {cartItems[id] > 0 && (
              <button
                className="bg-purple-300 hover:bg-purple-400 text-gray-700 px-3 sm:px-4 py-1.5 rounded-lg text-sm sm:text-base font-medium transition"
                onClick={() => removeFromCart(id)}
              >
                −
              </button>
            )}

            <button
              className="bg-pink-500 hover:bg-pink-600 text-white px-3 sm:px-4 py-1.5 rounded-lg text-sm sm:text-base font-medium shadow-sm transition"
              onClick={() => addToCart(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
