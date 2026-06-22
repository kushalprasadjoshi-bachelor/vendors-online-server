import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required."],
  },
  role: {
    type: String,
    required: [true, "User role is required."],
  },
  phone: {
    type: Number,
    required: [true, "User phone number is required."],
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: [true, "User password is required."],
  },
  profilePic: {
    type: String,
    default: "",
  },
});

export default mongoose.model("User", userSchema);
