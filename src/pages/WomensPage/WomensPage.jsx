import ProductLoader from "../../containers/ProductLoader/ProductLoader";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import styles from "./WomensPage.module.scss";

function WomensPage({ pageHeaderText }) {
  return (
    <div className={styles.womens}>
      <div className={styles.womens_header}>
        <h2>{pageHeaderText}</h2>
        <ProductLoader>
          <ProductGrid category="womens" />
        </ProductLoader>
      </div>
    </div>
  );
}

export default WomensPage;
