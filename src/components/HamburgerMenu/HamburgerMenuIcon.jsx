import styles from "./HamburgerMenuIcon.module.scss";

function HamburgerMenuIcon({ isOpen }) {
  console.log(isOpen);
  return (
    <div className={styles.hamburger_menu}>
      <span className={`${styles.burger} ${isOpen ? styles.open : ""}`}></span>
      <span className={`${styles.burger} ${isOpen ? styles.open : ""}`}></span>
      <span className={`${styles.burger} ${isOpen ? styles.open : ""}`}></span>
    </div>
  );
}

export default HamburgerMenuIcon;
