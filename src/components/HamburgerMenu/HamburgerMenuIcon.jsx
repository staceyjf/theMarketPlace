import styles from "./HamburgerMenuIcon.module.scss";

function HamburgerMenuIcon() {
  return (
    // creating the hamburger icon
    <div className={styles.hamburger_menu}>
      <span className={`${styles.burger} ${styles.burger1}`}></span>
      <span className={`${styles.burger} ${styles.burger2}`}></span>
      <span className={`${styles.burger} ${styles.burger3}`}></span>
    </div>
  );
}

export default HamburgerMenuIcon;
