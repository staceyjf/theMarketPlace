import { Link } from "react-router-dom";

import styles from "./TrendingCarousel.module.scss";

function TrendingCarousel({
  titleText,
  products,
  navigateToPrevious,
  navigateToNext,
  canNavigateToPrevious,
  canNavigateToNext,
}) {
  return (
    <div className={styles.slider_container}>
      <div className={styles.slider_header}>
        <h2>{titleText}</h2>
      </div>
      <div className={styles.slider_wrapper}>
        <div className={styles.slider_slides_container}>
          {products.map((product, i) => {
            return (
              <div className={styles.slider_item} key={i}>
                {/* TODO: update with ids */}
                <Link href="#">
                  <img src={product} alt={`Featured Product ${i + 1}`} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.slider_arrows}>
        <button
          className={styles.slider_arrow_prev}
          disabled={!canNavigateToPrevious}
          onClick={navigateToPrevious}
        >
          <span className={styles.slider_arrow_prev_left}></span>
        </button>
        <button
          className={styles.slider_arrow_next}
          disabled={!canNavigateToNext}
          onClick={navigateToNext}
        >
          <span className={styles.slider_arrow_next_right}></span>
        </button>
      </div>
    </div>
  );
}

export default TrendingCarousel;
