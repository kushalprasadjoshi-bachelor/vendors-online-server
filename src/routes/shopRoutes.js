import { Router } from "express";
import Shop from "../schemas/shopSchema.js";

const shopRoutes = Router();

shopRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await Shop.create(req.body);

      res.json({
        success: true,
        message: "Shop created successfully!",
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
      let result = await Shop.find();

      res.json({
        success: true,
        message: "Shops fetched successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

shopRoutes
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await Shop.findById(req.params.id);

      res.json({
        success: true,
        message: "Shop fetched successfully!",
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
      let result = await Shop.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "Shop updated successfully!",
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
      let result = await Shop.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: "Shop deleted successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

export default shopRoutes;
