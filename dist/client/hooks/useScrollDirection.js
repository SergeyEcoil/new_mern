"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var useScrollDirection = function useScrollDirection() {
  var _useState = (0, _react.useState)("up"),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    scrollDirection = _useState2[0],
    setScrollDirection = _useState2[1];
  (0, _react.useEffect)(function () {
    var lastScrollY = window.pageYOffset;
    var updateScrollDirection = function updateScrollDirection() {
      var scrollY = window.pageYOffset;
      var direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return function () {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);
  return scrollDirection;
};
var _default = exports["default"] = useScrollDirection;