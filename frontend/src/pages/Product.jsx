
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaHeart, FaStar, FaTruck } from 'react-icons/fa';
import { FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6';
import { TbShoppingBag } from 'react-icons/tb';
import Footer from '../component/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../component/reduxtoolkit/slice/addcart';
import { toast } from 'react-toastify';

const Product = () => {
const navigate= useNavigate()
  const showproud= useSelector((state)=>state.allProducts.Products)
  const dispatch = useDispatch();
  const {product_id}= useParams();
  const[image, setimage]=useState('');
  const[product, setproduct]=useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

 
    useEffect(() => {
      const findProduct = showproud.products.find((prod) => prod._id === product_id);
      if (findProduct) {
        setimage(findProduct.image[0]);
        setproduct(findProduct);

        const related = showproud.products.filter(
          (item) => item.category === findProduct.category && item._id !== product_id
        );
        setRelatedProducts(related.slice(0, 4));
      }
    }, [product_id,showproud.products]);

    if (!product) {
      return <div>Product not found</div>;
    }

    const handleSizeClick = (size) => {
      setSelectedSize(size);
    };

const Send = async ()=>{
  console.log('send');
  if (!selectedSize ) {
    toast.error('Please select a size',{autoClose:2000});

    return;
  }else if( localStorage.getItem('tokenshop') === null){
    toast.error('Please login to add product in cart',{autoClose:2000});
    navigate('/login')
  }
     else{
      const productWithSize = { ...product,  sizes: [selectedSize], };
      dispatch(addCart(productWithSize));
      toast.success("Product added to cart!", {autoClose:2000})
  
  }
  
}
  return (
    <>
     <div className='flex justify-around  my-9 mx-16 bg-white'>
      <div className='w-1/2  '>
      <div className='flex  gap-6 px-5'>

      
      <div className='flex flex-col gap-3  '>
      {product.image.map((imgSrc, index) => (
            <img
              src={imgSrc}
              alt='product img'
              key={index}
              onClick={() => setimage(imgSrc)} // Change main image on click
              className="cursor-pointer w-[89px] h-[89px] rounded-lg"
            />
          ))}
      </div>
      <div> <img src={image}  alt="product img" className='rounded-md' /></div>
      </div>


      </div>
      <div className='w-1/2  '>
          <h1 className='font-bold mt-1.5 text-2xl'>{product.name}</h1>
          <div className='flex gap-1 font-medium text-lg mt-2.5'>${product.price}
             <FaStar className='text-teal-500 mt-1' />
             <FaStar className='text-teal-500 mt-1' />
             <FaStar className='text-teal-500 mt-1' />
             <FaStar className='text-teal-500 mt-1' />
             <FaStarHalfStroke className='text-teal-500 mt-1' />
          </div>
          <p className='mt-3   '>{product.description}</p>
          <div className="flex gap-2 mt-4">
        {product.sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => handleSizeClick(size)}
            className={`py-2 px-4 border rounded-md ${
              selectedSize === size ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {size}
          </button>
        ))}
      </div>

                    <div className='flex gap-4 mt-5'>
          <button className='bg-gray-700 hover:bg-gray-600 py-1.5 w-1/2 text-white flex text-center justify-center rounded-md' onClick={Send}>Add to cart <TbShoppingBag className='mt-1 ms-2'/></button>
          <button className='bg-gray-200 rounded-md w-9 flex justify-center items-center'><FaHeart/></button>
          </div>
          <div className='flex gap-2 mt-4'><FaTruckFast className=' w-6 h-6'/> <span>Free Delivery on order over $300</span></div>
          <div className='flex flex-col  mt-4'>
            <p>Authenticy Can You Trust</p>
            <p>Enoye Cash on Deleviery for Your Convenience</p>
            <p>Easy Return and Exchange with in 7Days</p>
          </div>
      </div>
     </div>

     <div className='mx-16 mt-16'>
      <h2 className='font-bold text-xl'>Related Product</h2>
      <div className='flex'>

        {relatedProducts.map((item, index) => (
          <div key={index} className=" p-2  w-[310px]   ">  
          <Link to={`/product/${item._id}`}>
           <img src={item.image[0]} alt="new arrival" />
           </Link>
            <div className='bg-white shadow-md px-2 rounded-b-lg '>
            <p className="text-lg font-bold">{item.name}</p>
            <div className='flex justify-between items-center mt-1  '>
            <p className="text-sm text-gray-600 font-bold">{item.category}</p>
            <p className="text-lg text-teal-500 font-medium">${item.price}</p>
            </div>
              
            <p className="text-sm text-gray-600 mt-1 pb-2 h-16">{item.description}</p>
          </div>
            </div>
         
        ))}
      </div>

     </div>
     <div className='mt-16 mx-8'> 

    <Footer/>
     </div>
    </>
  )
}

export default Product