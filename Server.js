import express from "express";
import dotenv from "dotenv";
dotenv.config()
import studentRouter from "./Routes/Students/StudentRoute.js";
const server = express()
server.use(express.json())
server.use('/students', studentRouter)
server.listen(process.env.PORT, () => {
  console.log(`Server running at port ` + process.env.PORT);
})
