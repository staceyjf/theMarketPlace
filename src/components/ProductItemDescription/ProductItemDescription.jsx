import HeartIcon from "../../components/HeartIcon/HeartIcon.jsx";
import ProductItemForm from "../../components/ProductItemForm/ProductItemForm.jsx";
import Button from "../../components/Button/Button.jsx";

import styles from "./ProductItemDescription.module.scss";

function ProductItem({
  productItem,
  dispatchproductItem,
  handleIsFavouritedchange,
}) {
  return (
    <div className={styles.ProductItemDescription}>
      <div className={styles.ProductItemDescription_imgs}>
        <img
          src={productItem.images[1]}
          alt={`Product image for ${productItem.title}`}
        />
        {/* <img
          src={productItem.images[2]}
          alt={`Product image for ${productItem.title}`}
        /> */}
      </div>

      <div className={styles.ProductItemDescription_details}>
        <h2>{productItem.brand}</h2>
        <p>{productItem.title}</p>
        <p>
          ${productItem.discountedPrice}
          <span> (Local taxes and duties included)</span>
        </p>
        <p></p>
        <p>Rating: {productItem.rating}</p>

        {/* To handle size & qty selections - Is this form overkill? */}
        <ProductItemForm
          productItem={productItem}
          dispatchproductItem={dispatchproductItem}
        />

        {/* to handle adding to favourites */}
        <Button
          onClickCB={handleIsFavouritedchange}
          stylename={"productPage_button"}
          buttonText={"Add to Favourites"}
          SvgIcon={HeartIcon}
        ></Button>
      </div>
    </div>
  );
}

export default ProductItem;