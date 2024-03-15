import React, { useState, useEffect } from 'react';
import '../css/Login.css';
import Validation from '../components/LoginValidation';
// import Profile from './Profile.jsx';
import axios from 'axios';

const Login = ({ switchView ,setUser }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); 


  useEffect(() => {
    console.log('isLoggedIn-from-login', isLoggedIn);

    if (isLoggedIn && loginData.email) {
      fetchUserData(loginData.email);
      switchView('Home');
      const storedIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
      setLoggedIn(storedIsLoggedIn || false);
    }
  }, [isLoggedIn, loginData.email]);

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
        setLoggedIn(true);
        
        switchView('Home'); 
      }
    } catch (error) {
      console.error('Error during Login:', error);
    }
  };
  

  const fetchUserData = async (email) => {
    console.log('Fetching user data for email:', email);

    try {
      const response = await axios.get(`http://localhost:8000/admin/${email}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
      });

      const userData = response.data;
      setUserData(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      console.log('userData:', userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  console.log('userData-from-the-end-of-login', userData);


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
                              <button type='submit' className='login-button' onClick={() => switchView('Home')}>
                                    Log In
                              </button>
                              <button onClick={() => switchView('SignIn')} className='change-view-Home'>
                                    Don't Have An Account? Sign In Here
                              </button>
                        </form>
              
            </div>
      );
};

export default Login;