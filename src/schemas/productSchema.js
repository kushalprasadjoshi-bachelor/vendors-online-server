import mongoose from "mongoose";

let productSchema = mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: [true, "Shop Id is required."],
  },
  name: {
    type: String,
    required: [true, "Product name is required."],
  },
  description: {
    type: String,
    required: [true, "Product description is required."],
  },
  price: {
    type: Number,
    required: [true, "Product price is required."],
  },
  stock: {
    type: Number,
    required: [true, "Product stock is required."],
  },
  images: [
    {
      type: String,
      required: [true, "Product images are required."],
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
