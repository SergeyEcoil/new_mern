"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var weightSchema = new _mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, {
  _id: false
});
var fryoilSchema = new _mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, {
  _id: false
});
var noteSchema = new _mongoose.Schema({
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
    type: [weightSchema],
    "default": []
  },
  fryoil: {
    type: [fryoilSchema],
    "default": []
  },
  fryorder: {
    type: String,
    "default": ""
  },
  usedprice: {
    type: String
  },
  order: {
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
var _default = exports["default"] = (0, _mongoose.model)("Note", noteSchema);