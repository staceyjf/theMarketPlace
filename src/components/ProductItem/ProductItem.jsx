import ProductItemDescription from "../../components/ProductItem/ProductItemDescription.jsx";
import HeartIcon from "../HeartIcon/HeartIcon.jsx";
import ProductItemFooter from "../../components/ProductItem/ProductItemFooter.jsx";

import styles from "./ProductItem.module.scss";

function ProductItem({
  productItem,
  dispatchproductItem,
  handleIsFavouritedchange,
}) {
  return (
    <>
      {/* Is a favourite */}
      <div
        className={
          productItem.isFavourited
            ? `${styles.productItem_heart_active}`
            : `${styles.productItem_heart}`
        }
      >
        <HeartIcon />
      </div>

      {/* General product info */}
      <ProductItemDescription
        productItem={productItem}
        dispatchproductItem={dispatchproductItem}
        handleIsFavouritedchange={handleIsFavouritedchange}
      />

      {/* to extra product info*/}
      <ProductItemFooter productItem={productItem} />
    </>
  );
}

export default ProductItem;
