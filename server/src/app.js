import express from "express";
import mongoose from "mongoose";
import AuthMiddleware from "./middlewares/AuthMidleware.js";
import apiRoute, { apiProtected } from "./routes/api.js";
const app = express();
const DB_CONNECT="#";
mongoose.set("strictQuery", false);
mongoose.connect(DB_CONNECT, {useNewUrlParser:true}, (e)=>console.log(e));



mongoose.connect(DB_CONNECT, { useNewUrlParser: true }, (e) => console.log(e));

const PORT = 8000;

app.use(express.json());
app.use("/api/", apiRoute);
app.use("/api/", AuthMiddleware, apiProtected);

app.listen(PORT, () => console.log("server is running"));
