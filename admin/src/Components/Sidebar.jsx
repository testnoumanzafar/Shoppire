import React from 'react'
import { FaBorderAll, FaListAlt } from 'react-icons/fa'
import { MdAddBox } from 'react-icons/md'
import { Link } from 'react-router-dom'
 
const Sidebar = ({tokenremove}) => {
  // const logout = () => {
  //   localStorage.removeItem('token')
  //   window.location.reload()
  // }
  return (
    // <>
    
    <div className="flex mt-2 bg-slate-100">
    {/* Sidebar */}
    <div className="w-44 border border-gray-300 h-[550px] my-3 bg-white rounded flex flex-col space-y-8 pt-8 fixed">
      <Link to="/">
        <div className="flex gap-2">
          <MdAddBox className="text-[26px]" /> Add item
        </div>
      </Link>
      <Link to="/list">
        <div className="flex gap-2">
          <FaListAlt className="text-[26px]" /> List
        </div>
      </Link>
      <Link to="/order">
        <div className="flex gap-2">
          <FaBorderAll className="text-[26px]" /> Order
        </div>
      </Link>
      <button
        className="absolute bottom-3 bg-gray-400 px-3 ml-6 py-1 hover:bg-gray-500 rounded"
        onClick={() => tokenremove("")}
      >
        Logout
      </button>
    </div>
</div>
    
  )
}     

export default Sidebar