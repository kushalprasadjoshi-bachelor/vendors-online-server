import { Router } from "express";
import OrderItem from "../schemas/orderItemSchema.js";

const orderItemRoutes = Router();

orderItemRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await OrderItem.create(req.body);

      res.json({
        success: true,
        message: "Order item added successfully!",
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
      let result = await OrderItem.find();

      res.json({
        success: true,
        message: "Order items fetched successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

orderItemRoutes
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await OrderItem.findById(req.params.id);

      res.json({
        success: true,
        message: "Order item fetched successfully!",
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
      let result = await OrderItem.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "Order item updated successfully!",
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
      let result = await OrderItem.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: "Order item deleted successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

export default orderItemRoutes;
