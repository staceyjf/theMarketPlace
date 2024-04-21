import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product-services";

import product1URL_rect from "../../assets/TrendingCarousel/product_1_rect.jpg";
import product2URL_rect from "../../assets/TrendingCarousel/product_2_rect.jpg";
import product3URL_rect from "../../assets/TrendingCarousel/product_3_rect.jpg";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Message from "../../components/Message/Message";
import TrendingCarousel from "../../components/TrendingCarousel/TrendingCarousel";

function CarouselContainer({ titleText }) {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  const [error, setError] = useState(null);

  // get the products from firebase
  useEffect(() => {
    //     setFetchStatus("LOADING");
    //     getAllProducts("womens")
    //       .then((data) => {
    //         setFetchStatus("SUCCESS");
    //         setProducts(data);
    //       })
    //       .catch((e) => {
    //         setFetchStatus("FAILED");
    //         console.warn(e.message);
    //         setError(e);
    //       });

    // TODO: remove this once we have better images in the db
    let productImgURLs = Array(27)
      .fill()
      .map(
        (_, i) => [product1URL_rect, product2URL_rect, product3URL_rect][i % 3]
      );
    console.log(productImgURLs);
    setProducts(productImgURLs);
  }, []);

  return (
    <>
      {/* {fetchStatus === "LOADING" && <LoadingSpinner />}
      {fetchStatus === "FAILED" && (
        <Message severity="error" message={error.message} />
      )}
      {fetchStatus === "SUCCESS" && (
        <TrendingCarousel productImgURLs={productImgURLs} />
      )} */}
      <TrendingCarousel products={products} titleText={titleText} />
    </>
  );
}

export default CarouselContainer;
