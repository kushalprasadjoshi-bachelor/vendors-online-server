import mongoose from "mongoose";

let orderSchema = mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: [true, "Shop Id is required."],
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Customer Id is required."],
  },
  createdAt: {
    type: Date,
    required: [true, "Order date is required."],
    default: Date.now,
  },
  totalAmount: {
    type: Number,
    required: [true, "Order amount is required."],
  },
  status: {
    type: String,
    required: [true, "Order status is required."],
  },
  otp: {
    type: Number,
    required: [true, "Order OTP is required."],
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
