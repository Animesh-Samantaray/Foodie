import React from 'react';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import ExploreMenu from './components/ExploreMenu.jsx';
import { StoreContextProvider } from './context/StoreContext.jsx';

const App = () => {
  return (
    <div className="min-w-[360px] px-2 sm:px-4 md:px-6 lg:px-8">
      <BrowserRouter>
        <StoreContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/menu' element={<ExploreMenu />} />

          </Routes>
        </StoreContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
