import createHttpError from "http-errors";
import userModel from "../user/userModel";

const authorize = (roles) => {
  return async (req, res, next) => {
    try {
      const user = await userModel.findById(req.userId);

      if (!user) {
        return next(createHttpError(404, "User not found"));
      }

      if (!roles.includes(user.role)) {
        return next(createHttpError(403, "Access denied"));
      }

      next();
    } catch (error) {
      return next(createHttpError(500, "Error during authorization"));
    }
  };
};

export default authorize;