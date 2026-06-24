import { Router } from "express";
import Order from "../schemas/orderSchema.js";

const orderRoutes = Router();

orderRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await Order.create(req.body);

      res.json({
        success: true,
        message: "Order added successfully!",
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
      let result = await Order.find();

      res.json({
        success: true,
        message: "Orders fetched successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

orderRoutes
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await Order.findById(req.params.id);

      res.json({
        success: true,
        message: "Order fetched successfully!",
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
      let result = await Order.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "Order updated successfully!",
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
      let result = await Order.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: "Order deleted successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

export default orderRoutes;
