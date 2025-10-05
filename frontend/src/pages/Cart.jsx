import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { food_list, removeFromCart, cartItems, val } = useContext(StoreContext);

  // Collect only items in the cart
  const cartData = food_list.filter((item) => cartItems[item._id] > 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="space-y-3">
        {cartData.length > 0 ? (
          cartData.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm"
            >
              {/* Left side: Image + name */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>

              {/* Right side: Qty + Total + Remove */}
              <div className="flex items-center gap-4">
                <p className="text-sm">x {cartItems[item._id]}</p>
                <p className="font-semibold">
                  ${item.price * cartItems[item._id]}
                </p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-40 text-gray-500 italic">
            Nothing in your cart
          </div>
        )}
      </div>

      {/* Summary */}
      {val > 0 && (
        <div className="mt-8 p-4 bg-white rounded-md shadow-sm w-full max-w-md">
          <h2 className="font-semibold mb-3">Order Summary</h2>
          <div className="flex justify-between text-sm mb-1">
            <span>Items Total</span>
            <span>${val}</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Delivery Fee</span>
            <span>$3</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${val + 3}</span>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
