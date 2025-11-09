import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Footer from "../component/Footer";
import { useSelector } from "react-redux";

const Collection = () => {
  const showproud = useSelector((state) => state.allProducts.Products);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("relevant");

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSortChange = (e) => setSortOption(e.target.value);

  // Filter and sort products
  let filteredProducts = showproud.products.filter((product) => {
    const categoryMatches =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const typeMatches = selectedTypes.length === 0 || selectedTypes.includes(product.subCategory);
    const searchMatches = product.name.toLowerCase().includes(search.toLowerCase());
    return categoryMatches && typeMatches && searchMatches;
  });

  filteredProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "price_low_to_high") return a.price - b.price;
    if (sortOption === "price_high_to_low") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <div className="container mx-auto px-4 mt-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-60 flex-shrink-0 bg-white shadow-md rounded-lg p-4">
            {/* Search */}
            <div className="mb-6 relative">
              <input
                type="text"
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
            </div>

            {/* Categories */}
            <div className="mb-4 p-3 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              {["Men", "Women", "Kids"].map((category) => (
                <label key={category} className="flex items-center text-sm mb-1">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300 focus:ring-blue-400"
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              ))}
            </div>

            {/* Types */}
            <div className="mb-4 p-3 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Types</h3>
              {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                <label key={type} className="flex items-center text-sm mb-1">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300 focus:ring-blue-400"
                    onChange={() => handleTypeChange(type)}
                  />
                  {type}
                </label>
              ))}
            </div>

            {/* Sort */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Sort by:</h3>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="relevant">Relevant</option>
                <option value="price_low_to_high">Price: Low to High</option>
                <option value="price_high_to_low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, index) => (
                  <div
                    key={index}
                    className="my-4 p-3 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <Link to={`/product/${item._id}`}>
                      <img
                        src={item.image[0]}
                        alt={item.name}
                        className="w-full object-cover rounded-lg"
                      />
                    </Link>
                    <div className="px-2 py-3">
                      <p className="text-sm font-bold mt-2">{item.name}</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-600 font-bold">{item.category}</p>
                        <p className="text-lg text-teal-500 font-medium">${item.price}</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 pb-2 h-24">{item.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No products found</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};

export default Collection;




{/* <div className="ml-72 mt-6">
<Footer />
</div> */}
