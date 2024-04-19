import { useEffect, useReducer } from "react";

import {
  productItemReducer,
  createInitialState,
} from "../../reducers/productItemReducer.js";

import ProductForm from "../../components/ProductForm/ProductForm.jsx";

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
  }, []);

  useEffect(() => {
    // update state with the discounted price
    dispatchproductItem({
      type: "SET_FINAL_PRICE",
    });
  }, []);

  console.log(productItem);

  return (
    <div className="product-page">
      <div className="product-image-container">
        <img
          src={productItem.images[1]}
          alt={`Product image for ${productItem.title}`}
        />
        <img
          src={productItem.images[2]}
          alt={`Product image for ${productItem.title}`}
        />
      </div>

      <div className="product-details">
        <h2>{productItem.title}</h2>
        <p>Price: ${productItem.discountedPrice}</p>

        {/* Is this form overkill? */}
        <ProductForm
          productItem={productItem}
          dispatchproductItem={dispatchproductItem}
        />
        {/* <p>Total Price: ${totalPrice}</p> */}
      </div>
    </div>
  );
}

export default ProductPage;
