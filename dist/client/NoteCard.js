"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("swiper/react");
require("swiper/css");
require("swiper/css/effect-creative");
var _modules = require("swiper/modules");
var _fa = require("react-icons/fa");
var NoteCard = function NoteCard(_ref) {
  var note = _ref.note,
    animateCard = _ref.animateCard,
    setAnimateCard = _ref.setAnimateCard,
    handlePhoneClick = _ref.handlePhoneClick,
    handleDeleteNote = _ref.handleDeleteNote,
    handleEditNote = _ref.handleEditNote;
  var cardBackground = note.order === "1" ? "bg-pink-100" : "bg-white";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "note-card shadow-md rounded mb-4 ".concat(animateCard === note._id ? "animate__animated animate__fadeInRight" : ""),
    onAnimationEnd: function onAnimationEnd() {
      return setAnimateCard("");
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Swiper, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1]
      },
      next: {
        translate: ["100%", 0, 0]
      }
    },
    modules: [_modules.EffectCreative],
    className: "mySwiper3"
  }, /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, {
    className: "".concat(cardBackground, " swiper-slide-custom")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slide-content p-4"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-xl font-bold mb-2"
  }, note.city || "Unknown City"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 mb-1"
  }, note.description || "No description"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 mb-1"
  }, note.street || "No street"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 mb-1"
  }, note.house), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 mb-1"
  }, note.phone ? /*#__PURE__*/_react["default"].createElement("a", {
    href: "tel:".concat(note.phone),
    className: "text-blue-500 hover:text-blue-700"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaPhone, null)) : /*#__PURE__*/_react["default"].createElement(_fa.FaPhone, {
    className: "text-blue-500 hover:text-blue-700 cursor-pointer",
    onClick: function onClick() {
      return handlePhoneClick(note._id);
    }
  })), note.fryoil && /*#__PURE__*/_react["default"].createElement("img", {
    src: "/images/oil3.png",
    alt: "Fry Oil",
    className: "w-12 h-12 mt-2"
  }))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, {
    className: "".concat(cardBackground, " swiper-slide-custom")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slide-content p-4"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700"
  }, note.weight), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700"
  }, note.usedprice), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700"
  }, note.order), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700"
  }, note.fryoil), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700"
  }, note.fryprice), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700"
  }, note.worktime))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, {
    className: "".concat(cardBackground, " swiper-slide-custom")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slide-content p-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded",
    onClick: function onClick() {
      return handleDeleteNote(note._id);
    }
  }, "Delete"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "update bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded",
    onClick: function onClick() {
      return handleEditNote(note._id);
    }
  }, "Update"))))));
};
var _default = exports["default"] = NoteCard;