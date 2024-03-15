import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import CustomCard from './Cards'

 const Home = () => {
  return (
    <div>
      <CustomCard/>
        <Navbar/>
        <Sidebar/>
    </div>
  )
}



export default Home