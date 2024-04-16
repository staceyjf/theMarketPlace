import dotenv from "dotenv";
dotenv.config();

import seedData from "./fetchWomensProducts.js";

seedData()
  .then(() => console.log("Data seeding completed."))
  .catch((e) => console.warn("Error occurred while seeding data:", e));
