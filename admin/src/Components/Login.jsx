import axios from 'axios'
import React, { useState } from 'react'
import { BackendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({token}) => {
  const [email, setemail]=useState('')
  const [password, setpassword]= useState('')

 

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password,'pp');
    
    try {
      const res =await axios.post(BackendUrl + '/api/user/admin',{email, password})
      console.log(res.data.message);
      
      if (res.data.success) {
        token(res.data.token);
        toast.success(res.data.message);
    } else {
        toast.error(res.data.message); // Display "Invalid credentials" if received from API
    }

       
    } catch (err) {
                console.log(err.message);
                toast.error(err.message)
    } }

  return (
   <>
<div className="flex justify-between items-center h-screen ">
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
        <div className='w-[340px] mx-auto mt-8'>
             <button type='submit' className='bg-gray-600 text-center text-white w-[340px] h-9  flex justify-center items-center rounded-[8px] hover:bg-gray-500 text-lg font-medium'>Login</button>
             </div>
      </form>
    </div>
  </div>

  {/* Right Side: Image */}
  <div className="w-1/2">
    <img
      src="Login.png"
      alt="login"
      className="h-screen w-full object-cover"
    />
  </div>
</div>

   </>
  )
}

export default Login