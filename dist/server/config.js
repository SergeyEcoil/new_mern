"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB_URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB_URI = exports.MONGODB_URI = process.env.MONGODB_URI;
var PORT = exports.PORT = process.env.PORT || 3000;