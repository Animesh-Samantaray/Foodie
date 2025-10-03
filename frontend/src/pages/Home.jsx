import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import ExploreMenu from '../components/ExploreMenu.jsx'
import FoodDisplay from '../components/FoodDisplay.jsx'
import Footer from '../components/Footer.jsx'
const Home = () => {
  const [category,setCategory] = useState('All')
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <Footer />
    </div>
  )
}

export default Home
