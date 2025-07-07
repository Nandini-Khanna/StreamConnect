import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://nandini01:2710nan@clustzoom.jpedqwb.mongodb.net/?retryWrites=true&w=majority&appName=Clustzoom")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}

//const start = async () => {
//  try {
//    const MONGO_URI = "mongodb+srv://2k22csaiml32633:cdlWxaRLvJItugtK@cluster0.dyvuoxp.mongodb.net/";
//
//    const connectionDb = await mongoose.connect(MONGO_URI, {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//    });
//
//    console.log(`✅ MongoDB Connected: ${connectionDb.connection.host}`);
//
//    server.listen(app.get("port"), () => {
//      console.log(`🚀 Server listening on PORT ${app.get("port")}`);
//    });
//  } catch (error) {
//    console.error("❌ MongoDB Connection Failed:", error.message);
//    process.exit(1); // Optional: stop server if DB not connected
//  }
//};




start();