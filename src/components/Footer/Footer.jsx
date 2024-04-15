import styles from "./Footer.module.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.contact}>
          <h3>Contact us</h3>
          <p>info@themarketplace.com</p>
          <p>US toll free +61 123 321 1234</p>
        </div>
        <div className={styles.copyright}>
          &copy;{year} Ecom | All right Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
