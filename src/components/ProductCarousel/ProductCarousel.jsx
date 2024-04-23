import { Link } from "react-router-dom";

import styles from "./ProductCarousel.module.scss";

function ProductCarousel({
  titleText,
  products,
  navigateToPrevious,
  navigateToNext,
  canNavigateToPrevious,
  canNavigateToNext,
}) {
  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel_header}>
        <h2>{titleText}</h2>
      </div>
      <div className={styles.carousel_wrapper}>
        <div className={styles.carousel_slides_container}>
          {products.map((product, i) => {
            return (
              <div className={styles.carousel_item} key={i}>
                {/* TODO: update with ids */}
                <Link href="#">
                  <img src={product} alt={`Featured Product ${i + 1}`} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.carousel_arrows}>
        <button
          className={styles.carousel_arrow_prev}
          disabled={!canNavigateToPrevious}
          onClick={navigateToPrevious}
        >
          <span className={styles.carousel_arrow_prev_left}></span>
        </button>
        <button
          className={styles.carousel_arrow_next}
          disabled={!canNavigateToNext}
          onClick={navigateToNext}
        >
          <span className={styles.carousel_arrow_next_right}></span>
        </button>
      </div>
    </div>
  );
}

export default ProductCarousel;
