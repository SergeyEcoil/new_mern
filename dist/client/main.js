"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _App = _interopRequireDefault(require("./App"));
var root = (0, _client.createRoot)(document.getElementById("root"));
root.render( /*#__PURE__*/_react["default"].createElement(_App["default"], null));
if (module.hot) {
  module.hot.accept("./App", function () {
    var NextApp = require("./App")["default"];
    root.render( /*#__PURE__*/_react["default"].createElement(NextApp, null));
  });
}