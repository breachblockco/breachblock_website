import express from "express";
import userRouter from "./user/userRouter.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import courseRouter from "./course/courseRouter.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to breachblock" });
});

//router
app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter);

// global error handler
app.use(globalErrorHandler);

export default app;
