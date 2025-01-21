import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

const authenticate = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return next(createHttpError(401, "Authorization token is required."));
  }

  if (!token.startsWith("Bearer ")) {
    return next(createHttpError(401, "Invalid authorization token format."));
  }

  const parsedToken = token.split(" ")[1];

  if (!parsedToken) {
    return next(createHttpError(401, "Invalid authorization token."));
  }

  try {
    const decoded = jwt.verify(parsedToken, config.jwtSecret);
    req.userId = decoded.sub; // Attach `userId` to the request object
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(createHttpError(401, "Token expired."));
    } else {
      return next(createHttpError(401, "Invalid token."));
    }
  }
};

export default authenticate;
