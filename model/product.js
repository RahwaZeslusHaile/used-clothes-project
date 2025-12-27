import { en } from "@faker-js/faker";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    condition: {
      type: String,
      enum: ["new", "like new", "good", "fair"],
      required: true,
    },

    category: {
      type: String,
      enum: ["men", "women", "kids"],
      required: true,
    },

    size: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
    },

    images: {
      type: [String],
      default: [],
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
