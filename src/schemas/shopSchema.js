import mongoose from "mongoose";

let shopSchema = mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Vendor Id is required."],
  },
  name: {
    type: String,
    required: [true, "Shop name is required."],
  },
  description: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    required: [true, "Shop category is required."],
  },
  banner: {
    type: String,
    required: [true, "Shop banner is required."],
  },
});

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
