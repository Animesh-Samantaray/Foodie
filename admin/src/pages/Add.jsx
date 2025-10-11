import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const categories = [
  "Pizza", "Burger", "Pasta", "Sushi", "Tacos",
  "Salad", "Sandwich", "Fried Chicken", "Ice Cream", "Steak",
  "Noodles", "Curry", "Biryani", "Dosa", "Pancakes", "Momos", "Donut"
];

const Add = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
    const handleOnSubmit = async(e)=>{
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append("name", name);
            formData.append("image", image);
            formData.append("price", price);
            formData.append("description", description);
            formData.append("category", category);

            const res = await axios.post( "http://localhost:4000/api/foods/add",formData);


            if (res.data?.success) {
            toast.success("Food added");
            setName("");
            setImage(null);
            setPrice("");
            setDescription("");
            setCategory("");
             }

        } catch (error) {
            toast.error(res.data?.message)
        }
    }
  return (
    <div className="sticky left-[280px] top-20 w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Add New Food Item</h2>

      <form className="flex flex-col gap-5" onSubmit={handleOnSubmit}>
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Image */}
        <div className="flex flex-col">
          <label htmlFor="image" className="font-medium text-gray-700 mb-1">Upload Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
            accept=".png, .jpg, .jpeg"
            className="file:border-0 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-md file:cursor-pointer hover:file:bg-blue-700"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label htmlFor="price" className="font-medium text-gray-700 mb-1">Price ($):</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium text-gray-700 mb-1">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="category" className="font-medium text-gray-700 mb-1">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default Add;
