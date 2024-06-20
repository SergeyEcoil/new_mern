import express from "express";
import path from "path";
import cors from "cors";
import http from "http";
import { Server as WebsocketServer } from "socket.io";
import { connectDB } from "./db";
import sockets from "./sockets";
import { PORT } from "./config";

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const webpackConfig = require("../../webpack.config.js");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, "../../public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public", "index.html"));
});

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const io = new WebsocketServer(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

sockets(io);
