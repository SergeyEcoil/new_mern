"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _reactSelect = _interopRequireDefault(require("react-select"));
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
    clearSearch = _ref.clearSearch,
    handleSortToggle = _ref.handleSortToggle,
    isSortByStreet = _ref.isSortByStreet;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    searchButtonActive = _useState2[0],
    setSearchButtonActive = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    cityButtonActive = _useState4[0],
    setCityButtonActive = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    showSearch = _useState6[0],
    setShowSearch = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    showSelect = _useState8[0],
    setShowSelect = _useState8[1];
  var _useState9 = (0, _react.useState)(new Date()),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    currentDateTime = _useState10[0],
    setCurrentDateTime = _useState10[1];
  (0, _react.useEffect)(function () {
    window.addEventListener("scroll", isSticky);
    return function () {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  (0, _react.useEffect)(function () {
    var timer = setInterval(function () {
      return setCurrentDateTime(new Date());
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, []);
  var formatDateTime = function formatDateTime(date) {
    var day = String(date.getDate()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var hours = String(date.getHours()).padStart(2, "0");
    var minutes = String(date.getMinutes()).padStart(2, "0");
    return "".concat(day, ".").concat(month, " ").concat(hours, ":").concat(minutes);
  };
  var isSticky = function isSticky() {
    var header = document.querySelector(".header-section");
    var scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add("is-sticky") : header.classList.remove("is-sticky");
  };
  var cityOptions = uniqueCities.map(function (city) {
    return {
      value: city,
      label: city
    };
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-section glass-effect"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-top w-full p-2 flex items-center gap-2"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleAddNoteClick,
    className: "text-white bg-gray-300 flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaPlus, null)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleShowOnlyOrderOne,
    className: " ".concat(showOnlyOrderOne ? "bg-green-400" : "bg-gray-300", " text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md")
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaList, null)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      setShowSearch(!showSearch);
      setSearchButtonActive(!searchButtonActive);
    },
    className: " ".concat(searchButtonActive ? "bg-green-400" : "bg-gray-300", " text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md")
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaSearch, null)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      setShowSelect(!showSelect);
      setCityButtonActive(!cityButtonActive);
    },
    className: " ".concat(cityButtonActive ? "bg-green-400" : "bg-gray-300", " text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md")
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaCity, null)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSortToggle,
    className: " ".concat(isSortByStreet ? "bg-green-400" : "bg-gray-300", " text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md")
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaSortAlphaDown, null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-[11px] bg-gray-300 w-[65px] h-[25px] flex justify-center items-center rounded shadow-md"
  }, formatDateTime(currentDateTime))), showSelect && /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-select w-full p-2"
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
    className: "header-search w-full p-2"
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