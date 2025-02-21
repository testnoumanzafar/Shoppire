
import React from 'react'
import modernImage from '../assets/home.png.png';
import { FaFireFlameSimple } from 'react-icons/fa6';
const Hero = () => {
  return (
    <div class="container mx-auto px-4 py-12  rounded-lg ">

    <div class="flex flex-wrap md:flex-nowrap items-center justify-between bg-gray-200 rounded-lg ">
   {/* <!-- Left Side Content --> */}
   <div class="md:w-1/2 p-6 text-left">
     <h2 class="text-2xl   mb-4 text-teal-500 font-medium flex">Modern Collection <FaFireFlameSimple className='mt-1'/></h2>
     <h1 class="text-[50px] font-bold  mb-6">Evaluate Your Look With Every Click Shop Today. </h1>
     <p class="text-base mb-6">
       Discover our carefully curated collection of trendy apparel designed for every occasion and personality.
     </p>
     <div class="flex space-x-4">
       <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Latest Product</button>
       <button class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Popular Product</button>
     </div>
   </div>
 
   {/* <!-- Right Side Image --> */}
   <div class="md:w-1/2 p-6">
     <img src={modernImage} alt="Modern Collection Image" class= "w-full rounded  "/>
   </div>
 </div>
 </div>
  )
}

export default Hero