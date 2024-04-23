import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import { CartContext } from "../../context/CartContextProvider.jsx";
import useScreenSize from "../../hooks/useScreenSize";

import HamburgerMenu from "../Navbar/HamburgerMenu.jsx";
import Cart_icon from "../../assets/Icons/cart-outline.png";
import Search_icon from "../../assets/Icons/search-outline.png";
import User_icon from "../../assets/Icons/user-outline.png";

import styles from "./Navbar.module.scss";

function Navbar() {
  const screenSize = useScreenSize();
  const [isMobile, setIsMobile] = useState(true);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { cart, dispatchCart } = useContext(CartContext);

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
          <NavLink className={linkStyles} to="/accessories">
            Accessories
          </NavLink>
          <NavLink className={linkStyles} to="/skincare">
            Skincare
          </NavLink>
        </div>
      )}
      {isMobile && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          <HamburgerMenu isOpen={isHamburgerOpen} />
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
          <NavLink className={linkStyles} to="/cart">
            <img src={Cart_icon} alt="Cart Icon" />
          </NavLink>
        </div>
      )}
      {!isMobile && (
        <div className={styles.nav_icon_wrapper}>
          <NavLink className={linkStyles} to="/cart">
            <img src={Cart_icon} alt="Cart Icon" />
          </NavLink>
          <img src={Search_icon} alt="Search Icon" />
          <img src={User_icon} alt="User Icon" />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
