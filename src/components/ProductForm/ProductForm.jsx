import Button from "../Button/Button.jsx";
import styles from "./ProductForm.module.scss";
import { useState, useEffect } from "react";

function ProductForm({ productItem, dispatchproductItem }) {
  const qtyToDisplay = [1, 2, 3, 4, 5, 6, 7];

  // keep track of my form inputs to avoid only one input updating
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQty, setSelectedQty] = useState(1);

  //updating in a useEffect to avoid updating with old values
  useEffect(() => {
    dispatchproductItem({
      type: "UPDATE_PRODUCT",
      selectedSize: selectedSize,
      selectedQty: selectedQty,
    });
  }, [selectedSize, selectedQty]);

  const handleChange = (e) => {
    // update the property based on which input triggered the event
    const { name, value } = e.target;
    name === "size-select" ? setSelectedSize(value) : setSelectedQty(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("add cart logic here ");
  };

  // qty product validation
  const isProductAvailable = () => {
    if (productItem.stock.length === 0) return false;
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="size-select">Size:</label>
      <select id="size-select" name="size-select" onChange={handleChange}>
        {productItem.sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>

      {!isProductAvailable() && (
        <div>
          <p>Sold out</p>
        </div>
      )}
      {isProductAvailable() && (
        <>
          <label htmlFor="qty-select">Quantity:</label>
          <select id="qty-select" name="qty-select" onChange={handleChange}>
            {qtyToDisplay.map((number, index) => (
              <option key={index} value={number}>
                {number}
              </option>
            ))}
          </select>
        </>
      )}

      <Button buttonText={"Add to Cart"}></Button>
    </form>
  );
}

export default ProductForm;
