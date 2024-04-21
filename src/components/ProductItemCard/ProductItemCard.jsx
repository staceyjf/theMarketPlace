import ProductItemDescription from "../../components/ProductItemDescription/ProductItemDescription.jsx";
import HeartIcon from "../../components/HeartIcon/HeartIcon.jsx";
import ProductItemFooter from "../../components/ProductItemFooter/ProductItemFooter.jsx";

import styles from "./ProductItemCard.module.scss";

function ProductItemCard({
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
            ? `${styles.productItemCard_heart_active}`
            : `${styles.productItemCard_heart}`
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

export default ProductItemCard;
