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
          <ul className={styles.slider_list}>
            {products.map((product, i) => {
              return (
                <li className={styles.slider_item} key={i}>
                  {/* TODO: update with ids */}
                  <Link href="#">
                    <img src={product} alt={`Featured Product ${i + 1}`} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.slider_arrow}>
        <button className={styles.slider_arrow_prev}>Prev</button>
        <button className={styles.slider_arrow_next}>Next</button>
      </div>
    </div>
  );
}

export default TrendingCarousel;
