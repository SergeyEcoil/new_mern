"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cors = _interopRequireDefault(require("cors"));
var _webpack = _interopRequireDefault(require("webpack"));
var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));
var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));
var _webpackConfig = _interopRequireDefault(require("../../webpack.config.js"));
var app = (0, _express["default"])();
var compiler = (0, _webpack["default"])(_webpackConfig["default"]);
app.use((0, _cors["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../../public")));

// Использование webpack-dev-middleware
app.use((0, _webpackDevMiddleware["default"])(compiler, {
  publicPath: _webpackConfig["default"].output.publicPath
}));

// Использование webpack-hot-middleware
app.use((0, _webpackHotMiddleware["default"])(compiler));
app.get("*", function (req, res) {
  res.sendFile(_path["default"].join(__dirname, "../../public", "index.html"));
});
var _default = exports["default"] = app;