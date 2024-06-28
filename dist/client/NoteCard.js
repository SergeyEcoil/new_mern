"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("swiper/react");
require("swiper/css");
require("swiper/css/effect-creative");
var _modules = require("swiper/modules");
var _fa = require("react-icons/fa");
var _socket = require("./socket.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var NoteCard = function NoteCard(_ref) {
  var note = _ref.note,
    animateCard = _ref.animateCard,
    setAnimateCard = _ref.setAnimateCard,
    handlePhoneClick = _ref.handlePhoneClick,
    handleDeleteNote = _ref.handleDeleteNote,
    handleEditNote = _ref.handleEditNote;
  var _useState = (0, _react.useState)(""),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    newWeight = _useState2[0],
    setNewWeight = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    newFryoil = _useState4[0],
    setNewFryoil = _useState4[1];
  var handleAddWeight = function handleAddWeight() {
    if (newWeight.trim()) {
      var weightData = {
        value: newWeight,
        date: new Date().toISOString()
      };
      console.log("Adding weight data:", weightData); // Вывод в консоль на клиенте
      _socket.socket.emit("client:addweight", {
        id: note._id,
        weight: weightData
      });
      setNewWeight("");
      // Очистка поля order
      _socket.socket.emit("client:updateorder", {
        id: note._id,
        order: ""
      });
    }
  };
  var handleAddFryoil = function handleAddFryoil() {
    if (newFryoil.trim()) {
      var fryoilData = {
        value: newFryoil,
        date: new Date().toISOString()
      };
      console.log("Adding fryoil data:", fryoilData); // Вывод в консоль на клиенте
      _socket.socket.emit("client:addfryoil", {
        id: note._id,
        fryoil: fryoilData
      });
      setNewFryoil("");
      // Очистка поля fryorder
      _socket.socket.emit("client:updatefryorder", {
        id: note._id,
        fryorder: ""
      });
    }
  };
  var cardBackground = note.order === "1" ? "bg-pink-100" : "bg-gray-50";
  var formatDate = function formatDate(dateString) {
    var options = {
      day: "2-digit",
      month: "2-digit"
    };
    return new Date(dateString).toLocaleDateString("ru-RU", options);
  };
  var lastWeight = note.weight && note.weight.length > 0 ? note.weight[note.weight.length - 1] : null;
  var lastFryoil = note.fryoil && note.fryoil.length > 0 ? note.fryoil[note.fryoil.length - 1] : null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "shadow-md rounded mb-1 border ".concat(animateCard === note._id ? "animate__animated animate__fadeInRight" : ""),
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
    className: "w-full p-1 flex  items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center text-[12px] font-bold"
  }, note.city || "Unknown City"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-start text-[12px]"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700"
  }, note.description || "No description"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700"
  }, note.street || "No street"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700"
  }, note.house)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-end text-[12px]"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700"
  }, note.phone ? /*#__PURE__*/_react["default"].createElement("a", {
    href: "tel:".concat(note.phone),
    className: "text-blue-500 hover:text-blue-700"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaPhone, null)) : /*#__PURE__*/_react["default"].createElement(_fa.FaPhone, {
    className: "text-blue-500 hover:text-blue-700 cursor-pointer",
    onClick: function onClick() {
      return handlePhoneClick(note._id);
    }
  })), note.fryorder && /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-center border rounded-lg w-[30px] h-[40px] bg-white ml-2"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/images/oil3.png",
    alt: "Fry Order",
    className: "w-[25px] h-[35px]"
  }))))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, {
    className: "".concat(cardBackground, " swiper-slide-custom")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full p-1 flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center mb-2 text-[10px] gap-2"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 flex-grow"
  }, lastWeight ? "".concat(lastWeight.value, " \u043A\u0433 (").concat(formatDate(lastWeight.date), ")") : "No weight data"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "tel",
    className: "form-input flex-grow px-1 py-1",
    placeholder: "\u0412\u0435\u0441 \u043C\u0430\u0441\u043B\u0430",
    value: newWeight,
    onChange: function onChange(e) {
      return setNewWeight(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-1/4",
    onClick: handleAddWeight
  }, "\u0412\u043D\u0435\u0441\u0442\u0438")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center mb-2 text-[10px] gap-2"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 flex-grow"
  }, lastFryoil ? "".concat(lastFryoil.value, " \u0448\u0442 (").concat(formatDate(lastFryoil.date), ")") : "No fryoil data"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "tel",
    className: "form-input flex-grow px-1 py-1",
    placeholder: "\u0428\u0442 \u0444\u0440\u0438\u0442\u044E\u0440\u0430",
    value: newFryoil,
    onChange: function onChange(e) {
      return setNewFryoil(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-1/4",
    onClick: handleAddFryoil
  }, "\u0412\u043D\u0435\u0441\u0442\u0438")))), /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, {
    className: "".concat(cardBackground, " swiper-slide-custom")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full p-1 flex justify-between items-center"
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