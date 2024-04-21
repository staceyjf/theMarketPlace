import styles from "./TrendingCarousel.module.scss";

function TrendingCarousel({ titleText, products }) {
  return (
    <div className={styles.slider_container}>
      <div className={styles.slider_header}>
        <h2>{titleText}</h2>
      </div>
      <div className={styles.slider_wrapper}>
        <div className={styles.slider_slides_container}>
          <ul className={styles.slider_list}>
            <li className={styles.slider_item}>
              <a href="#">
                <img
                  src="assets/img/featured-product-1.jpg"
                  alt="Featured Product 1"
                />
              </a>
            </li>
            <li className={styles.slider_item}>
              <a href="#">
                <img
                  src="assets/img/featured-product-1.jpg"
                  alt="Featured Product 1"
                />
              </a>
            </li>
            <li className={styles.slider_item}>
              <a href="#">
                <img
                  src="assets/img/featured-product-1.jpg"
                  alt="Featured Product 1"
                />
              </a>
            </li>
            <li className={styles.slider_item}>
              <a href="#">
                <img
                  src="assets/img/featured-product-1.jpg"
                  alt="Featured Product 1"
                />
              </a>
            </li>
            <li className={styles.slider_item}>
              <a href="#">
                <img
                  src="assets/img/featured-product-1.jpg"
                  alt="Featured Product 1"
                />
              </a>
            </li>
            <li className={styles.slider_item}>
              <a href="#">
                <img
                  src="assets/img/featured-product-1.jpg"
                  alt="Featured Product 1"
                />
              </a>
            </li>
            <li className={styles.slider_item}>
              <a href="#">
                <img
                  src="assets/img/featured-product-1.jpg"
                  alt="Featured Product 1"
                />
              </a>
            </li>
            <li className={styles.slider_item}>
              <a href="#">
                <img
                  src="assets/img/featured-product-1.jpg"
                  alt="Featured Product 1"
                />
              </a>
            </li>
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
