import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};
