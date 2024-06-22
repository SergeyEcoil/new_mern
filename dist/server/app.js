"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cors = _interopRequireDefault(require("cors"));
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
var _dirname = _path["default"].resolve(); // Определяем __dirname для использования с path

app.use(_express["default"]["static"](_path["default"].join(_dirname, "public")));
app.use("/images", _express["default"]["static"](_path["default"].join(_dirname, "src/client/images")));
app.get("*", function (req, res) {
  res.sendFile(_path["default"].join(_dirname, "public", "index.html"));
});
var _default = exports["default"] = app;