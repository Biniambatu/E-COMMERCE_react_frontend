import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductItems from './ProductItems'
import Title from './Title'

const RelatedProducts = ({ Category, SubCategory}) => {

  const { products } = useContext(ShopContext)
  const [ related, setRelated ] = useState([])
  
  useEffect(() => {
    
    if (products.length > 0) {
      let productsCopy = products.slice()
      productsCopy = productsCopy.filter((item) => item.category === Category)
      productsCopy = productsCopy.filter((item) => item.subCategory === SubCategory)
      
      setRelated(productsCopy.slice(0,5))
    }

  },[products])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        { related.map((items, index) => (
                <ProductItems key={index} items={items}/>
              )) }
      </div>      
    </div>
  )
}

export default RelatedProducts