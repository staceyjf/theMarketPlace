import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../services/product-services";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import ProductPage from "../../pages/ProductPage/ProductPage";
import Message from "../../components/Message/Message";

function ProductLoader() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  const [error, setError] = useState(null);

  // get the products from firebase
  useEffect(() => {
    setFetchStatus("LOADING");
    getAllProducts("womens")
      .then((data) => {
        setFetchStatus("SUCCESS");
        setProducts(data);
      })
      .catch((e) => {
        setFetchStatus("FAILED");
        console.warn(e.message);
        setError(e);
      });
  }, []);

  // find the product by id
  useEffect(() => {
    const productById = products.find((product) => product.id === id);

    if (productById) setProduct(productById);
  }, [id, products]);

  return (
    <div>
      {fetchStatus === "LOADING" && <LoadingSpinner />}
      {fetchStatus === "FAILED" && (
        <Message severity="error" message={error.message} />
      )}
      {!product && fetchStatus === "SUCCESS" && (
        <ProductGrid products={products} category="womens" />
      )}
      {product && <ProductPage product={product} />}
    </div>
  );
}

export default ProductLoader;
