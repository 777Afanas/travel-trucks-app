import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";

const makeLinkClass = ({ isActive}) => clsx(styles.link, isActive && styles.active)

const Navigation = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink to="/" className={makeLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeLinkClass}>
          Movies
        </NavLink>
      </nav>
      <hr style={{ width: "100%" }} />
    </header>     
  )
}

export default Navigation