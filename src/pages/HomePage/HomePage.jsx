import { useState, useEffect } from "react";
import useScreenSize from "../../services/useScreenSize";

import heroSquareImgUrl from "../../assets/HeroBanner/hero-group-square.jpg";
import singleSquareImgURL from "../../assets/TrendingBanner/trending-single-square.jpg";
import groupSquareImgURL from "../../assets/TrendingBanner/trending-group-square.jpg";
import heroRectImgUrl from "../../assets/HeroBanner/hero-group-rect.jpg";
import singleRectImgURL from "../../assets/TrendingBanner/trending-single-rect.jpg";
import groupRectImgURL from "../../assets/TrendingBanner/trending-group-rect.jpg";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import TrendingBanner from "../../components/TrendingBanner/TrendingBanner";
import styles from "./HomePage.module.scss";

function HomePage() {
  const screenSize = useScreenSize();
  const [heroImgUrl, setHeroImgUrl] = useState(heroSquareImgUrl);
  const [trendingImgURL1, setTrendingImgURL1] = useState(singleSquareImgURL);
  const [trendingImgURL2, setTrendingImgURL2] = useState(groupSquareImgURL);

  // change imgs based on screen sizes eg rect for laptops and square for phone & tablet
  useEffect(() => {
    if (screenSize.width > 1200) {
      setHeroImgUrl(heroRectImgUrl);
      setTrendingImgURL1(singleRectImgURL);
      setTrendingImgURL2(groupRectImgURL);
    } else {
      setHeroImgUrl(heroSquareImgUrl);
      setTrendingImgURL1(singleSquareImgURL);
      setTrendingImgURL2(groupSquareImgURL);
    }
  }, [screenSize]);

  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <HeroBanner
          titleText={""}
          bodyText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          imgUrl={heroImgUrl}
        />
      </div>
      <div className={styles.container}>
        <TrendingBanner
          titleText={"Trending Now"}
          linkText={"View Shop →"}
          imgUrls={[trendingImgURL1, trendingImgURL2]}
        />
      </div>
    </section>
  );
}

export default HomePage;
