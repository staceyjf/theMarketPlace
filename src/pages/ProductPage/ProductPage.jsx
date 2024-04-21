import { useEffect, useReducer } from "react";
import {
  productItemReducer,
  createInitialState,
} from "../../reducers/productItemReducer.js";

import { addOrUpdateDocument } from "../../services/product-services.js";

import ProductItemCard from "../../components/ProductItemCard/ProductItemCard.jsx";

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
    addOrUpdateDocument("womens", productItem);
  }, [productItem.isFavourited]);

  return (
    <main className={styles.productPage}>
      <ProductItemCard
        productItem={productItem}
        dispatchproductItem={dispatchproductItem}
        handleIsFavouritedchange={handleIsFavouritedchange}
      />
    </main>
  );
}

export default ProductPage;
