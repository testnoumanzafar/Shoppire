import React, { useState } from "react";
import { BackendUrl } from "../App";
import { toast } from "react-toastify";
import axios from "axios";
import { FaUpload } from "react-icons/fa";

const  Add = ({token}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [sizes, setSizes] = useState([]);
  const [popular, setPopular] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSizes((prevSizes) => [...prevSizes, value]);
    } else {
      setSizes((prevSizes) => prevSizes.filter((size) => size !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("popular", popular);
    formData.append("sizes", JSON.stringify(sizes));

    if (image1) formData.append("image1", image1);
    if (image2) formData.append("image2", image2);
    if (image3) formData.append("image3", image3);
    if (image4) formData.append("image4", image4);

    try {
      const response = await axios.post(BackendUrl + "/api/product/add", formData, {headers :{token}});
     toast.success(response.data.message);
        if(response.data.success){
          setName('')
          setDescription('')
          setPrice('')
          setCategory('')
          setSubCategory('')
          setSizes([])
          setPopular(false)
          setImage1(null)
          setImage2(null)
          setImage3(null)
          setImage4(null)
        }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>  
    <div className=" w-[450px]  m-3  ">
      <form onSubmit={handleSubmit} className="  mx-auto p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-medium flex justify-center mb-2">Upload Image</h2>
        <div className="flex gap-11">
        <div className="mb-2">
  <label 
    htmlFor="image1" 
    className="block text-sm font-medium text-gray-700 cursor-pointer"
  >
    <FaUpload className="text-gray-400 text-3xl h-12 w-12 hover:text-gray-500" />
  </label>
  <input
    type="file"
    id="image1" // Unique ID to link with the label
    accept="image/*"
    onChange={(e) => setImage1(e.target.files[0])}
    className="hidden"
  />
</div>

<div className="mb-4">
  <label 
    htmlFor="image2" 
    className="block text-sm font-medium text-gray-700 cursor-pointer"
  >
    <FaUpload className="text-gray-400 text-3xl h-12 w-12 hover:text-gray-500" />
  </label>
  <input
    type="file"
    id="image2" // Unique ID to link with the label
    accept="image/*"
    onChange={(e) => setImage2(e.target.files[0])}
    className="hidden"
  />
</div>
<div className="mb-4">
  <label 
    htmlFor="image3" 
    className="block text-sm font-medium text-gray-700 cursor-pointer"
  >
    <FaUpload className="text-gray-400 text-3xl h-12 w-12 hover:text-gray-500" />
  </label>
  <input
    type="file"
    id="image3" // Unique ID to link with the label
    accept="image/*"
    onChange={(e) => setImage3(e.target.files[0])}
    className="hidden"
  />
</div>

<div className="mb-4">
  <label 
    htmlFor="image4" 
    className="block text-sm font-medium text-gray-700 cursor-pointer"
  >
    <FaUpload className="text-gray-400 text-3xl h-12 w-12 hover:text-gray-500" />
  </label>
  <input
    type="file"
    id="image4" // Unique ID to link with the label
    accept="image/*"
    onChange={(e) => setImage4(e.target.files[0])}
    className="hidden"
  />
</div>
      </div>
      <div className="mb-4">
        <label className=" text-lg font-medium text-gray-700 ">Product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-1.5  w-full rounded-md     border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="">
        <label className="block text-lg font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1  p-1 w-full rounded-md     border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1  p-1.5 w-full rounded-md   border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1  p-1 w-full rounded-md     border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Sub-Category</label>
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="mt-1  p-1 w-full rounded-md  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a sub-category</option>
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Sizes</label>
        <div className="flex gap-4 mt-1">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <label key={size} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={size}
                checked={sizes.includes(size)}
                onChange={handleSizeChange}
                className="rounded"
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Popular</label>
        <input
          type="checkbox"
          checked={popular}
          onChange={(e) => setPopular(e.target.checked)}
          className="rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Add Product
      </button>
    </form>
    </div>
    </>

  );
};

export default  Add;
