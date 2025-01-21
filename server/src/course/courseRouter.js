import express from "express";
import multer from "multer";
import path from "node:path";
import { fileURLToPath } from "node:url"; // Import to resolve __dirname
import authenticate from "../middlewares/authenticate.js";
import { createCourse } from "./courseController.js";

const courseRouter = express.Router();

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer
const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 1e7 }, // Set file size limit (10MB)
});

// Routes
courseRouter.post(
  "/",
  authenticate,
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  createCourse
);

export default courseRouter;
