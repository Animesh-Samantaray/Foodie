import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/cart' element = {<Cart />} />
            <Route path='/order' element = {<PlaceOrder />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
