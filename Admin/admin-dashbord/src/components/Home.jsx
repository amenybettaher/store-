<<<<<<< HEAD
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
=======
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Home = ({switchView}) => {
  return (
    <div>
      
      <Navbar />
      <Sidebar switchView={switchView}/>
    </div>
  );
};

export default Home;
>>>>>>> df5ddae4ecf13a9eec67674c038410f92ec3fc44
