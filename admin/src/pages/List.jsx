import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/foods/list");
      if (response.data?.success) {
        toast.success("Fetched all data");
        setList(response.data.data);
      } else toast.error("Error fetching data");
    } catch (err) {
      toast.error("Server Error");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  
  const handleDelete = async(id)=>{
    const ans = confirm('Do u want to delete ?')
    if(!ans) return;
    const response = await axios.delete('http://localhost:4000/api/foods/remove',{data:{id:id}});
    if(response.data?.success){
      toast.success(response.data.message);
      fetchList();
    }
    else toast.error(response.data?.message);
  }
  return (
    <div className="sticky left-[280px] top-20 w-full max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
        🍴 All Food Items
      </h1>

      {/* Header Row */}
      <div className="grid grid-cols-5 font-semibold text-gray-600 border-b border-gray-200 pb-3 mb-3 text-sm uppercase">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Action</p>
      </div>

      {/* Food List */}
      <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-2">
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center bg-gray-50 hover:bg-gray-100 transition-all duration-200 rounded-xl p-3 shadow-sm"
            >
              <div className="flex justify-center">
                <img
                  src={`http://localhost:4000/images/${item.image}`}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg border"
                />
              </div>
              <p className="font-medium text-gray-800">{item.name}</p>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-gray-800 font-semibold">${item.price}</p>
              <button className="px-3 py-1 text-sm rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
              onClick={()=>handleDelete(item._id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-10">No food items found 🍔</p>
        )}
      </div>
    </div>
  );
};

export default List;
