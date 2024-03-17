import React, { useState } from 'react';
import axios from 'axios';
import Validation from '../components/SignInValidation';
import '../css/Signin.css';

const SignIn = ({ switchView, setUser }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    username: '',
    birth: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    const formErrors = Validation(userData);
    if (Object.keys(formErrors).length !== 0) {
      setErrors(formErrors);
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/admin/add', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Response from backend:', response);
  
      if (response.status === 200 && response.data.token) {
        localStorage.setItem('token', response.data.token);
        setUser(response.data); 
        switchView('Home');
      } else {
        console.error('Error during Sign In:', response.data.message);
      }
    } catch (error) {
      console.error('Error during Sign In:', error);
    }
  };

  return (
    <div className='signin-page'>
      <div className='signin-box'>
        <h2>Sign In</h2>
        <form className='big-div' onSubmit={handleSignIn}>
          <div className="user-box">
            <input
              className='sig-username-input'
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
            />
            <label>Username</label>
            {errors.username && <span>{errors.username}</span>}
          </div>
          <div className="user-box">
            <input
              className='sig-birth-input'
              type="text"
              name="birth"
              value={userData.birth}
              onChange={handleInputChange}
            />
            <label>Date of Birth</label>
            {errors.birth && <span>{errors.birth}</span>}
          </div>
          <div className="user-box">
            <input
              className='sig-email-input'
              type="text"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
            <label>Email</label>
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="user-box">
            <input
              className='sig-pass-input'
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <label>Password</label>
            {errors.password && <span>{errors.password}</span>}
          </div>
          {/* Change <a> tag to <button> */}
          <button type='submit' className='signin-button'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign In
          </button>
        </form>
        <p className='change-view-signin' onClick={() => switchView('Login')}>Have An Account? Log In</p>
      </div>
    </div>
  );
  
};

export default SignIn;
