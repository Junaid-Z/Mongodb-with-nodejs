import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()
const dbConnection = mongoose.createConnection(process.env.MONGO_URI).asPromise()
export default await dbConnection;
