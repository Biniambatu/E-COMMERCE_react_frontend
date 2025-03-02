
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext)
  const [ productData, setProductData ] = useState(false)
  const [ Image, setImage ] = useState('')
  const [ size, setSize ] = useState('')

 useEffect(() => {
  const fetchProductData = async () => {
    products.map((item) => {
       if (item._id === productId) {
         setProductData(item)
         setImage(item.image[0])
         return null
       }
    })
   }
    fetchProductData()
  },[ productId, products ])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      {/* ----------- product data ----------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
       
        {/* ----------- product image ----------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
             {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
             }
          </div>
          <div className='w-full sm:w-[80%]'>
             <img src={Image} className='w-full h-auto ' alt="" />
          </div>
        </div>

        {/* ---------- product info ---------- */}
        <div className='flex-1'>
           <h1 className='font-medium text-2xl mt-1'>{productData.name}</h1>
           <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_dull_icon} alt="" className='w-3 5'/>
              <p className='pl-2'>(122)</p>
           </div>
           <p className='mt-3 text-3xl font-medium'>{currency}{productData.price}</p>
           <p className='mt-3 text-gray-500 md:w-4/5'>{productData.description}</p>
           <div className='flex flex-col gap-4 my-4'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index) => (
                   <button
                      onClick={() => setSize(item)} key={index}
                        className={`px-2 py-1 font-semibold text-gray-700 active:bg-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none transition transform hover:scale-105 duration-300
                        ${size === item ? 'border-2 border-orange-500  shadow-md' : ''}   `} >  {item}</button>  ))}            
              </div>
           </div>              
           <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
           <hr className='mt-4 sm:w-4/5'/>
           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Origial product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
           </div>
        </div>
      </div>

      {/* ------------- descriptionabd review section -------------- */}
      <div className='mt-20'> 
        <div className='flex'>
          <b className='border px-5 py-3 text-sm' >Description</b>
          <b className='border px-5 py-3 text-sm' >Reviews (122)</b>
        </div> 
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>An e-commerce website is an online platform Lorem ipsum dolor, sit amet consectetur adipisicing elit. soluta nostrum accusamus amet, doloribus facere voluptates eos iusto excepturi iste non incidunt nulla itaque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias obcaecati impedit quam, voluptate quis exercitationem, soluta nostrum accusamus amet, doloribus facere voluptates eos iusto excepturi iste non incidunt.</p>                        
            <p>E-commerce websites typically display products or Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eos fugit excepturi molestias illum et voluptatibus, ea laudantium pariatur voluptate aspernatur earum ipsam, dignissimos labore soluta sint, magni recusandae minima!</p>
        </div>                
      </div>

      {/* --------------- display related productss ----------- */}
      <RelatedProducts Category={productData.category} SubCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product