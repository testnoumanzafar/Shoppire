
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { BackendUrl } from '../App'
import image from '../assets/Login.png'
import { Navigate, useNavigate } from 'react-router-dom'
const Signup= () => {
  const [email, setemail]=useState('')
  const [password, setpassword]= useState('')
 const[name, setName]=useState('')
 let navigate = useNavigate()

  const formSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res =await axios.post(BackendUrl + '/api/user/register',{email, password, name})
      console.log(res);
      if(res.data.success){
        toast.success(res.data.message)
        navigate('/login')
      }else{
        toast.error(res.data.message)
      }
       
    } catch (err) {
                console.log(err.message);
            toast.error(err.message)    
    } }

  return (
   <>
     <div className='absolute top-0 left-0 right-0 bottom-0 z-50 bg-[#f9f9f9]'>
<div className="flex justify-between items-center h-screen ">
  
  <div className=" flex justify-center items-center w-1/2">
    <div>
      <span className=" flex justify-center pt-4 font-[600] text-[34px]">Signup</span>
      <form onSubmit={formSubmit} className="flex flex-col items-center mt-8">
      <div className="m-4">
          <label className="block text-lg font-medium">Name</label>
          <input
          placeholder='Enter your name'
          onChange={(e)=>setName(e.target.value)}
            type="text"
            className="w-[340px] h-10 p-2 rounded-[5px] mt-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="m-4">
          <label className="block text-lg font-medium">Email</label>
          <input
          placeholder='Enter your email'
          onChange={(e)=>setemail(e.target.value)}
            type="email"
            className="w-[340px] h-10 p-2 rounded-[5px] mt-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="m-4">
          <label className="block text-lg font-medium">Passsword</label>
          <input
          placeholder='Enter your password'
          onChange={(e)=>setpassword(e.target.value)}
            type="password"
            className="w-[340px] h-10 p-2 rounded-[5px] mt-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className='w-[340px] mx-auto mt-8'>
             <button type='submit' className='bg-gray-600 text-center text-white w-[340px] h-9  flex justify-center items-center rounded-[8px] hover:bg-gray-500 text-lg font-medium'>Signup</button>
             </div>
      </form>
    </div>
  </div>

  {/* Right Side: Image */}
  <div className="w-1/2">
    <img
      src={image}
      alt="login"
      className="h-screen w-full object-cover"
    />
  </div>
</div>
</div>
   </>
  )
}

export default Signup