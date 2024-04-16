import styles from "./WomensPage.module.scss";

function WomensPage({ pageHeaderText }) {
  return (
    <div className={styles.womens}>
      <div className={styles.womens_header}>
        <h2>{pageHeaderText}</h2>
      </div>
    </div>
  );
}

export default WomensPage;
