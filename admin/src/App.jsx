import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Order from './pages/Order'
import List from './pages/List'
import Add from './pages/Add'
const App = () => {
  return (

      <BrowserRouter >
      <Navbar />
      <Sidebar />

        <Routes>
            <Route path='/list' element={<List />}/>
            <Route path='/add' element={<Add />}/>
            <Route path='/order' element={<Order />}/>
        </Routes>

      </BrowserRouter>
  )
}

export default App
