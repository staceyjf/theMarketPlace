import styles from "./ProductCard.module.scss";

function ProductCard({ key, product }) {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.overlay}>
        <div className={styles.items}></div>
        <div className={styles.items + " " + styles.head}>
          <p>Flower Embroidery Hoop Art</p>
          <hr />
        </div>
        <div className={styles.items + " " + styles.price}>
          <p className={styles.old}>$699</p>
          <p className={styles.new}>$345</p>
        </div>
        <div className={styles.items + " " + styles.cart}>
          <i className="fa fa-shopping-cart"></i>
          <span>ADD TO CART</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
