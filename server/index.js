import express from 'express';
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";
import { connectDB } from './lib/db.js'


dotenv.config(); 

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

// ✅ CORS setup for all routes, dev only
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true, // needed if using cookies or auth headers
     
    })
  );
}




app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);




const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectDB()
});
