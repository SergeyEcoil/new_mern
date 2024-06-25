import app from "./app.js";
import { Server as WebsocketServer } from "socket.io";
import http from "http";
import { connectDB } from "./db.js";
import sockets from "./sockets.js";
import { PORT } from "./config.js";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(PORT);
console.log("Server is running on port", PORT);

const io = new WebsocketServer(httpServer, {
  cors: {
    origin: "*", // Разрешить запросы с любого домена
    methods: ["GET", "POST"],
  },
});

sockets(io);
