"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cors = _interopRequireDefault(require("cors"));
var _http = _interopRequireDefault(require("http"));
var _socket = require("socket.io");
var _webpack = _interopRequireDefault(require("webpack"));
var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));
var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));
var _webpack2 = _interopRequireDefault(require("../../webpack.config"));
var _db = require("./db");
var _sockets = _interopRequireDefault(require("./sockets"));
var _config = require("./config");
var app = (0, _express["default"])();
var compiler = (0, _webpack["default"])(_webpack2["default"]);
app.use((0, _cors["default"])());
if (process.env.NODE_ENV === "development") {
  app.use((0, _webpackDevMiddleware["default"])(compiler, {
    publicPath: _webpack2["default"].output.publicPath
  }));
  app.use((0, _webpackHotMiddleware["default"])(compiler));
}
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../../public")));
app.get("*", function (req, res) {
  res.sendFile(_path["default"].join(__dirname, "../../public", "index.html"));
});
(0, _db.connectDB)();
var server = _http["default"].createServer(app);
var httpServer = server.listen(_config.PORT, function () {
  console.log("Server is running on port ".concat(_config.PORT));
});
var io = new _socket.Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
(0, _sockets["default"])(io);