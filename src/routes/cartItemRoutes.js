import { Router } from "express";
import CartItem from "../schemas/cartItemSchema.js";

const cartItemRoutes = Router();

cartItemRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await CartItem.create(req.body);

      res.json({
        success: true,
        message: "Cart item added successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  })
  .get(async (req, res, next) => {
    try {
      let result = await CartItem.find();

      res.json({
        success: true,
        message: "Cart items fetched successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

cartItemRoutes
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await CartItem.findById(req.params.id);

      res.json({
        success: true,
        message: "Cart item fetched successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  })
  .patch(async (req, res, next) => {
    try {
      let result = await CartItem.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "Car item updated successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  })
  .delete(async (req, res, next) => {
    try {
      let result = await CartItem.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: "Cart item deleted successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

export default cartItemRoutes;
