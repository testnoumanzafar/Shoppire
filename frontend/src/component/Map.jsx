import React from 'react';
import { Link } from 'react-router-dom';

const Map = ({ popular, handleAddToCart }) => {
  return (
    <div className="mt-9 mx-4 sm:mx-9">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {popular.map((item, index) => (
          <div
            key={index}
            className="my-4 p-3 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
          >
            <Link to={`/product/${item._id}`} className="flex flex-col">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-full object-cover rounded-t-lg"
              />
              <div className="px-4 py-2">
                <p className="text-lg font-bold text-gray-800">{item.name}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-600 font-semibold">{item.category}</p>
                  <p className="text-lg text-teal-600 font-medium">${item.price}</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            </Link>
            {/* <button
              className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition-colors"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
