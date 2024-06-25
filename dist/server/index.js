"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
var _socket = require("socket.io");
var _http = _interopRequireDefault(require("http"));
var _db = require("./db.js");
var _sockets = _interopRequireDefault(require("./sockets.js"));
var _config = require("./config.js");
(0, _db.connectDB)();
var server = _http["default"].createServer(_app["default"]);
var httpServer = server.listen(_config.PORT);
console.log("Server is running on port", _config.PORT);
var io = new _socket.Server(httpServer, {
  cors: {
    origin: "*",
    // Разрешить запросы с любого домена
    methods: ["GET", "POST"]
  }
});
(0, _sockets["default"])(io);