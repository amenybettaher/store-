import React, { useState, useContext } from 'react';
import './App.css';
import Article from './components/Articles';
import Users from './components/Users';
import Home from './components/Home';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import { DarkModeContext } from './context/darkModeContext';
import './Style/dark.css';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [view, setView] = useState('SignIn');
  const [user, setUser] = useState(null);

  const switchView = (newView, userData = null) => {
    setView(newView);
    if (userData) setUser(userData);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className={`container ${view !== 'SignIn' ? 'active' : ''}`}>
        {view === 'SignIn' && <SignIn switchView={switchView} setUser={setUser} />}
        {view === 'Login' && <Login switchView={switchView} setUser={setUser} />}
        {view === 'Home' && <Home switchView={switchView} />}
        {view === 'Articles' && <Article switchView={switchView} />}
        {view === 'Users' && <Users switchView={switchView} />}
        {view === 'Profile' && <Profile switchView={switchView} user={user} />}
      </div>
    </div>
  );
}

export default App;

