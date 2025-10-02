import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import StoreContextProvider from './context/StoreContext.jsx';
const App = () => {
  return (
    <div className='px-[10px]'>
      
      <BrowserRouter>
      <StoreContextProvider>
      <Navbar />
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/cart' element = {<Cart />} />
            <Route path='/order' element = {<PlaceOrder />} />
        </Routes>
        </StoreContextProvider>
      </BrowserRouter>


    </div>
  )
}

export default App
