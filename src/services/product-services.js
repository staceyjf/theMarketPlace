import {
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firestore.js";

const sortedProducts = (productArr) => {
  return [...productArr].sort((a, b) => a.category.localeCompare(b.category));
};
export const getAllProducts = async (categoryStr) => {
  console.log("getAllProducts called with category:", categoryStr);
  const collectionRef = collection(db, categoryStr);
  const snapshot = await getDocs(collectionRef);
  const products = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  const sortedByCategory = sortedProducts(products);

  return sortedByCategory;
};
