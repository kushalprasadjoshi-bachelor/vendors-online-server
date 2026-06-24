import express, { json } from "express";
import mongoose from "mongoose";
import { PORT, DB_URL } from "./src/config/env.js";

import shopRoutes from "./src/routes/shopRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import cartItemRoutes from "./src/routes/cartItemRoutes.js";
import cartRoutes from "./src/routes/cartRoutes.js";
import orderItemRoutes from "./src/routes/orderItemRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";
import transactionRoutes from "./src/routes/transactionRoutes.js";

let app = express();

app.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
  mongoose.connect(DB_URL);
});

// Make our backend able to take JSON data
app.use(json());

// Use different routes
app.use("/user", userRoutes);
app.use("/shop", shopRoutes);
app.use("/shop/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/cart/item", cartItemRoutes);
app.use("/order", orderRoutes);
app.use("/order/item", orderItemRoutes);
app.use("/transaction", transactionRoutes);
