import './App.css';
import Article from './components/Articles'
import Users from './components/Users';
import Home from './components/Home'
import './Style/dark.css'
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="App">
    
    <div className={darkMode ? "app dark" : "app"}>
          <Home/>
          <Users/>
         <Article/> 
    </div>
    </div>

  );
}

export default App;
