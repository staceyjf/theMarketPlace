import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./HeroBanner.module.scss";

function HeroBanner({ titleText, bodyText, imgUrl }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`womens`);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <h1>
          Luxury Fashion <span>Market Place</span>
        </h1>
        <h2 className={styles.main_header}>{titleText}</h2>
        <p>{bodyText}</p>
        <Button onClickCB={handleOnClick} buttonText={"Shop Now →"} />
      </div>
      <div className={styles.image_container}>
        <img src={imgUrl} alt="Group of ladies modelling our latest campaign" />
      </div>
    </div>
  );
}

export default HeroBanner;
