import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../config/firestore.js";

// cleaning functions
const sortedProducts = (productArr) => {
  return [...productArr].sort((a, b) => a.category.localeCompare(b.category));
};

export const getAllProducts = async (categoryStr) => {
  const collectionRef = collection(db, categoryStr);
  const snapshot = await getDocs(collectionRef);
  const products = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  const sortedByCategory = sortedProducts(products);
  console.log("getAllProducts called with category:", categoryStr);

  return sortedByCategory;
};

export const addOrUpdateDocument = async (collectionName, product) => {
  const collectionRef = collection(db, collectionName);
  const docRef = doc(collectionRef, `${product.id}`);
  await setDoc(docRef, product);

  // Check if product has been updated
  const updatedProductSnapshot = await getDoc(docRef);
  const updatedProduct = {
    id: updatedProductSnapshot.id,
    ...updatedProductSnapshot.data(),
  };

  console.log(
    "updateProduct called with category & product:",
    collectionName,
    updatedProduct
  );
};

export const updateProductQty = async (updates) => {
  const batch = writeBatch(db);

  updates.forEach((update) => {
    const docRef = doc(db, "womens", update.id);
    batch.update(docRef, { stock: update.newAvailableQty });
  });

  await batch.commit();

  console.log("updateProductQty called and db updated");
};
