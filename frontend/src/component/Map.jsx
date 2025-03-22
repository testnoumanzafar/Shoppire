
import React from 'react'
import { Link } from 'react-router-dom'

const Map = ({popular}) => {
  return (
    <>
    <div className="flex flex-wrap justify-center mt-9 mx-9 gap-4">
      {popular.map((item, index) => (
        <div key={index} className="my-4 p-3 w-[23%] bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
          <Link to={`/product/${item._id}`}>
            <img
              src={item.image[0]}
              alt="new arrival"
              className="w-full  object-cover rounded-t-lg"
            />
         
          <div className="px-4 py-2">
            <p className="text-lg font-bold text-gray-800">{item.name}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-600 font-semibold">{item.category}</p>
              <p className="text-lg text-teal-600 font-medium">${item.price}</p>
            </div>
            <p className="text-sm text-gray-600 mt-2 h-16">{item.description}</p>
            <button
              className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition-colors"
              onClick={() => handleAddToCart(item)} // Add your add-to-cart function here
            >
              Add to Cart
            </button>
          </div>
          </Link>
        </div>
      ))}
    </div>
  </>
  )
}

export default Map