import { Router } from "express";
import Transaction from "../schemas/transactionSchema.js";

const transactionRoutes = Router();

transactionRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await Transaction.create(req.body);

      res.json({
        success: true,
        message: "Transaction added successfully!",
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
      let result = await Transaction.find();

      res.json({
        success: true,
        message: "Transactions fetched successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

transactionRoutes
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await Transaction.findById(req.params.id);

      res.json({
        success: true,
        message: "Transaction fetched successfully!",
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
      let result = await Transaction.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "Transaction updated successfully!",
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
      let result = await Transaction.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: "Transaction deleted successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

export default transactionRoutes;
