import mongoose from "mongoose";
import Product from "../model/product.js";
import { productFactory } from "../factory/productFactory.js";

const seedProducts = async (sellerId, count = 10) => {
  await Product.deleteMany({});

  const products = [];

  for (let i = 0; i < count; i++) {
    products.push(productFactory(sellerId));
  }

  await Product.insertMany(products);
  return products.length;
};

export default seedProducts;
