import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot,
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
  // I haven't returned anything as I've updated my reducer
  // TODO: is this bad practice?

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
