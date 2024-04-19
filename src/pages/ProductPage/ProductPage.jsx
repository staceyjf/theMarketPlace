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

  useEffect(() => {
    // update state with the discounted price
    dispatchproductItem({
      type: "SET_FINAL_PRICE",
    });
  }, [dispatchproductItem]);

  console.log(productItem);

  return (
    <div className={styles.productPage}>
      <div className="product-image-container">
        {/* General product info */}
        <ProductItemDescription productItem={productItem} />

        {/* To handle size & qty selections - Is this form overkill? */}
        <ProductItemForm
          productItem={productItem}
          dispatchproductItem={dispatchproductItem}
        />

        {/* to handle adding to favourites */}
        <Button
          // onClick={handleChange}
          buttonText={"Add to Favourites"}
          SvgIcon={HeartIcon}
        ></Button>

        {/* to extra product info*/}
        <ProductItemFooter productItem={productItem} />
      </div>
    </div>
  );
}

export default ProductPage;
