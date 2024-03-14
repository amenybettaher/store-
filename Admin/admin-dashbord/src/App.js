
import './App.css';
// import Article from './components/Articles'
import Home from './components/Home'
import './Style/dark.css'
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
   {/* <Article/>   */}
   <Home/>
    </div>
  );
}

export default App;
