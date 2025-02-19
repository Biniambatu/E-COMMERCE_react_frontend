import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import Title from "./Title"
import ProductItems from "./ProductItems"

const LatestCollection = () => {

  const { products }:any = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])
  
  useEffect(() => {
    setLatestProducts(products.slice(0,10))
  },[])

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Beatae numquam similique rem maiores. 
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProducts.map((items, index) => (
            <ProductItems key={index} items={items}/>
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection