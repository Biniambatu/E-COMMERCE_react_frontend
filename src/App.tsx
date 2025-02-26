import React from 'react'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App