import TrendingCard from "../TrendingCard/TrendingCard";
import groupImgURL from "../../assets/TrendingBanner/trending-group-square.jpg";
import singleImgURL from "../../assets/TrendingBanner/trending-single-square.jpg";
import styles from "./TrendingBanner.module.scss";

function TrendingBanner({ titleText, linkText }) {
  return (
    <div className={styles.trending}>
      <div className={styles.trending_header}>
        <h2>{titleText}</h2>
        <p>{linkText}</p>
      </div>
      <div className={styles.trending_features}>
        <TrendingCard
          cardTitleText={"New Arrivals"}
          cardBodyText={"Shop now"}
          imgUrl={singleImgURL}
        />
        <TrendingCard
          cardTitleText={"Women's"}
          cardBodyText={"Shop now"}
          imgUrl={groupImgURL}
        />
      </div>
    </div>
  );
}

export default TrendingBanner;
