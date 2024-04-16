import styles from "./TrendingCard.module.scss";

function TrendingCard({ cardTitleText, cardBodyText, imgUrl }) {
  return (
    <div className={styles.trending}>
      <div className={styles.trending_top}>
        <img src={imgUrl} alt="Group of ladies modelling our latest campaign" />
      </div>
      <div className={styles.trending_bottom}>
        <h2 className={styles.main_header}>{cardTitleText}</h2>
        <p>{cardBodyText}</p>
      </div>
    </div>
  );
}

export default TrendingCard;
