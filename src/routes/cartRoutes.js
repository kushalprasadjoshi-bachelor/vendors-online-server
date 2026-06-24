import { Router } from "express";
import Cart from "../schemas/cartSchema.js";

const cartRoutes = Router();

cartRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await Cart.create(req.body);

      res.json({
        success: true,
        message: "Cart added successfully!",
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
      let result = await Cart.find();

      res.json({
        success: true,
        message: "Carts fetched successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

cartRoutes
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await Cart.findById(req.params.id);

      res.json({
        success: true,
        message: "Cart fetched successfully!",
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
      let result = await Cart.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "Cart updated successfully!",
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
      let result = await Cart.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: "Cart deleted successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

export default cartRoutes;
