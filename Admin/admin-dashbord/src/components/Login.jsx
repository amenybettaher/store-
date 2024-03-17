import React, { useState } from 'react';
import '../css/Login.css';
import Validation from '../components/LoginValidation';
import axios from 'axios';

const LoginPage = ({ switchView, setUser }) => {
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
    <div className='login-page'> {/* Add the class name for the black background */}
      <div className='login-box'>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className='login-form'>
          <div className="user-box">
            <input
              type="text"
              name="email"
              required=""
              value={loginData.email}
              onChange={handleInput}
            />
            <label>Email</label>
            <span>{errors.email && <span className="error">{errors.email}</span>}</span>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required=""
              value={loginData.password}
              onChange={handleInput}
            />
            <label>Password</label>
            <span>{errors.password && <span className="error">{errors.password}</span>}</span>
          </div>
          <a type='submit'onClick={handleLogin}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Log IN
          </a>
        </form>
        <button onClick={() => switchView('SignIn')} className='change-view-Home'>
          Don't Have An Account? Sign In Here
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
