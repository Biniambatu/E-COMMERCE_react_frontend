import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import ShopContextProvider from './Context/ShopContext.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopContextProvider>
      <Router>
        <App />
      </Router>
    </ShopContextProvider>
  </StrictMode>,
)
