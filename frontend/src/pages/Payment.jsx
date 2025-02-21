
import React from "react";
import  master from '../assets/mastercard.png'
import  visa from '../assets/visacard.png'
const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center my-8">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-6 md:flex">
        {/* Left Section: Order Summary */}
        <div className="w-full md:w-1/2 border-r p-6">
          <div className="mb-4">
            <h1 className="text-xl font-bold text-gray-800">Pay youtube.co</h1>
            <span className="text-sm text-yellow-500 font-semibold">TEST MODE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">PKR 16,620.00</h2>
          <div className="mb-4 font-semibold">
            <div className="flex justify-between text-gray-700">
              <span>Classic Men's Casual T-Shirt</span>
              <span>PKR 6,925.00</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Classic Men's Casual T-Shirt</span>
              <span>PKR 6,925.00</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Delivery Charges</span>
              <span>PKR 2,770.00</span>
            </div>
          </div>
        </div>

        {/* Right Section: Payment Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Pay with card</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
  <label
    htmlFor="card-info"
    className="block text-sm font-medium text-gray-700"
  >
    Card information
  </label>
  <div className="flex items-center space-x-2 mt-1">
  <div className="relative w-full">
  <input
    type="text"
    id="card-info"
    placeholder="1234 1234 1234 1234"
    className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-16 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  />
  <div className="absolute inset-y-0 right-2 flex items-center gap-2">
    <img src={master} alt="mastercard" className="w-8 rounded-sm h-5" />
    <img src={visa} alt="visacard" className="w-8 rounded-sm h-5" />
  </div>
</div>
  </div>
  <div className="flex space-x-2 mt-2">
    <input
      type="text"
      placeholder="MM/YY"
      className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
    <input
      type="text"
      placeholder="CVC"
      className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
</div>
            <div>
              <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">
                Cardholder name
              </label>
              <input
                type="text"
                id="cardholder-name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="full name on card"
              />
            </div>
            <div>
              <label htmlFor="country-region" className="block text-sm font-medium text-gray-700">
                Country or region
              </label>
              <input
                type="text"
                id="country-region"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                defaultValue="Pakistan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Securely save my information for 1-click checkout
              </label>
              <div className="flex items-center mt-1">
                <input
                  type="text"
                  placeholder="0301 2345678"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                >
                  Link
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 mt-4"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
