import React, { useEffect, useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addIncrement, Delete, Singledecrement } from "../component/reduxtoolkit/slice/addcart";
import Footer from "../component/Footer";
import Amount from "../component/Amount";
import { Link } from "react-router-dom";
import { addamount } from "../component/reduxtoolkit/slice/total";

const Cart = () => {
  let dispatch = useDispatch();
  const Cartitem = useSelector((state) => state.allCart.carts);
  const [total, setTotal] =  useState(0);
  // console.log(Cartitem), "cart";
   const  handleincrement = (id) => {
            dispatch(addIncrement(id));
   }
   const handledecrement = (id) => {
      dispatch(Singledecrement(id));
   }

   const Total= ()=>{
    let totalAmount=0
    Cartitem.map((item, index)=>{
      totalAmount =item.price * item.qnty + totalAmount
      dispatch(addamount(totalAmount))
    })
    setTotal(totalAmount)
  }
   
  useEffect(()=>{
     Total()
  },[Cartitem])

   const handledeleted = (id) => {
      dispatch(Delete(id));
   }

  return (
    <>
      <div className="container mx-auto px-4 py-4 mt-5 ">
        <div className="bg-white p-3 rounded-md">
        <h2 className="font-semibold text-2xl">Cart <span className="text-teal-500"> List </span> ({Cartitem.length}item)</h2>
        <div className="mt-5 shadow-md px-2">
          {Cartitem.map((item, index) => (
            <div key={index} className="flex p-3 shadow mb-3">
              <div>
                
                <img 
                  src={item.image}
                  alt="product img"
                  className="w-20 h-20"
                />
              </div>

              <div className="w-full ml-3">
                <div className="   w-full h-10 flex justify-between items-start">
                  <div className="font-medium "> {item.name}</div>
                  <MdDelete onClick={()=> handledeleted(item._id)}  className="cursor-pointer "/>
                </div>
                <div className= "w-full h-10">
                  <div className="flex justify-between items-end">
                    <div className="flex gap-2 ">
                      <div className="font-medium text-md">{item.sizes}</div>
                      <button
                        type="button"
                        onClick={()=>handledecrement(item._id)}
                      >
                        <CiSquareMinus  className="h-6 w-6"/>
                      </button>
                       <span className="w-10 h-7 bg-slate-200 text-center">{item.qnty}</span>
                      <button
                        type="button"
                        onClick={()=>handleincrement(item._id)}
                      >
                        <CiSquarePlus  className="h-6 w-6"/>
                      </button>
                    </div>
                  <div className="font-medium text-lg">${item.price * item.qnty}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Amount total= {total} />
     <Link to='/place-order'> <button className="bg-teal-500 py-1 px-3 mt-5 hover:bg-teal-600 text-white rounded-md">Proceed to Checkout</button></Link>

        </div>
      </div>
        <Footer />
    </>
  );
};

export default Cart;
