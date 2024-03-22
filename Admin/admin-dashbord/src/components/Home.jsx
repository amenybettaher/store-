import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FaUsers, FaCreditCard, FaNewspaper } from 'react-icons/fa';
import DailyUsageChart from './DailyUsageChart'
import './home.css'

const Card = ({ icon, title, count }) => {
  return (
    <div className="card">
      {icon}
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
};

const Home = ({ switchView }) => {
  // Static counts for demonstration
  const usersCount = 5000;
  const cardsCount = 5000;
  const articlesCount = 1000;

  return (
    <div className="home">
      <Navbar />
      <Sidebar switchView={switchView}/>
      <div className="cards">
        <Card icon={<FaUsers />} title="Users" count={usersCount.toLocaleString()} />
        <Card icon={<FaCreditCard />} title="Cards" count={cardsCount.toLocaleString()} />
        <Card icon={<FaNewspaper />} title="Articles" count={articlesCount.toLocaleString()} />
        
      </div>
      <DailyUsageChart />
    </div>
  );
};

export default Home;




