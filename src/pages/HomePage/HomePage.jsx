import { useLayoutEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";

import heroImgUrl_square from "../../assets/HeroBanner/hero-group-square.jpg";
import singleImgURL_square from "../../assets/TrendingBanner/trending-single-square.jpg";
import groupImgURL_square from "../../assets/TrendingBanner/trending-group-square.jpg";
import heroImgUrl_rect from "../../assets/HeroBanner/hero-group-rect.jpg";
import singleImgURL_rect from "../../assets/TrendingBanner/trending-single-rect.jpg";
import groupImgURL_rect from "../../assets/TrendingBanner/trending-group-rect.jpg";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import TrendingBanner from "../../components/TrendingBanner/TrendingBanner";
import styles from "./HomePage.module.scss";

function HomePage() {
  const screenSize = useScreenSize();

  //choose image shape based on screen size eg rect for laptop and square for phone and tablet
  const selectImageURL = (squareUrl, rectUrl) => {
    return screenSize.width > 1200 ? rectUrl : squareUrl;
  };

  return (
    <main className={styles.home}>
      <section className={styles.container}>
        <HeroBanner
          titleText={""}
          bodyText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          imgUrl={selectImageURL(heroImgUrl_square, heroImgUrl_rect)}
        />
      </section>
      <section className={styles.container}>
        <TrendingBanner
          titleText={"Trending Now"}
          linkText={"View Women's Shop →"}
          link={"womens"}
          imgUrls={[
            selectImageURL(singleImgURL_square, singleImgURL_rect),
            selectImageURL(groupImgURL_square, groupImgURL_rect),
          ]}
        />
      </section>
    </main>
  );
}

export default HomePage;
