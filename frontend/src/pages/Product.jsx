import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaHeart, FaStar, FaTruck } from 'react-icons/fa';
import { FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6';
import { TbShoppingBag } from 'react-icons/tb';
import Footer from '../component/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../component/reduxtoolkit/slice/addcart';
import { toast } from 'react-toastify';

const Product = () => {
  const navigate = useNavigate();
  const showproud = useSelector((state) => state.allProducts.Products);
  const dispatch = useDispatch();
  const { product_id } = useParams();
  const [image, setImage] = useState('');
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const findProduct = showproud.products.find((prod) => prod._id === product_id);
    if (findProduct) {
      setImage(findProduct.image[0]);
      setProduct(findProduct);

      const related = showproud.products.filter(
        (item) => item.category === findProduct.category && item._id !== product_id
      );
      setRelatedProducts(related.slice(0, 4));
    }
  }, [product_id, showproud.products]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const Send = async () => {
    if (!selectedSize) {
      toast.error('Please select a size', { autoClose: 2000 });
      return;
    } else if (localStorage.getItem('tokenshop') === null) {
      toast.error('Please login to add product in cart', { autoClose: 2000 });
      navigate('/login');
    } else {
      const productWithSize = { ...product, sizes: [selectedSize] };
      dispatch(addCart(productWithSize));
      toast.success('Product added to cart!', { autoClose: 2000 });
    }
  };

  return (
    <>
      <div className='flex justify-around my-9 mx-16 bg-white rounded-lg shadow-lg p-8'>
        <div className='w-1/2'>
          <div className='flex gap-6 px-5'>
            <div className='flex flex-col gap-3'>
              {product.image.map((imgSrc, index) => (
                <img
                  src={imgSrc}
                  alt='product img'
                  key={index}
                  onClick={() => setImage(imgSrc)}
                  className='cursor-pointer w-[89px] h-[89px] rounded-lg hover:opacity-80 transition-opacity'
                />
              ))}
            </div>
            <div>
              <img src={image} alt='product img' className='rounded-md w-full h-auto' />
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <h1 className='font-bold mt-1.5 text-3xl text-gray-800'>{product.name}</h1>
          <div className='flex gap-1 font-medium text-lg mt-2.5 text-gray-700'>
            ${product.price}
            <FaStar className='text-yellow-400 mt-1' />
            <FaStar className='text-yellow-400 mt-1' />
            <FaStar className='text-yellow-400 mt-1' />
            <FaStar className='text-yellow-400 mt-1' />
            <FaStarHalfStroke className='text-yellow-400 mt-1' />
          </div>
          <p className='mt-3 text-gray-600'>{product.description}</p>
          <div className='flex gap-2 mt-4'>
            {product.sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => handleSizeClick(size)}
                className={`py-2 px-4 border rounded-md transition-colors ${
                  selectedSize === size
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className='flex gap-4 mt-5'>
            <button
              className='bg-teal-600 hover:bg-teal-700 py-2 w-1/2 text-white flex justify-center items-center rounded-md transition-colors'
              onClick={Send}
            >
              Add to cart <TbShoppingBag className='mt-1 ms-2' />
            </button>
            <button className='bg-gray-100 hover:bg-gray-200 rounded-md w-10 h-10 flex justify-center items-center transition-colors'>
              <FaHeart className='text-gray-700' />
            </button>
          </div>
          <div className='flex gap-2 mt-4 text-gray-700'>
            <FaTruckFast className='w-6 h-6 text-indigo-600' />
            <span>Free Delivery on order over $300</span>
          </div>
          <div className='flex flex-col mt-4 text-gray-600'>
            <p>Authenticity You Can Trust</p>
            <p>Enjoy Cash on Delivery for Your Convenience</p>
            <p>Easy Return and Exchange within 7 Days</p>
          </div>
        </div>
      </div>

      <div className='mx-16 mt-16'>
        <h2 className='font-bold text-2xl text-gray-800'>Related Products</h2>
        <div className='flex gap-4 mt-4'>
          {relatedProducts.map((item, index) => (
            <div key={index} className='p-2 w-[310px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <Link to={`/product/${item._id}`}>
                <img src={item.image[0]} alt='related product' className='rounded-t-lg w-full h-80 object-cover' />
              </Link>
              <div className='px-2 py-3'>
                <p className='text-lg font-bold text-gray-800'>{item.name}</p>
                <div className='flex justify-between items-center mt-1'>
                  <p className='text-sm text-gray-600 font-bold'>{item.category}</p>
                  <p className='text-lg text-teal-600 font-medium'>${item.price}</p>
                </div>
                <p className='text-sm text-gray-600 mt-1 pb-2 h-16'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-16 mx-8'>
        <Footer />
      </div>
    </>
  );
};

export default Product;