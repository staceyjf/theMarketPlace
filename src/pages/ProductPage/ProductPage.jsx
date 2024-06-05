import { useEffect, useReducer } from "react";
import {
  productItemReducer,
  createInitialState,
} from "../../reducers/productItemReducer.js";

import { addOrUpdateDocument } from "../../services/product-services.js";

import ProductItem from "../../components/ProductItem/ProductItem.jsx";

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

  // TODO: isFavorite can be a API call to update in db
  const handleIsFavouritedchange = () => {
    dispatchproductItem({
      type: "TOGGLE_ISFAVOURITED",
    });
  };

  useEffect(() => {
    addOrUpdateDocument("womens", productItem);
  }, [productItem.isFavourited]);

  return (
    <main className={styles.productPage}>
      <ProductItem
        productItem={productItem}
        dispatchproductItem={dispatchproductItem}
        handleIsFavouritedchange={handleIsFavouritedchange}
      />
    </main>
  );
}

export default ProductPage;
