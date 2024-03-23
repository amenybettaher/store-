import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";
import { FaStarAndCrescent } from "react-icons/fa";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext) || {};

  return (
    <div className="navbar">
      <div className="wrapper">
        <div id="echrili">E<FaStarAndCrescent />HRiLi</div>
        <div className="search">
          <input type="text" placeholder="Recherche..." /> 

        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
