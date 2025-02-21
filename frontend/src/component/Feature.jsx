
import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { HiArrowUturnLeft } from 'react-icons/hi2'
import { MdOutlinePayment } from 'react-icons/md'

const Feature = () => {

    const features = [
        {
          icon: <HiArrowUturnLeft />, // Replace with an actual icon or use an image if needed
          title: "Easy Return",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur dolorem alias illum perspiciatis animi?",
          color: "text-yellow-500",
        },
        {
          icon: <CiDeliveryTruck />,
          title: "Fast Delivery",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur dolorem alias illum perspiciatis animi?",
          color: "text-blue-500",
        },
        {
          icon: <MdOutlinePayment />,
          title: "Secure Payment",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur dolorem alias illum perspiciatis animi?",
          color: "text-red-500",
        },]


  return (
    <>
    <div className='mt-20'>

    <h1 className="text-center mx-auto text-3xl font-semibold border-b-4 border-teal-500  w-44">Our Feature</h1>
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg"
          >
            <div
              className={`text-4xl mb-4 ${feature.color}`}
            >
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Feature