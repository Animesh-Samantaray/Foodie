import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { food_list, removeFromCart, cartItems, val } = useContext(StoreContext);

  // Collect only items in the cart
  const cartData = food_list.filter((item) => cartItems[item._id] > 0);

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6 lg:p-10">
      <h1 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="space-y-3">
        {cartData.length > 0 ? (
          cartData.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white p-3 sm:p-4 rounded-md shadow-sm"
            >
              {/* Left side: Image + name */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
                />
                <div>
                  <p className="font-medium text-sm sm:text-base">{item.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">${item.price}</p>
                </div>
              </div>

              {/* Right side: Qty + Total + Remove */}
              <div className="flex items-center justify-between sm:gap-6 text-sm sm:text-base">
                <p>x {cartItems[item._id]}</p>
                <p className="font-semibold">${item.price * cartItems[item._id]}</p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:underline text-xs sm:text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-40 text-gray-500 italic text-sm sm:text-base">
            Nothing in your cart
          </div>
        )}
      </div>

      {/* Summary */}
      {val > 0 && (
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-md shadow-sm w-full sm:max-w-md mx-auto">
          <h2 className="font-semibold mb-3 text-base sm:text-lg">Order Summary</h2>
          <div className="flex justify-between text-xs sm:text-sm mb-1">
            <span>Items Total</span>
            <span>${val}</span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm mb-1">
            <span>Delivery Fee</span>
            <span>$2</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-sm sm:text-base">
            <span>Total</span>
            <span>${val + 2}</span>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 sm:py-3 rounded hover:bg-blue-700 text-sm sm:text-base">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
