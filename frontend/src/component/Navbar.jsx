import axios from 'axios';
import React, { useState } from 'react';
import { BiSolidLabel } from 'react-icons/bi';
import { BsCollectionFill } from 'react-icons/bs';
import { CiHome } from 'react-icons/ci';
import { FaRegUserCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { MdContacts } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BackendUrl } from '../App';
import { toast } from 'react-toastify';

const Navbar = () => {
  const showproud = useSelector((state) => state.allCart.carts);
  const [setting, setSetting] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const Setting = () => setSetting(!setting);
  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  const logout = async () => {
    const userId = localStorage.getItem("userIdFashion");
    if (!userId) return toast.error("User ID not found!");

    try {
      const response = await axios.delete(`${BackendUrl}/api/user/logout`, {
        headers: { userId },
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

  const navLinks = [
    { name: "Home", path: "/", icon: <CiHome className="mt-1" /> },
    { name: "Collection", path: "/collection", icon: <BsCollectionFill className="mt-1" /> },
    { name: "About", path: "/about", icon: <BiSolidLabel className="mt-1" /> },
    { name: "Contact", path: "/contact", icon: <MdContacts className="mt-1" /> },
  ];

  return (
    <nav className="bg-white py-4 sticky top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center mx-4 sm:mx-12">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">QuickBuy</Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `cursor-pointer text-lg font-medium flex gap-2 ${
                    isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
                  }`
                }
              >
                {link.icon} {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Desktop Cart */}
          <Link to="/cart" className="hidden md:block relative">
            <FaShoppingCart className="text-2xl cursor-pointer text-gray-700 hover:text-blue-500" />
            <div className="absolute -top-2 -right-2 text-white bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {showproud.length}
            </div>
          </Link>

          {/* Desktop Profile */}
          <div className="hidden md:block relative">
            <FaRegUserCircle
              className="text-2xl cursor-pointer text-gray-700 hover:text-blue-500"
              onClick={Setting}
            />
            {setting && (
              <div className="absolute top-12 right-0 w-32 text-center border border-gray-200 bg-white shadow-md p-2 rounded-md">
                <p className="flex gap-2 justify-center cursor-pointer" onClick={logout}>
                  Logout
                  <FaTimes className="mt-1" />
                </p>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {mobileMenu ? <FaTimes className="text-2xl text-gray-700" /> : <FaBars className="text-2xl text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex gap-2 items-center text-lg font-medium ${
                      isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
                    }`
                  }
                  onClick={() => setMobileMenu(false)}
                >
                  {link.icon} {link.name}
                </NavLink>
              </li>
            ))}

            {/* Cart inside mobile menu */}
            <li>
              <Link
                to="/cart"
                className="flex gap-2 items-center text-lg font-medium text-gray-700 hover:text-blue-500"
                onClick={() => setMobileMenu(false)}
              >
                <FaShoppingCart /> Cart ({showproud.length})
              </Link>
            </li>

            {/* Profile inside mobile menu */}
            <li>
              <button
                className="flex gap-2 items-center text-lg font-medium text-gray-700 hover:text-blue-500"
                onClick={() => { logout(); setMobileMenu(false); }}
              >
                <FaRegUserCircle /> Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
