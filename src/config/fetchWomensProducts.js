import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firestore.js";

const endPoints = [
  "https://dummyjson.com/products/category/womens-dresses",
  "https://dummyjson.com/products/category/womens-shoes",
  "https://dummyjson.com/products/category/womens-watches",
  "https://dummyjson.com/products/category/womens-bags",
  "https://dummyjson.com/products/category/womens-jewellery",
];

const cleanData = (data) => {
  // flatten the nest array of arrays of objects
  const products = data.flatMap((category) => category.products);
  const updatedProducts = products.map((product) => {
    return {
      ...product,
      id: String(product.id),
    };
  });
  return updatedProducts;
};

// Function to fetch data from API and seed it
const seedData = async () => {
  const promises = endPoints.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .catch((e) => {
        console.warn("Error occurred while calling dummy product data:", e);
        throw new Error("Promises with API call to DummyJson");
      })
  );

  const data = await Promise.all(promises);
  const cleanedProducts = cleanData(data);
  const collectionRef = collection(db, "womens");

  for (const product of cleanedProducts) {
    try {
      await addDoc(collectionRef, product); //this auto generates the ID which is not exactly what I want
    } catch (e) {
      console.warn(e);
      throw e;
    }
  }

  // write products to my women's Collection
  // loop through array of product objects
  // for (const product of cleanedProducts) {
  //   try {
  //     // create doc with the product object
  //     // set the product.id to the doc.id
  //     await setDoc(doc(db, "womens", product.id), product);
  //   } catch (e) {
  //     console.warn(e);
  //     throw e;
  //   }
  // }
};

export default seedData;
