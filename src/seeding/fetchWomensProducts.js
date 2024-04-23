import dotenv from "dotenv";
dotenv.config();

// redo if needed again
// import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };
import firebaseAdmin from "firebase-admin";

// Initialize Firebase Admin SDK
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

const db = firebaseAdmin.firestore();

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
      isFavourited: false,
      sizes: ["xs", "s", "m", "l", "xl", "xxl"],
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

  const batch = db.batch();

  for (const product of cleanedProducts) {
    const productRef = db.collection("womens").doc(product.id);
    const productData = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      isFavourited: product.isFavourited,
      sizes: product.sizes,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
      thumbnail: product.thumbnail,
      images: product.images,
    };
    batch.set(productRef, productData);
  }

  await batch.commit();
};

// invoke seedData to start the seeding process
seedData()
  .then(() => console.log("Data seeding completed."))
  .catch((e) => console.warn("Error occurred while seeding data:", e));
