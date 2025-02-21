
import React, { useEffect, useState } from 'react'
import Map from './Map'
import { useSelector } from 'react-redux'

const Popular = () => {
  const showproud= useSelector((state)=>state.allProducts.Products)
    const [popular, setpopular] =  useState([])
       useEffect(()=>{
         const data = showproud.products.filter((item)=>item.popular === true)
         setpopular(data)
    
       },[showproud.products])
  return ( 
   <>
   <h1 className="text-center mx-auto text-3xl font-semibold border-b-4  border-teal-500 mt-24 w-60">Popular Products</h1>
    <Map popular={popular}/>
   </>
  )
}

export default Popular