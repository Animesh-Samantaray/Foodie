import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { food_list, removeFromCart, cartItems } = useContext(StoreContext);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-6 bg-gray-200 p-3 rounded-lg font-semibold text-gray-700">
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart Items */}
      <div className="space-y-4 mt-4">
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={item._id}
                className="grid grid-cols-2 md:grid-cols-6 items-center gap-4 bg-white p-4 shadow-md rounded-lg"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />

                {/* Name */}
                <p className="font-medium text-gray-800">{item.name}</p>

                {/* Price */}
                <p className="text-gray-700">${item.price}</p>

                {/* Quantity */}
                <p className="text-gray-700">{cartItems[item._id]}</p>

                {/* Total */}
                <p className="font-semibold text-gray-800">
                  ${item.price * cartItems[item._id]}
                </p>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 font-semibold hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
