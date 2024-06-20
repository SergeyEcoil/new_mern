"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cors = _interopRequireDefault(require("cors"));
var _http = _interopRequireDefault(require("http"));
var _socket = require("socket.io");
var _db = require("./db");
var _sockets = _interopRequireDefault(require("./sockets"));
var _config = require("./config");
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
if (process.env.NODE_ENV === "development") {
  var webpack = require("webpack");
  var webpackConfig = require("../../webpack.config.js");
  var webpackDevMiddleware = require("webpack-dev-middleware");
  var webpackHotMiddleware = require("webpack-hot-middleware");
  var compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
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