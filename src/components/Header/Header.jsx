import style from "./Header.module.css" 

import { Link } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";


const Header = () => {
  return (
      <header className={style.header}>
      <div className={style.header_container}>
        {/* Логотип як посилання на головну */}
        <Link to="/" className={style.logo}>
          Travel<span className={style.logo_dark}>Trucks</span>
        </Link>         
        <Navigation />
      </div>
    </header>
  );
};

export default Header;


