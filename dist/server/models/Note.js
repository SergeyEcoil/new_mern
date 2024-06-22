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
  street: {
    type: String,
    required: true
  },
  house: {
    type: String
  },
  weight: {
    type: String
  },
  usedprice: {
    type: String
  },
  order: {
    type: String
  },
  fryoil: {
    type: String
  },
  fryprice: {
    type: String
  },
  worktime: {
    type: String
  }
}, {
  timestamps: true
});
var _default = exports["default"] = (0, _mongoose.model)("Note", schema);