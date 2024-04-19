import { useRef } from "react";

import Button from "../Button/Button.jsx";
import styles from "./ProductForm.module.scss";

function ProductForm({ productItem, dispatchproductItem }) {
  const qtyToDisplay = [1, 2, 3, 4, 5, 6, 7];
  const formRef = useRef(null); // keeps track of form so no need for onChange

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const sizeSelection = new FormData(form).get("size-select");
    const qtySelection = new FormData(form).get("qty-select");

    console.log(sizeSelection);
    console.log(qtySelection);

    dispatchproductItem({
      type: "UPDATE_PRODUCT",
      selectedSize: sizeSelection,
      selectedQty: qtySelection,
    });
    console.log("add to cart?");
  };

  // qty product validation
  const isProductAvailable = () => {
    if (productItem.stock.length === 0) return false;
    return true;
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="size-select">Size:</label>
      <select id="size-select" name="size-select">
        {productItem.sizes.map((size, index) => {
          return (
            <option key={index} value={size}>
              {size}
            </option>
          );
        })}
      </select>

      {!isProductAvailable() && <div>Sold out</div>}
      {isProductAvailable() && (
        <>
          <label htmlFor="qty-select">Quantity:</label>
          <select id="qty-select" name="qty-select">
            {qtyToDisplay.map((number, index) => {
              return (
                <option key={index} value={number}>
                  {number}
                </option>
              );
            })}
          </select>
        </>
      )}

      <Button buttonText={"Add to Cart"}></Button>
    </form>
  );
}

export default ProductForm;
