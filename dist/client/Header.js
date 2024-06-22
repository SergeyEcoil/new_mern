"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var Header = function Header(_ref) {
  var searchText = _ref.searchText,
    handleSearchChange = _ref.handleSearchChange,
    handleAddNoteClick = _ref.handleAddNoteClick,
    selectedCity = _ref.selectedCity,
    handleCityChange = _ref.handleCityChange,
    uniqueCities = _ref.uniqueCities,
    showOnlyOrderOne = _ref.showOnlyOrderOne,
    toggleShowOnlyOrderOne = _ref.toggleShowOnlyOrderOne;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed top-0 left-0 right-0 bg-white shadow-md z-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center p-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    value: selectedCity,
    onChange: handleCityChange,
    className: "form-select rounded px-4 py-2 mr-4"
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "\u0412\u0441\u0435 \u0433\u043E\u0440\u043E\u0434\u0430"), uniqueCities.map(function (city) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: city,
      value: city
    }, city);
  })), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleShowOnlyOrderOne,
    className: "btn ".concat(showOnlyOrderOne ? "bg-red-500" : "bg-blue-500", " text-white px-4 py-2 rounded")
  }, showOnlyOrderOne ? "Показать все" : "Показать только Order 1"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center p-4"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input rounded px-4 py-2",
    placeholder: "\u041F\u043E\u0438\u0441\u043A...",
    value: searchText,
    onChange: handleSearchChange
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-dark bg-blue-500 text-white px-4 py-2 rounded ml-4",
    onClick: handleAddNoteClick
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
};
var _default = exports["default"] = Header;