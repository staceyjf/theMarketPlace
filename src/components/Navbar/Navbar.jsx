import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useScreenSize from "../../services/useScreenSize";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenuIcon";
import Cart_icon from "../../assets/NavBar/cart-outline.png";
import Search_icon from "../../assets/NavBar/search-outline.png";
import User_icon from "../../assets/NavBar/user-outline.png";
import styles from "./Navbar.module.scss";

function Navbar() {
  const screenSize = useScreenSize();
  const [isMobile, setIsMobile] = useState(true);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const detectMobileOrTablet = () => {
    if (screenSize.width < 600) setIsMobile(true);
    else setIsMobile(false);
  };

  const linkStyles = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.link_active}` : `${styles.link}`;
  };

  useEffect(() => {
    detectMobileOrTablet();
  }, [screenSize.width]);

  // toggle between hamburger menu and menu
  const toggleMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav
      className={`${styles.nav} ${isHamburgerOpen ? "" : "hamburger_close"}`}
    >
      <div className={styles.nav_left_wrapper}>theMarketPlace</div>
      {!isMobile && (
        <div className={styles.nav_menu_wrapper}>
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
      )}
      {isMobile && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          <HamburgerMenu />
        </div>
      )}
      {isMobile && isHamburgerOpen && (
        <div className={styles.nav_mobile_wrapper}>
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
      )}
      {!isMobile && (
        <div className={styles.nav_icon_wrapper}>
          <img src={Cart_icon} alt="Cart Icon" />
          <img src={Search_icon} alt="Search Icon" />
          <img src={User_icon} alt="User Icon" />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
