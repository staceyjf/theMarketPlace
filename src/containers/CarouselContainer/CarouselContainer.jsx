import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product-services";

import product1URL_rect from "../../assets/ProductCarousel/product_1_rect.jpg";
import product2URL_rect from "../../assets/ProductCarousel/product_2_rect.jpg";
import product3URL_rect from "../../assets/ProductCarousel/product_3_rect.jpg";

import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

function CarouselContainer({ titleText }) {
  const [products, setProducts] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("");
  const [error, setError] = useState(null);

  // loading product images
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const totalAmountOfImages = products.length;
  const imagesPerPage = 4;
  const totalPages = Math.floor(totalAmountOfImages / imagesPerPage);

  // slider controls
  const navigateToPrevious = () => {
    // call the previous page index
    // Math.max - ensures that it doesn't go below the first page
    const prevPage = Math.max(currentSlideIndex - 1, 1);
    setCurrentSlideIndex(prevPage);
  };

  const navigateToNext = () => {
    // call the next page index
    // Math.min - ensures that we don't go past the total pages
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
        <ProductCarousel productImgURLs={productImgURLs} />
      )} */}
      <ProductCarousel
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
