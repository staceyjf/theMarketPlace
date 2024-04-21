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
  const [fetchStatus, setFetchStatus] = useState("");
  const [error, setError] = useState(null);

  // loading product images
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const totalAmountOfImages = products.length;
  const imagesPerPage = 5;
  const totalPages = Math.floor(totalAmountOfImages / imagesPerPage);

  // slider controls
  const navigateToPrevious = () => {
    const prevPage = Math.max(currentSlideIndex - 1, 1);
    setCurrentSlideIndex(prevPage);
  };

  const navigateToNext = () => {
    const nextPage = Math.min(currentSlideIndex + 1, totalPages);
    setCurrentSlideIndex(nextPage);
  };

  const start = imagesPerPage * (currentSlideIndex - 1);
  const end = imagesPerPage * currentSlideIndex;
  const productsOnCurrentPage = products.slice(start, end);

  // limits
  const canNavigateToPrevious = currentSlideIndex > 1;
  const canNavigateToNext = currentSlideIndex < totalPages;

  // populate products
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
    let productImgURLs = Array(30)
      .fill()
      .map(
        (_, i) => [product1URL_rect, product2URL_rect, product3URL_rect][i % 3]
      );
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
      <TrendingCarousel
        titleText={titleText}
        products={productsOnCurrentPage}
        navigateToPrevious={navigateToPrevious}
        navigateToNext={navigateToNext}
        canNavigateToPrevious={canNavigateToPrevious}
        canNavigateToNext={canNavigateToNext}
      />
    </>
  );
}

export default CarouselContainer;
