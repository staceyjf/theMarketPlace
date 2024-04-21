import { useEffect, useReducer } from "react";
import {
  productItemReducer,
  createInitialState,
} from "../../reducers/productItemReducer.js";

import { addOrUpdateProduct } from "../../services/product-services.js";

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

  // update if product is a user fav in state and update db?
  const handleIsFavouritedchange = () => {
    dispatchproductItem({
      type: "TOGGLE_ISFAVOURITED",
    });
  };

  useEffect(() => {
    // add db call
    // I haven't returned anything as I've updated my reducer
    // TODO: is this bad practice?
    addOrUpdateProduct("womens", productItem);
  }, [productItem.isFavourited]);

  return (
    <div>
      {/* General product info */}
      <div
        className={
          productItem.isFavourited
            ? `${styles.productPage_heart_active}`
            : `${styles.productPage_heart}`
        }
      >
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
