import PeopleIllustration from "../../components/PeopleIllustration/PeopleIllustration";
import Header from "../../components/Header/Header";
import styles from "./HomePage.module.scss";

function HomeBanner() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.header_wrapper}>
          <Header text={"Update me"} />
        </div>
        <div className={styles.img_wrapper}>
          <PeopleIllustration />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.header_wrapper}>
          <Header text={"Update me"} />
        </div>
        <div className={styles.img_wrapper}>
          <PeopleIllustration />
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
