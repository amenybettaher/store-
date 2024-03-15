import React, { useState } from 'react';
import axios from 'axios';
import "../css/Signin.css";
import validation from '../components/SignInValidation';

const SignIn = ({ switchView,setUser}) => {
  const [errors, setErrors] = useState({})
  const [userData, setUserData] = useState({
    username: '',
    birth:'',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    setErrors(validation(userData));
    try {
      const response = await axios.post('http://localhost:8000/admin/add', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200 && response.data.token) {
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user); 
        switchView('Home'); 
      } else {
        console.error('Error during Sign In:', response.data.message);
      }
    } catch (error) {
      console.error('Error during Sign In:', error);
    }
  };
  

  return (
    <div className='sig'>
   
    <form className='signin-container' onSubmit={handleSignIn}>
      <label>
        <p>Username</p>
        <input
          className='signin-name-input'
          type="text"
          name="username"
          placeholder="Enter username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <span>{errors.username && <span>{errors.username}</span>}</span>
      </label>
      <label>
  <p>date de naissance</p>
  <input
    className='signin-date-input'
    type="text"
    name="birth" 
    placeholder="Enter birth"
    value={userData.birth}
    onChange={handleInputChange}
  />
  <span>{errors.birth && <span>{errors.birth}</span>}</span>
</label>

      <label>
        <p>Email</p>
        <input
          className='signin-email-input'
          type="text"
          name="email"
          placeholder="Enter Email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <span>{errors.email && <span>{errors.email}</span>}</span>
      </label>
      <label>
        <p>Password</p>
        <input
          className='signin-pass-input'
          type="password"
          name="password"
          placeholder="*********"
          value={userData.password}
          onChange={handleInputChange}
        />
        <span>{errors.password && <span>{errors.password}</span>}</span>
      </label>
      <button type='submit' className='signin' onClick={() => switchView('Home')}>Sign In</button>
      <button className='change-view-signin' onClick={() => switchView('Login')}>Have An Account? Log In</button>
    </form>
    </div>
  )
}

export default SignIn;