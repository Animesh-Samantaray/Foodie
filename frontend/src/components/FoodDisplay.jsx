import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoods = food_list.filter(
    (item) => category === "All" || category === item.category
  );

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-700 text-center">
        🍴 Explore <span className="text-pink-600">Delicious</span> Foods
      </h2>

      {filteredFoods.length === 0 ? (
        <p className="text-center text-gray-500 text-sm sm:text-base">
          No items available in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {filteredFoods.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              image={item.image}
              description={item.description}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
