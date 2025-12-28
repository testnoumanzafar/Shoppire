import React, { useEffect, useState } from 'react'
 
 
import Map from './Map'
import { useSelector } from 'react-redux'

const Newarrival = () => {
  const showproud= useSelector((state)=>state.allProducts.Products)
  const [popular, setpopular] =  useState([])
   useEffect(()=>{
     const data = showproud.products?.slice(0,8)
     setpopular(data)

   },[showproud.products])

  return (
    <>
<h1 className="text-center mx-auto text-3xl font-semibold border-b-4 border-teal-500  w-36">NewArrival</h1>
 <Map popular={popular}/>
    </>

  )
}

export default Newarrival