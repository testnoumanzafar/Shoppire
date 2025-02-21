import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Footer from "../component/Footer";
import { useSelector } from "react-redux";

const Collection = () => {
  const showproud= useSelector((state)=>state.allProducts.Products)

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [search, setSearch] = useState("")
  const [sortOption, setSortOption] = useState("relevant"); 
       
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((item) => item !== category);
      }
      return [...prevCategories, category];
    });
  };

  // Handle checkbox changes for types
  const handleTypeChange = (type) => {
    setSelectedTypes((prevTypes) => {
      if (prevTypes.includes(type)) {
        return prevTypes.filter((item) => item !== type);
      }
      return [...prevTypes, type];
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  // Filter products by selected categories and types
  let filteredProducts = showproud.products.filter((product) => {
    const categoryMatches =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const typeMatches =
      selectedTypes.length === 0 || selectedTypes.includes(product.subCategory);
     const searchMatches = product.name.toLowerCase().includes(search.toLowerCase());
    return categoryMatches && typeMatches && searchMatches;
  });


  filteredProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "price_low_to_high") {
      return a.price - b.price;
    }
    if (sortOption === "price_high_to_low") {
      return b.price - a.price;
    }
    return 0; // Default: no sorting for "relevant"
  });

  return (
    <>
    <div className="w-full flex justify-between my-6 mx-9 ">
      <div className="w-60 p-4 bg-white shadow-md rounded-lg">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute right-3 top-2.5 text-gray-500"><FaSearch /></span>
          </div>
        </div>

        {/* Categories */}
        <div className="w-48 p-4 bg-gray-100 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <div className="space-y-2">
            {["Men", "Women", "Kids"].map((category) => (
              <label key={category} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 focus:ring-blue-400"
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Types */}
        <div className="mb-6 w-48 mt-4 p-4 bg-gray-100 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Types</h3>
          <div className="space-y-2">
            {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
              <label key={type} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 focus:ring-blue-400"
                  onChange={() => handleTypeChange(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
         <div>
            <h3 className="text-lg font-semibold mb-3">Sort by:</h3>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleSortChange}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="price_low_to_high">Sort by Price: Low to High</option>
              <option value="price_high_to_low">Sort by Price: High to Low</option>
            </select>
          </div>
        </div>

      {/* Product Grid */}
      <div className="w-[1100px] flex flex-wrap p-4   bg-white  shadow-md rounded-lg">
        {filteredProducts.length > 0 ? (
filteredProducts.map((item, index) => (
          <div key={index} className="my-4 p-3 w-[254px]">
            <Link to={`/product/${item._id}`}>
              <img src={item.image[0]} alt="new arrival" />
            </Link>
            <div className="bg-white shadow-md px-2 rounded-b-lg">
              <p className="text-sm font-bold mt-2">{item.name}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-600 font-bold">{item.category}</p>
                <p className="text-lg text-teal-500 font-medium">${item.price}</p>
              </div>
              <p className="text-sm text-gray-600 mt-1 pb-2 h-24">{item.description}</p>
            </div>
          </div>
         ))
        ): (
          <p>No products found</p>
         )}
      </div>
    </div>
      <Footer />
    </>

  );
};

export default Collection;
