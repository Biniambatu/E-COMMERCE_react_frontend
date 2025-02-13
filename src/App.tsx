import React from 'react'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App