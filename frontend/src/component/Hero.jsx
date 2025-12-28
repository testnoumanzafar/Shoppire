import React from 'react';
import modernImage from '../assets/herobg.png';
import { FaFireFlameSimple } from 'react-icons/fa6';

const Hero = ({ scrollToSection }) => {
  return (
    <div className="container mx-auto px-4 py-12 rounded-lg">
      <div className="flex flex-col  md:flex-row items-center justify-between bg-gray-200 rounded-lg overflow-hidden">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl mb-4 text-teal-500 font-medium flex justify-center md:justify-start items-center">
            Modern Collection <FaFireFlameSimple className="ml-2 mt-1" />
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Evaluate Your Look With Every Click Shop Today.
          </h1>
          <p className="text-base mb-6">
            Discover our carefully curated collection of trendy apparel designed for every occasion and personality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button onClick={() => scrollToSection('newArrival')}
 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Latest Product
            </button>
            <button onClick={() => scrollToSection('popular')} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
              Popular Product
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 p-6 mt-6 md:mt-0">
          <img
            src={modernImage}
            alt="Modern Collection Image"
            className="w-full  rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
