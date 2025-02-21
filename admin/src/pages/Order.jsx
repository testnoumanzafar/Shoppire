
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BackendUrl } from '../App';

const Order = () => {

    const [orders, setOrder] = useState([])
    console.log(orders);
    
    const fetchorder = async () => {
      try {
        const response = await axios.get(BackendUrl + "/api/order/get-order");
        console.log(response.data);
        if(response.data.success){
          setOrder(response.data.orders)
        }else{
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    };
      useEffect(() => {
        fetchorder();
      }, []);



  return (
    <>
    
    <div className="w-full p-6 bg-gray-100 min-h-screen flex flex-col items-center">
  {orders.map((order, index) => (
    <div
      key={index}
      className="bg-white shadow-md p-5 mb-4 rounded-lg flex flex-col md:flex-row justify-between items-center w-[900px]"
    >
    
      <div className="flex items-start gap-3 w-1/2 border border-yellow-200 p-4 rounded-lg">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg">
          📦
        </div>
        <div className="text-gray-700 text-sm">
          {order.items.map((item, index) => (
            <div key={index}>
              <p>item{index + 1}: {item.name}  Quantity: {item.qnty} sizes: {item.sizes.join(', ')}</p>
            </div>
          ))}
       
         <p><span className='font-semibold'>Name:</span>  {order.address.firstName}</p>
          
          <p><span className='font-semibold'>Address:</span>  {order.address.street} {order.address.city} {order.address.country} </p>
          
        </div>
      </div>

       
      <div className="flex flex-col items-start w-1/5">
        <p className="text-gray-900 font-bold text-lg">Rs {order.items[0].price} </p>
        <p className="text-gray-900 font-bold text-lg">{new Date(order.date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })}</p>
      </div>

      
    </div>
  ))}
</div>
    
    </>
  )
}

export default Order


 