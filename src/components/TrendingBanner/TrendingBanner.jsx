import { Link } from "react-router-dom";
import TrendingCard from "../TrendingCard/TrendingCard";
import styles from "./TrendingBanner.module.scss";

function TrendingBanner({ titleText, linkText, link, imgUrls }) {
  const cardTitles = ["New Arrivals", "Women's"];
  const cardBodies = ["Explore →", "Shop now →"];
  const links = ["", "womens"];
  return (
    <div className={styles.trending}>
      <div className={styles.trending_header}>
        <h2>{titleText}</h2>
        <Link to={link}>{linkText}</Link>
      </div>
      <div className={styles.trending_features}>
        {imgUrls.map((imgUrl, index) => (
          <TrendingCard
            key={index}
            cardTitleText={cardTitles[index]}
            cardBodyText={cardBodies[index]}
            link={links[index]}
            imgUrl={imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default TrendingBanner;
