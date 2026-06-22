import mongoose from "mongoose";

let cartSchema = mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User Id is required."],
  },
});

export default mongoose.model("Cart", cartSchema);
