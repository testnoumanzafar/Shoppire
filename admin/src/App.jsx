 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Add from './pages/Add'
import Order from './pages/Order'
// import List from './pages/List'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Login from './Components/Login'
import { useEffect, useState } from 'react'
import List from './pages/List'
import { ToastContainer, toast } from 'react-toastify';
//  
export const BackendUrl=import.meta.env.VITE_BACKEND_URL
// process.env.REACT_APP_BACKEND_URL

function App() {
  
  // const [token, setToken]=useState(localStorage.getItem('token') || "")
  //    useEffect(() => {
  //     localStorage.setItem('token', token)
  //    }, [token])


  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Function to logout after 10 minutes
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token_expiry"); // Remove token expiry
    setToken(""); // Trigger re-render and go to login page
  };

  // Function to check token expiry
  const checkTokenExpiry = () => {
    const expiryTime = localStorage.getItem("token_expiry");
    if (expiryTime && Date.now() > Number(expiryTime)) {
      logout();
    }
  };

  // Store token and expiry time in localStorage
  useEffect(() => {
    if (token) {
      const expiryTime = Date.now() + 5 * 60 * 1000; // 10 minutes from now
      localStorage.setItem("token", token);
      localStorage.setItem("token_expiry", expiryTime);
    }
  }, [token]);

  // Check token expiry every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      checkTokenExpiry();
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
















  return (
    <>
    <ToastContainer />
    { token === "" ? (
      <Login token={setToken}/>

    ):(
     <BrowserRouter>

 <div>
        <Header/>
<div className='flex mt-2 bg-slate-100'>
     <Sidebar tokenremove={setToken}/>
     <Routes>
      <Route path='/' element={<Add  token={token} />}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/list' element={<List token={token}/>}/>
     </Routes>
</div>

 </div>

     </BrowserRouter> 
    )}
    </>
  )
}

export default App
