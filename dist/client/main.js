"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _App = _interopRequireDefault(require("./App"));
require("./styles.css");
var container = document.getElementById("root");
var root = (0, _client.createRoot)(container); // Используем createRoot вместо ReactDOM.render
root.render( /*#__PURE__*/_react["default"].createElement(_App["default"], null));