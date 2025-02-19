import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductItems from './ProductItems'
import Title from './Title'

const BestSeller = () => {

  const { products }:any = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestproduct = products.filter((item:any) => item.bestseller)
    setBestSeller(bestproduct.slice(0,5))
  },[products])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia, dicta iure .
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {bestSeller.map((items,index) => (
              <ProductItems key={index} items={items}/> 
           ))}
      </div>

    </div>
  )
}

export default BestSeller