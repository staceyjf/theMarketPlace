import styles from "./ProductItemFooter.module.scss";

function ProductItemFooter({ productItem }) {
  return (
    <div>
      <h3>Editor's notes</h3>
      <p>{productItem.description}</p>
      <p>Product code: {productItem.id}</p>
    </div>
  );
}

export default ProductItemFooter;
