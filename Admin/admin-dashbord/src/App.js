
import React, { useState, useContext } from 'react';
import './App.css';
import Article from './components/Articles';
import Users from './components/Users';
import Home from './components/Home';
import Login from './components/Login';
import SignIn from './components/SignIn';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [view, setView] = useState('SignIn');

  const switchView = (newView) => {
    setView(newView);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className={`container ${view !== 'SignIn' ? 'active' : ''}`}>
        {view === 'SignIn' && <SignIn switchView={switchView} />}
        {view === 'Login' && <Login switchView={switchView} />}
        {view === 'Home' && <Home switchView={switchView} />}
        {view === 'Articles' && <Article switchView={switchView} />}
        {view === 'Users' && <Users switchView={switchView} />}
      </div>
    </div>
  );
}

export default App;
