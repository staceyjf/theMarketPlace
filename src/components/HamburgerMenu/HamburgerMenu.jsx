import styles from "./HamburgerMenu.module.scss";

function HamburgerMenu() {
  return (
    <div className={styles.hamburger_menu}>
      <span className={`${styles.bar}`}></span>
      <span className={`${styles.bar}`}></span>
      <span className={`${styles.bar}`}></span>
    </div>
  );
}

export default HamburgerMenu;
