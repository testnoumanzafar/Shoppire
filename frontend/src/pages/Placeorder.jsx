import React, { useState } from 'react';
import Amount from '../component/Amount';
import Footer from '../component/Footer';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { BackendUrl } from '../App';
import { toast } from 'react-toastify';
import { removeamount } from '../component/reduxtoolkit/slice/total';
import { removeCart } from '../component/reduxtoolkit/slice/addcart';

const Placeorder = () => {
  const dispatch = useDispatch();
  const showtotal = useSelector((state) => state.allAmounts.amounts);
  const cartitem = useSelector((state) => state.allCart.carts);
 const [loading, setLoading] = useState(false); 

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    street: "", city: "", state: "", zipCode: "", country: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userIdFashion");
    const orderData = { userId, items: cartitem, totalAmount: showtotal + 10, address: formData };
setLoading(true);
    try {
      const response = await axios.post(BackendUrl + "/api/order/place-order", orderData);
      if (response.data.success) {
        dispatch(removeamount());
        dispatch(removeCart());
          setFormData({  
          firstName: "", lastName: "", email: "", phone: "",
          street: "", city: "", state: "", zipCode: "", country: "",
        });
        toast.success(response.data.message, { autoClose: 2000 });
      }
    } catch (error) {
      toast.error("Order placement failed!", { autoClose: 2000 });
    }finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <>
      <div className="bg-white flex flex-col lg:flex-row justify-center lg:justify-between mx-4 md:mx-10 rounded-md my-7 gap-6">
        
        {/* Delivery Form */}
        <div className="w-full lg:w-1/2 max-w-md mt-8 p-5">
          <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>
          <form className="space-y-4 p-4 bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
              className="border border-gray-300 w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone}  onChange={handleChange}
              className="border border-gray-300 w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange}
              className="border border-gray-300 w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode}  onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </form>
        </div>

        {/* Payment & Amount */}
        <div className="w-full lg:w-1/2 max-w-md mt-8 p-5 bg-white shadow-md rounded-lg">
          <Amount total={showtotal} />
          <div className="mt-5">
            <span className="text-xl font-bold">Payment <span className="text-teal-500">Method</span></span>
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              {/* <button className="px-5 py-2 bg-gray-200 rounded-md font-medium hover:bg-gray-300">Stripe</button> */}
              <button className="px-5 py-2 bg-gray-200 rounded-md text-teal-500 font-medium hover:bg-gray-300">Cash on Delivery</button>
            </div>
           <button onClick={handleSubmit} 
              disabled={loading}  
              className={`w-full sm:w-auto px-5 py-2 mt-4 rounded-md ${loading ? 'bg-gray-400' : 'bg-teal-500 hover:bg-teal-600'} text-white`}>
              {loading ? "Placing Order..." : "Place Order"}  
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Placeorder;
