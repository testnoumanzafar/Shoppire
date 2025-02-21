
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { BackendUrl } from '../App';
import { MdDelete } from 'react-icons/md';

const List = ({token}) => {
 const[list, setList] = useState([])
 console.log(list,'plp');
 
  const fetchProducts = async () => {
    try {
      const response = await axios.get(BackendUrl + "/api/product/list");
      console.log(response.data);
      if(response.data.success){
        setList(response.data.products)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


    const  deleteitem = async (id)  => {
      console.log(id,'iddddd')
    try {
      const response = await axios.delete(BackendUrl + "/api/product/remove" ,{
        headers: { token },
        data: { id }, // Send id in the data field
      });
      console.log(response.data);
      if(response.data.success){
       await fetchProducts()
        toast.success(response.data.message)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  return (
    <>
    <div className="m-3">
  <h2 className="text-2xl font-bold mb-4">Product List</h2>
  <table className="w-full   ">
    {/* Table Head */}
    <thead className="bg-white mb-3  ">
      <tr className="text-blue-600 font-medium text-lg ">
        <th className=" text-start p-2">Image</th>
        <th className="text-start  p-2">Name</th>
        <th className=" text-start p-2">Category</th>
        <th className=" text-start p-2">Price</th>
        <th className=" text-start p-2">Remove</th>
      </tr>
    </thead><br />

    {/* Table Body */}
    <tbody className='  '>
      {list.map((item, index) => (
        <tr key={index} className="text-center bg-white  ">
          <td className="  p-2">
            <img src={item.image[0]} alt="" className="w-20 h-20 mx-auto" />
          </td>
          <td className="  p-2">{item.name}</td>
          <td className="  p-2">{item.category  }</td>
          <td className="  p-2">${item.price}</td>
          <td className="  p-2">
            <button className="">
              <MdDelete onClick={() => deleteitem(item._id)} className='w-5 h-5 '/>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  )
}

export default List