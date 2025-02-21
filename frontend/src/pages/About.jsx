
import React from 'react'
import aboutimg from '../assets/about.png';
import { FaFireFlameSimple, FaQuoteLeft } from 'react-icons/fa6';
import Footer from '../component/Footer';
const About = () => {
  return (
    <>
    <div className="  pt-16 px-6 md:px-16 lg:px-16 "> 
    <div className="bg-white rounded-md flex flex-col lg:flex-row items-center lg:items-start gap-10 p-4  ">
      {/* Left Section: Image */}
      <div className="relative w-full lg:w-1/2">
        <div className="bg-teal-300 rounded-tl-[100px] rounded-br-[100px] overflow-hidden p-4">
          <img
            src={aboutimg}
            alt="Fashion"
            className="rounded-tl-[100px] rounded-br-[100px] object-cover"
          />
        </div>
        <div className="absolute w-[320px] bottom-4 left-10   bg-white shadow-lg p-4 rounded-lg">
          {/* <FaFireFlameSimple className='mt-1'/> */}
         <FaQuoteLeft className="text-teal-500 text-xl -mt-2 mx-auto " /> 
          <p className="text-sm text-gray-700 font-medium">
            Discover fashion that speaks to your style. Elevate your wardrobe
            with exclusive collections!
          </p>
        </div>
      </div>

      {/* Right Section: Content */}
      <div className="w-full lg:w-1/2">
        <h4 className="text-teal-500 font-semibold text-lg">
          Unveiling Our Journey
        </h4>
        <h2 className="text-gray-900 font-bold text-3xl md:text-4xl mt-2">
          Our Commitment to Crafting Individualized Fashion Experiences
        </h2>
        <p className="text-gray-600 text-base mt-4 leading-relaxed">
          Discover the essence of style, where each piece is crafted with care
          and precision. We bring fashion that speaks to individuality and
          quality. From the latest trends to timeless classics, we are
          dedicated to elevating your wardrobe with exceptional designs that
          fit every occasion, personality, and season, making fashion a true
          expression of self.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="text-center bg-gray-100 p-4 rounded-lg">
            <h3 className="text-gray-900 text-2xl font-bold">99k+</h3>
            <p className="text-gray-500 text-sm">Satisfied Customers</p>
          </div>
          <div className="text-center bg-gray-100 p-4 rounded-lg">
            <h3 className="text-gray-900 text-2xl font-bold">12k+</h3>
            <p className="text-gray-500 text-sm">Exclusive Products</p>
          </div>
          <div className="text-center bg-gray-100 p-4 rounded-lg">
            <h3 className="text-gray-900 text-2xl font-bold">5k+</h3>
            <p className="text-gray-500 text-sm">New Products</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer /> 

  </>

  )
}

export default About