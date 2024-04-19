import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

function ProductCard({ product, category }) {
  const imgBg = {
    backgroundImage: `url(${product.thumbnail})`,
  };

  const finalPrice =
    Math.round(
      product.price * ((100 - product.discountPercentage) / 100) * 100
    ) / 100;

  return (
    <div className={styles.container} style={imgBg}>
      <div className={styles.overlay}>
        <div className={styles.items}></div>
        <div className={styles.items + " " + styles.head}>
          <p>{product.title}</p>
          <hr />
        </div>
        <div className={styles.items + " " + styles.price}>
          <p className={styles.old}>${product.price}</p>
          <p className={styles.new}>${finalPrice}</p>
        </div>
        <div className={styles.items + " " + styles.cart}>
          <span>
            <Link to={`/${category}/${product.id}`}>SHOP PRODUCT →</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
