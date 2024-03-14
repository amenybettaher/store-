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
