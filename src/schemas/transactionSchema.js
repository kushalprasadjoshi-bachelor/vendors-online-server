import mongoose from "mongoose";

let transactionSchema = mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: [true, "Order Id is required."],
  },
  amount: {
    type: Number,
    required: [true, "Transaction amount is required."],
  },
  status: {
    type: String,
    required: [true, "Transaction status is required."],
  },
});

export default mongoose.model("Transaction", transactionSchema);
