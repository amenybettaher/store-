import React, { useState } from 'react';
import axios from 'axios';
import validation from '../components/SignInValidation';

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
    const formErrors = validation(userData);
    if (Object.keys(formErrors).length !== 0) {
      setErrors(formErrors);
      return; // Don't proceed with sign-in if there are validation errors
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
        // Make sure to access the correct user data from the response
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
    <div className='log'>
      <form className='big-div' onSubmit={handleSignIn}>
        <label>
          Username:
          <input
           className='lgoin-username-input'
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </label>
        <label>
          Date of Birth:
          <input
           className='lgoin-birth-input'
            type="text"
            name="birth"
            value={userData.birth}
            onChange={handleInputChange}
          />
          {errors.birth && <span>{errors.birth}</span>}
        </label>
        <label>
          Email:
          <input
           className='lgoin-email-input'
            type="text"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Password:
          <input
           className='lgoin-pass-input'
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </label>
        <button type="submit"  className='login-button'>Sign In</button>
        <button className='change-view-signin' onClick={() => switchView('Login')}>Have An Account? Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
