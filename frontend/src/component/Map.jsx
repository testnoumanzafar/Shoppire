
import React from 'react'
import { Link } from 'react-router-dom'

const Map = ({popular}) => {
  return (
     <>
     <div className='flex flex-wrap  justify-between  mt-9 mx-9'>
{popular.map((item, index) => (
      <div key={index} className="my-4 p-4  w-[310px]   ">  
       <Link to={`/product/${item._id}`}>  
        <img src={item.image[0]} alt="new arrival" />
       </Link>
        <div className='bg-white shadow-md px-2 rounded-b-lg '>
        <p className="text-lg font-bold">{item.name}</p>
        <div className='flex justify-between items-center mt-1  '>
        <p className="text-sm text-gray-600 font-bold">{item.category}</p>
        <p className="text-lg text-teal-500 font-medium">${item.price}</p>
        </div>
          
        <p className="text-sm text-gray-600 mt-1 pb-2 h-16">{item.description}</p>
      </div>
        </div>
    ))}
    </div>
     </>
  )
}

export default Map