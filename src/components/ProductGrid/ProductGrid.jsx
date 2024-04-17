import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

function ProductGrid({ products }) {
  return (
    <section className={styles.container}>
      <div className={styles.container_grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
