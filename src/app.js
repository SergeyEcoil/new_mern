import express from "express";
import path from "path";
import cors from "cors";

const app = express();

app.use(cors()); // Добавьте это

app.use(express.static(path.join(__dirname, "public")));

export default app;
