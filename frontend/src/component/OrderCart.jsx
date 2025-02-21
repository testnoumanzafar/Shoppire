
import React from "react";
import product_1 from '../assets/product_1.png';
const OrderCard = ({ order }) => {
  return (
    <div className="flex  items-start justify-between bg-white p-4 shadow rounded-md mb-4">
      {/* Image & Details */}
      <div className="flex">
        {/* Product Image */}
        <img
          src={product_1}
          alt="Product"
          className="w-24 h-24 object-cover rounded-md"
        />

        {/* Product Details */}
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {order.title}
          </h2>
          <p className="text-gray-600">
            <span className="font-medium">Price:</span> ${order.price} &nbsp; 
            <span className="font-medium">Quantity:</span> {order.quantity} &nbsp; 
            <span className="font-medium">Size:</span> {order.size}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Date:</span> {order.date}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Payment:</span> {order.paymentMethod}
          </p>
        </div>
      </div>

      {/* Status & Actions */}
      <div className="flex items-center space-x-4">
        {/* Order Status */}
        <div className="flex items-center text-green-600">
          <span className="w-2 h-2 bg-green-600 rounded-full mr-1"></span>
          <span>Order Placed</span>
        </div>

        {/* Track Order Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Track Order
        </button>
      </div>
    </div>
  );
};

export default OrderCard;