import mongoose from "mongoose";

let orderItemSchema = mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: [true, "Order Id is required."],
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: [true, "Product Id is required."],
  },
  quantity: {
    type: Number,
    required: [true, "Order item quantity is required."],
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "Order item price is required."],
  },
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);

export default OrderItem;
