import { Router } from "express";
import User from "../schemas/userSchema.js";

const userRoutes = Router();

userRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let result = await User.create(req.body);

      res.json({
        success: true,
        message: "User created successfully!",
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
      let result = await User.find();

      res.json({
        success: true,
        message: "Users fetched successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

userRoutes
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await User.findById(req.params.id);

      res.json({
        success: true,
        message: "User fetched successfully!",
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
      let result = await User.findByIdAndUpdate(req.params.id, req.body);

      res.json({
        success: true,
        message: "User updated successfully!",
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
      let result = await User.findByIdAndDelete(req.params.id);

      res.json({
        success: true,
        message: "User deleted successfully!",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  });

export default userRoutes;
