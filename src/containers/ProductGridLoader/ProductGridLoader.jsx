import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product-services";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Message from "../../components/Message/Message";

function ProductLoader() {
  const [products, setProducts] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setFetchStatus("LOADING");
    getAllProducts("womens")
      .then((data) => {
        console.log("data fetched");
        setFetchStatus("SUCCESS");
        setProducts(data);
      })
      .catch((e) => {
        setFetchStatus("FAILED");
        console.warn(e.message);
        setError(e);
      });
  }, []);

  return (
    <div>
      {fetchStatus === "LOADING" && <LoadingSpinner />}
      {fetchStatus === "FAILED" && (
        <Message severity="error" message={error.message} />
      )}
      {fetchStatus === "SUCCESS" && <ProductGrid products={products} />}
    </div>
  );
}

export default ProductLoader;
