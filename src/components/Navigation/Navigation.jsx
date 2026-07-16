import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";

const makeLinkClass = ({ isActive}) => clsx(styles.link, isActive && styles.active)

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/" className={makeLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/catalog" className={makeLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation