import { config } from "../config/config.js";

const globalErrorHandler = (err, req, res) => {
  const error = err;
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    message: error.message,
    errorStack: config.env === "development" ? error.stack : "",
  });
};

export default globalErrorHandler;
