

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CustomCard from './Cards';

const Home = ({switchView}) => {
  return (
    <div>
      
      <Navbar />
      <CustomCard/>
      <Sidebar switchView={switchView}/>
    </div>
  );
};

export default Home;



















/*import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Card } from 'react-native-elements';

const Home = ({switchView}) => {
  return (
    <div>
      
      <Navbar />
      <Sidebar switchView={switchView}/>
    </div>
  );
};

export default Home;
*/