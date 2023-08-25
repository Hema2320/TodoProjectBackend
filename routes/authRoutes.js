import express from "express";
import authController from "../controller/authController.js";
import checkIsUserAuthenticated from "../middlewares/authMiddleware.js";
const authRoutes = express.Router();

authRoutes.post("/users/register", authController.userRegistration);
authRoutes.post("/users/login", authController.userLogin);

// Forget Password

authRoutes.post("/forget-password", authController.forgetPassword);
authRoutes.post("/forget-password/:id/:token", authController.forgetPasswordEmail);

// Email Verification

authRoutes.get("/verify/:token", authController.saveVerifiedEmail);

// Protected Routes

authRoutes.post(
  "/change-password",
  checkIsUserAuthenticated,
  authController.changePassword
);
export default authRoutes;
