
import axios from 'axios';
import React, { useState } from 'react'
import { BiSolidLabel } from 'react-icons/bi';
import { BsCollectionFill } from 'react-icons/bs';
import { CiHome } from 'react-icons/ci';
import { FaRegUserCircle, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdContacts } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BackendUrl } from '../App';
import { toast } from 'react-toastify';
const Navbar = () => {
  const showproud= useSelector((state)=>state.allCart.carts)
 const[setting , setSetting]=  useState(false);
const navigate =useNavigate()

 const Setting =()=>{
   setSetting(!setting)
 }
 const logout = async () => {
  const userId = localStorage.getItem("userIdFashion");
  if (!userId) return toast.error("User ID not found!");

  try {
      const response = await axios.delete(`${BackendUrl}/api/user/logout`, {
          headers: { userId }
      });

      if (response.status === 200) {
          toast.success(response.data.message);
          localStorage.removeItem("tokenshop");
          localStorage.removeItem("userIdFashion");
          navigate("/");
      }
  } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || "Logout failed");
  }
};

  return (
    <nav className="bg-white py-4 sticky top-0 left-0 z-50 shadow-md">
    <div className="flex justify-between items-center mx-12">
      {/* Left Side - Brand Name */}
      <div className="text-2xl font-bold text-blue-600">QuickBuy</div>
  
      {/* Center - Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer text-lg font-medium flex gap-2 ${
                isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
              }`
            }
          >
            <CiHome className="mt-1" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `cursor-pointer text-lg font-medium flex gap-2 ${
                isActive ? 'text-blue-400' : 'text-gray-700 hover:text-blue-400'
              }`
            }
          >
            <BsCollectionFill className="mt-1" /> Collection
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `cursor-pointer text-lg font-medium flex gap-2 ${
                isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
              }`
            }
          >
            <BiSolidLabel className="mt-1" /> About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer text-lg font-medium flex gap-2 ${
                isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
              }`
            }
          >
            <MdContacts className="mt-1" /> Contact
          </NavLink>
        </li>
      </ul>
  
      {/* Right Side - Cart and Profile Icons */}
      <div className="flex items-center space-x-6">
        <Link to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer text-gray-700 hover:text-blue-500" />
            <div className="absolute -top-2 -right-2 text-white bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {showproud.length}
            </div>
          </div>
        </Link>
  
        {/* Profile Icon */}
        <FaRegUserCircle
          className="text-2xl cursor-pointer text-gray-700 hover:text-blue-500"
          onClick={Setting}
        />
        {setting && (
          <div className="absolute top-12 right-4 w-32 text-center border border-gray-200 bg-white shadow-md p-2 rounded-md">
            <p className="flex gap-2" onClick={logout}>
              Logout <FaArrowRightLong className="mt-1" />
            </p>
          </div>
        )}
      </div>
    </div>
  </nav>
  )
}

export default Navbar