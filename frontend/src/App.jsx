 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Popular from './component/Popular'
import { toast, ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'
import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'
// import Orders from './pages/Orders'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Payment from './pages/Payment'
export const BackendUrl=import.meta.env.VITE_BACKEND_URL
function App() {

  return (
    <>
     <BrowserRouter>
     <ToastContainer/>
     <div className='overflow-hidden bg-[#f9f9f9] text-[#404040]'>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:product_id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/place-order" element={<Placeorder />} />
      {/* <Route path="/order" element={<Orders />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<Payment />} />
      {/* <Route path="/popular" element={<Popular />} /> */}
     </Routes>
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
