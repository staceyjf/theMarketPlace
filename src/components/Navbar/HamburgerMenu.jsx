import styles from "./HamburgerMenu.module.scss";

function HamburgerMenu({ isOpen }) {
  return (
    <div className={styles.hamburger_menu}>
      <span className={`${styles.burger} ${isOpen ? styles.open : ""}`}></span>
      <span className={`${styles.burger} ${isOpen ? styles.open : ""}`}></span>
      <span className={`${styles.burger} ${isOpen ? styles.open : ""}`}></span>
    </div>
  );
}

export default HamburgerMenu;
