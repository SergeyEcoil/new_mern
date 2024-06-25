"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _fa = require("react-icons/fa");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Header = function Header(_ref) {
  var searchText = _ref.searchText,
    handleSearchChange = _ref.handleSearchChange,
    handleAddNoteClick = _ref.handleAddNoteClick,
    selectedCities = _ref.selectedCities,
    handleCityChange = _ref.handleCityChange,
    uniqueCities = _ref.uniqueCities,
    showOnlyOrderOne = _ref.showOnlyOrderOne,
    toggleShowOnlyOrderOne = _ref.toggleShowOnlyOrderOne,
    clearSearch = _ref.clearSearch;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showSelect = _useState2[0],
    setShowSelect = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    showSearch = _useState4[0],
    setShowSearch = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    cityButtonActive = _useState6[0],
    setCityButtonActive = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    searchButtonActive = _useState8[0],
    setSearchButtonActive = _useState8[1];
  var cityOptions = uniqueCities.map(function (city) {
    return {
      value: city,
      label: city
    };
  });
  var toggleSelect = function toggleSelect() {
    setShowSelect(!showSelect);
    setCityButtonActive(!cityButtonActive);
  };
  var toggleSearch = function toggleSearch() {
    setShowSearch(!showSearch);
    setSearchButtonActive(!searchButtonActive);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed top-0 z-10 border h-[35px] bg-white w-full left-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-7 ml-9 mt-1"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleSelect,
    className: " ".concat(cityButtonActive ? "bg-green-400" : "bg-gray-300", " text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md")
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaCity, null), cityButtonActive && /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute left-0 right-0 h-1"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleSearch,
    className: " ".concat(searchButtonActive ? "bg-green-400" : "bg-gray-300", " text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md")
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaSearch, null), searchButtonActive && /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute left-0 right-0 h-1 "
  })), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleShowOnlyOrderOne,
    className: "btn ".concat(showOnlyOrderOne ? "bg-green-400" : "bg-gray-300", " text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md")
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaList, null)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleAddNoteClick,
    className: "flex justify-center items-center w-[45px] h-[25px] bg-gray-300 text-white rounded-lg shadow-md"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaPlus, null))), showSelect && /*#__PURE__*/_react["default"].createElement("div", {
    className: "animate__animated animate__slideInDown p-1"
  }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
    isMulti: true,
    isSearchable: true,
    value: selectedCities,
    onChange: handleCityChange,
    options: cityOptions,
    className: "basic-multi-select h-[35px] text-[12px]",
    classNamePrefix: "select",
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434\u0430..."
  })), showSearch && /*#__PURE__*/_react["default"].createElement("div", {
    className: "animate__animated animate__slideInDown p-1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative h-[35px] w-full"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "text-[12px] form-input border rounded px-2 py-1 w-full",
    placeholder: "\u041F\u043E\u0438\u0441\u043A...",
    value: searchText,
    onChange: handleSearchChange
  }), searchText && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: clearSearch,
    className: "absolute right-2 top-2 text-gray-500 hover:text-gray-700"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaTimes, null)))));
};
var _default = exports["default"] = Header;