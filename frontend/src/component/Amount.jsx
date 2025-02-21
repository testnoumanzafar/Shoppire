
import React from 'react'

const Amount = ({total}) => {
  return (
    <>
     <div className="mt-7">
        <div className="w-full max-w-md   bg-white p-4 rounded-lg  ">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        <span className="text-gray-900  text-2xl">Cart</span> <span className="text-teal-500 text-2xl">Total</span>
      </h2>
      <div className="space-y-2">
        
        <div className="flex justify-between border-b border-gray-200 pb-2 ">
          <span className="text-gray-600 font-medium">SubTotal:</span>
          <span className="text-gray-800 font-medium  ">${total}</span>
        </div>
     
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-600  font-medium">Shipping Fee:</span>
          <span className="text-gray-800 font-medium">$10</span>
        </div>
       
        <div className="flex justify-between pt-2  border-b border-gray-200">
          <span className="text-gray-900 font-semibold">Total:</span>
          <span className="text-gray-900 font-bold">${total + 10}</span>
        </div>
      </div>
    </div>
       </div>
    </>
  )
}

export default Amount