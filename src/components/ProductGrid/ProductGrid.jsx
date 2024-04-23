import ProductCard from "../../components/ProductGrid/ProductCard";
import styles from "./ProductGrid.module.scss";

function ProductGrid({ products, category }) {
  return (
    <section className={styles.container}>
      <div className={styles.container_grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} category={category} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
