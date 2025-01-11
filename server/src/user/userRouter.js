import express from "express";
import {
  validateCreateUser,
  validateLoginUser,
} from "../middlewares/userValidation.js";
import { createUser, loginUser } from "./userController.js";

const userRouter = express.Router();

// routes
userRouter.post("/register", validateCreateUser, createUser);
userRouter.post("/login", validateLoginUser, loginUser);

export default userRouter;
