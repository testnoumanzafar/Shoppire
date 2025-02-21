
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { BackendUrl } from '../App'
import image from '../assets/Login.png'
import { Link, useNavigate } from 'react-router-dom'
const Login = ( ) => {
  const [email, setemail]=useState('')
  const [password, setpassword]= useState('')
const navigate = useNavigate()
 

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password,'pp');
    
    try {
      const res =await axios.post(BackendUrl + '/api/user/login',{email, password})
      console.log(res);
      console.log(res.data.message);
      
      if(res.data.success){
        localStorage.setItem('userIdFashion', res.data.userId
        )
        localStorage.setItem('tokenshop', res.data.token)
        toast.success(`${res.data.message}`, {autoClose:2000})
        navigate('/')
      }else{
        toast.error(`${res.data.message}`, {autoClose:2000})
      }
       
    } catch (err) {
                console.log(err.message);
                
    } }

  return (
   <>
   <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#f9f9f9]'>
<div className="flex justify-between items-center h-screen  ">
  {/* Left Side: Login Form */}
  <div className=" flex justify-center items-center w-1/2">
    <div>
      <span className=" flex justify-center pt-4 font-[600] text-[34px]">Login</span>
      <form onSubmit={formSubmit} className="flex flex-col items-center mt-8">
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
        <div className='w-[340px] mx-auto mt-7'>
             <button type='submit' className='bg-gray-600 text-center text-white w-[340px] h-9  flex justify-center items-center rounded-[8px] hover:bg-gray-500 text-lg font-medium'>Login</button>
             </div>
             <p className='mt-2'>Don't have account  <Link to='/signup'> <span className='ml-2 font-medium text-blue-800'>Signup</span></Link></p>
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

export default Login