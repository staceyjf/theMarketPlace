import styles from "./ProductItemDescription.module.scss";

function ProductItem({ productItem }) {
  return (
    <>
      <div>
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
        <h2>{productItem.brand}</h2>
        <p>{productItem.title}</p>
        <p>
          ${productItem.discountedPrice}
          <span>(Local taxes and duties included)</span>
        </p>
        <p>Rating: {productItem.rating}</p>
      </div>
    </>
  );
}

export default ProductItem;
