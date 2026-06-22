import mongoose from "mongoose";

let cartSchema = mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User Id is required."],
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
