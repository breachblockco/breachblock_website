import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected successfully to database");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to database", err);
    });
    await mongoose.connect(config.databaseUrl);
  } catch (error) {
    console.error("Failed to connect with database", error);
    process.exit(1);
  }
};

export default connectDB;
