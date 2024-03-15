import React, { useState } from 'react';
import '../css/Login.css';
import Validation from '../components/LoginValidation';
import axios from 'axios';

const Login = ({ switchView, setUser }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  
  const handleInput = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrors(Validation(loginData));

    try {
      const response = await axios.post('http://localhost:8000/admin/login', loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user); // Set user data
        switchView('Home');
      }
    } catch (error) {
      console.error('Error during Login:', error);
    }
  };

  return (
    <div className='log'>
      <form className='big-div' onSubmit={handleLogin}>
        <label>
          <p>Email</p>
          <input
            className='lgoin-email-input'
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleInput}
          />
          <span>{errors.email && <span>{errors.email}</span>}</span>
        </label>
        <label>
          <p>Password</p>
          <input
            className='lgoin-pass-input'
            type="password"
            name="password"
            placeholder="*********"
            onChange={handleInput}
          />
          <span>{errors.password && <span>{errors.password}</span>}</span>
        </label>
        <button type='submit' className='login-button'>Log In</button>
        <button onClick={() => switchView('SignIn')} className='change-view-Home'>
          Don't Have An Account? Sign In Here
        </button>
      </form>
    </div>
  );
};

export default Login;
