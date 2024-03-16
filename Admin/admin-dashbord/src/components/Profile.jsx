import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';



const Profile = ({ user ,switchView}) => {
  console.log('User prop received in Profile:', user);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
         <Navbar />
      <Sidebar switchView={switchView} />
      <h2>User Profile</h2>
      <div className="profile-details">
        <div className="profile-info">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Date of Birth:</strong> {user.birth}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        {/* You can add more details here */}
      </div>
    </div>
  );
};

export default Profile;
