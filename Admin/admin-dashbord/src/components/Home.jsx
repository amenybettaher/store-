import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import UserIcon from '@mui/icons-material/Group';
import GrowthIcon from '@mui/icons-material/ShowChart';
import OrderIcon from '@mui/icons-material/ShoppingCart';
import { FaUserPlus, FaDollarSign } from 'react-icons/fa';

const StatCard = ({ title, value, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{
        boxShadow: 1,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
        backgroundColor: '#1e88e5', // Example blue background color
        color: '#ffffff', // White text for contrast
        m: 1, // margin
        p: 1, // padding
        borderRadius: 2, // border radius
      }}>
        <CardContent>
          <Typography sx={{ fontSize: '0.875rem', color: '#ffffff' }} gutterBottom>
            {title}
          </Typography>
          <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffffff' }}>
            {value}
          </Typography>
          <Typography component="div" sx={{ fontSize: '3rem', color: '#ffffff' }}>
            {icon}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Dashboard = () => {
  return (
    <Grid container spacing={2}  marginTop={-100} marginLeft={9} padding={10}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Gains" value="63,448.78 DT" icon={<DownloadIcon />} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Clients" value="39,354" icon={<UserIcon />} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Croissance" value="+4.3%" icon={<GrowthIcon />} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Ordres" value="42,339" icon={<OrderIcon />} />
      </Grid>
      {/* New statistics */}
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Nouveaux visiteurs" value="1,234" icon={<FaUserPlus />} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Ventes totales" value="93,234 DT" icon={<FaDollarSign />} />
      </Grid>
    </Grid>
  );
};

const Home = ({ switchView }) => {
  return (
    <div>
      <Navbar />
      <Sidebar switchView={switchView} />
      {/* Dashboard with StatCards */}
      <Dashboard />
    </div>
  );
};

export default Home;
