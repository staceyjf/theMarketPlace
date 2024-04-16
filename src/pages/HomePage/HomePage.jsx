import HeroBanner from "../../components/HeroBanner/HeroBanner";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <HeroBanner
          titleText={""}
          bodyText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
      <div className={styles.container}></div>
    </section>
  );
}

export default HomePage;
