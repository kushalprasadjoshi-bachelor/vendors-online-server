import mongoose from "mongoose";

let cartItemSchema = mongoose.Schema({
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
    required: [true, "Cart Id is required."],
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: [true, "Product Id is required,"],
  },
  quantity: {
    type: Number,
    required: [true, "Procuct quantity is required."],
    default: 0,
  },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

export default CartItem;
