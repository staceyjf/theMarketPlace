import { NavLink } from "react-router-dom";

import Cart_icon from "../../assets/NavBar/cart-outline.png";
import Search_icon from "../../assets/NavBar/search-outline.png";
import User_icon from "../../assets/NavBar/user-outline.png";
import styles from "./Navbar.module.scss";

function Navbar() {
  // apply active styling to active link
  const linkStyles = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.link_active}` : `${styles.link}`;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_left_wrapper}>theMarketPlace</div>
      <div className={styles.nav_middle_wrapper}>
        <NavLink className={linkStyles} to="/">
          Home
        </NavLink>
        <NavLink className={linkStyles} to="/womens">
          Women's
        </NavLink>
        <NavLink className={linkStyles} to="/womens">
          Accessories
        </NavLink>
        <NavLink className={linkStyles} to="/womens">
          Skincare
        </NavLink>
      </div>
      <div className={styles.nav_right_wrapper}>
        <img src={Cart_icon} alt="Cart Icon" />
        <img src={Search_icon} alt="Search Icon" />
        <img src={User_icon} alt="User Icon" />
      </div>
    </nav>
  );
}

export default Navbar;
