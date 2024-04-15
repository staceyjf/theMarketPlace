import styles from "./Navbar.module.scss";
import cart_icon from "../../assets/NavBar/cart-outline.png";
import search_icon from "../../assets/NavBar/search-outline.png";
import user_icon from "../../assets/NavBar/user-outline.png";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_left_wrapper}>theMarketPlace</div>
      <div className={styles.nav_middle_wrapper}></div>
      <div className={styles.nav_right_wrapper}></div>
    </nav>
  );
}

export default Navbar;
