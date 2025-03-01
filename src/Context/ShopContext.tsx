import { createContext, use, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext()

const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;
  const [ search, setSearch ] = useState('')
  const [ showSearch, setShowSearch ] = useState(false)
  const [ cartItems, setCartItems ] = useState({})

  const addToCart = async(itemId, size) => {
     
    let cartData = structuredClone(cartItems)
    
    if (!size) {
      toast.error('Select Product Size')
      return
    }


    if(cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else {
         cartData[itemId][size] = 1; 
      }
    }
    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData)
    toast.success("🛒 Item added to cart!", {
      position: "top-right",
      autoClose: 1000, // Closes faster
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });
  } 

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {  
      for (const size in cartItems[itemId]) {  
        if (cartItems[itemId][size] > 0) { 
          totalCount += cartItems[itemId][size];
        }
      }
    } 

    return totalCount;
};


  const updateQuantity =  (itemId, size, quantity) => {

    let cartData = structuredClone(cartItems)

    cartData[itemId][size] = quantity

    setCartItems(cartData)

  }

  const getCartAmount = () => {
    
    let totalAmount = 0;
    for (const items in cartItems){
      let itemInfo = products.find((product) => product._id === items)
      for (const item in cartItems[items]){
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo?.price * cartItems[items][item]
        }
      }
    } 
    return totalAmount 
  }  
  const value = {
    products, 
    currency, 
    delivery_fee,
    search, setSearch,
    showSearch, setShowSearch,
    cartItems, addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount
  }

  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )

}

export default ShopContextProvider;