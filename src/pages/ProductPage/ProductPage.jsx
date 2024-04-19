import { useEffect, useReducer } from "react";
import {
  productItemReducer,
  createInitialState,
} from "../../reducers/productItemReducer.js";

import ProductItemDescription from "../../components/ProductItemDescription/ProductItemDescription.jsx";
import ProductItemForm from "../../components/ProductItemForm/ProductItemForm.jsx";
import HeartIcon from "../../components/HeartIcon/HeartIcon.jsx";
import Button from "../../components/Button/Button.jsx";
import ProductItemFooter from "../../components/ProductItemFooter/ProductItemFooter.jsx";

import styles from "./ProductPage.module.scss";

function ProductPage({ product }) {
  // takes reducer function, initial state, initializer function
  const [productItem, dispatchproductItem] = useReducer(
    productItemReducer,
    product,
    createInitialState
  );

  useEffect(() => {
    document.title = `Shop ${productItem.title}`;
    return () => (document.title = "Welcome to theMarketPlace");
  }, [productItem]);

  // update state with the discounted price
  useEffect(() => {
    dispatchproductItem({
      type: "SET_FINAL_PRICE",
    });
  }, [dispatchproductItem]);

  console.log(productItem);

  // update if product is a user fav
  const handleIsFavouritedchange = () => {
    dispatchproductItem({
      type: "TOGGLE_ISFAVOURITED",
    });
  };

  // add additional css as props
  let stylingClasses = productItem.isFavourited
    ? `styles.productPage_heart styles.productPage_heart_true`
    : `styles.productPage_heart`;

  return (
    <div className={stylingClasses}>
      {/* General product info */}
      <div className={styles.productPage_heart}>
        <HeartIcon />
      </div>
      <ProductItemDescription productItem={productItem} />

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

      {/* to extra product info*/}
      <ProductItemFooter productItem={productItem} />
    </div>
  );
}

export default ProductPage;
