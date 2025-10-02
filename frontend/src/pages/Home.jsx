import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import ExploreMenu from '../components/ExploreMenu.jsx'
const Home = () => {
  const [category,setCategory] = useState('All')
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home
