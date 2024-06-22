import express from "express";
import path from "path";
import cors from "cors";

const app = express();

app.use(cors());

const __dirname = path.resolve(); // Определяем __dirname для использования с path

app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "src/client/images")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;
