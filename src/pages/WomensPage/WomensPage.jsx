import { useEffect } from "react";
import ProductLoader from "../../containers/ProductLoader/ProductLoader";

import styles from "./WomensPage.module.scss";

function WomensPage({ pageHeaderText }) {
  useEffect(() => {
    document.title = "Shop Women's";
    return () => (document.title = "Welcome to theMarketPlace");
  }, []);

  return (
    <main className={styles.category}>
      <div className={styles.category_header}>
        <h2>{pageHeaderText}</h2>
      </div>
      <div className={styles.category_body}>
        <ProductLoader />
      </div>
    </main>
  );
}

export default WomensPage;
