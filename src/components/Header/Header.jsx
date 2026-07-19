import style from "./Header.module.css";

import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.header_container}`}>
        {/* Логотип як посилання на головну */}         
        <Link to="/" className={style.logo}>
          <span className={style.logoTravel}>Travel</span>
          <span className={style.logoTrucks}>Trucks</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
