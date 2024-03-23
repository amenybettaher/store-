import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

const Sidebar = ({switchView}) => {
  const { dispatch } = useContext(DarkModeContext) || {};
  return (
    <div className="sidebar">
      <div className="top">
  
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">PRINCIPALE</p>
      
          <li onClick={() => switchView('Home')}>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTES</p>
      
         <li onClick={() => switchView('Articles')}>
            <CreditCardIcon className="icon" />
            <span>Produit</span>
          </li>
          <li onClick={() => switchView('Cards')}>
            <CreditCardIcon className="icon" />
            <span>Carts</span>
          </li>
          <li onClick={() => switchView('Users')}>
            <CreditCardIcon className="icon" />
            <span>Utilisateurs</span>
          </li>
          <p className="title">UTILE</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Statistiques</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Paramètres</span>
          </li>
          <p className="title">Administrateur</p>

          <li onClick={() => switchView('Profile')}>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profil</span>
          </li>
          <li onClick={() => switchView('Login')}>
            <ExitToAppIcon className="icon" />
            <span>Se déconnecter</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
