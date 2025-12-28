
import React, { useEffect, useRef } from 'react'

import Hero from '../component/Hero';
import Newarrival from '../component/Newarrival';
import Footer from '../component/Footer';
import Popular from '../component/Popular';
import Feature from '../component/Feature';
import axios from 'axios';
import { BackendUrl } from '../App';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addProduct } from '../component/reduxtoolkit/slice/products';
const Home = () => {
let dispatch = useDispatch();

const newArrivalRef = useRef(null);
  const popularRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BackendUrl + "/api/product/list");
        // console.log(res.data);
        if(res){
          dispatch(addProduct(res.data));
        }
          
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
  
    fetchData();
    // return <div>Products Loaded</div>;
  }, []);
  
    const scrollToSection = (section) => {
    if (section === 'newArrival' && newArrivalRef.current) {
      newArrivalRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'popular' && popularRef.current) {
      popularRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
   <>
  <Hero scrollToSection={scrollToSection}/>
  <div ref={newArrivalRef}>
<Newarrival/>
  </div>
<div ref={popularRef}>
<Popular/>
</div>
<Feature />
<Footer  />
   </>
  )
}

export default Home