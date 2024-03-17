// Profile.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../css/profil.css';

const Profile = ({ user, switchView }) => {
  // State for avatar image URL
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);

  // Function to handle avatar image upload
  const handleAvatarUpload = (event) => {
    const uploadedImageUrl = URL.createObjectURL(event.target.files[0]);
    setAvatarUrl(uploadedImageUrl);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Sidebar switchView={switchView} />

      <div className="profile-card">
        <div className="profile-avatar">
          {/* Display user's avatar image */}
          <img src={avatarUrl} alt="User Avatar" />
          {/* Input for uploading a new avatar image */}
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
          />
        </div>
        <div className="profile-info">
          <h2>{user.username}</h2>
          <p>Date of Birth: {user.birth}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
