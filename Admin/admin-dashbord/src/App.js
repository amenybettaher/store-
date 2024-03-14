import React, { useState } from 'react';
import './App.css';
import Article from './components/Articles';
import Users from './components/Users';
import Home from './components/Home';
import './Style/dark.css';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('Home');

  const switchView = (view) => {
    setView(view);
    setMenuView(false);
  };

  return (
    <div className="App">
      <div className={darkMode ? 'app dark' : 'app'}>
        <div className={`container ${menuView ? 'active' : ''}`}>
          {view === 'Home' && <Home switchView={switchView} />}
          {view === 'Articles' && <Article switchView={switchView} />}
          {view === 'Users' && <Users switchView={switchView} />}
        </div>
      </div>
    </div>
  );
}

export default App;
