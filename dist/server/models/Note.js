"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var schema = new _mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var _default = exports["default"] = (0, _mongoose.model)('Note', schema);