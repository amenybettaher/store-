import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { FaUser, FaClipboardList, FaCreditCard } from 'react-icons/fa'; // Icons
import './AdminDashboard.css'; // Custom CSS for styling

const AdminDashboard = ({ switchView }) => {
  // Sample data for statistics (you can replace it with actual data from your backend)
  const articlesCount = 150;
  const usersCount = 50;
  const cardsCount = 30;

  return (
    <div>
      <Navbar />
      <Sidebar switchView={switchView} />
      <div className="admin-dashboard">
        <Grid container spacing={3} justifyContent="center">
          {/* Articles Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="dashboard-card articles-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Articles
                </Typography>
                <div className="card-content">
                  <FaClipboardList className="card-icon" />
                  <Typography variant="h4">{articlesCount}</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {/* Users Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="dashboard-card users-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Users
                </Typography>
                <div className="card-content">
                  <FaUser className="card-icon" />
                  <Typography variant="h4">{usersCount}</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {/* Cards Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="dashboard-card cards-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Cards
                </Typography>
                <div className="card-content">
                  <FaCreditCard className="card-icon" />
                  <Typography variant="h4">{cardsCount}</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AdminDashboard;
