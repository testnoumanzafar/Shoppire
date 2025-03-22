
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BackendUrl } from '../App';

const Order = () => {

    const [orders, setOrder] = useState([])
    // console.log(orders);
    
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
  <table className="w-[900px] bg-white shadow-md rounded-lg overflow-hidden">
    <thead className="bg-blue-600 text-white">
      <tr>
        <th className="p-3">Sl</th>
        {/* <th className="p-3">Order Id</th> */}
        <th className="p-3">Order Date</th>
        <th className="p-3">Customer Information</th>
        {/* <th className="p-3">Store</th> */}
        <th className="p-3">Item Quantity</th>
        <th className="p-3">Total Amount</th>
        <th className="p-3">Order Status</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, index) => (
        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
          <td className="p-3 text-center">{index + 1}</td>
          {/* <td className="p-3 text-center">{order.orderId}</td> */}
          <td className="p-3 text-center">
            {new Date(order.date).toLocaleString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}
          </td>
          <td className="p-3">
            {order.address.firstName} {order.address.lastName}<br />
            {order.address.phone} <br/>
            {order.address.street}
          </td>
          {/* <td className="p-3 text-center">{order.store}</td> */}
          <td className="p-3 text-center">
            {order.items.reduce((total, item) => total + item.qnty, 0)}
            <br />
            <span className="text-sm text-gray-600">
              Size: {order.items.map((item) => item.sizes.join(', '))}
            </span>
          </td>
          <td className="p-3 text-center">
            Rs {order.items.reduce((total, item) => total + item.price * item.qnty, 0)}
          </td>
          <td className="p-3 text-center">{order.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    
    </>
  )
}

export default Order


 