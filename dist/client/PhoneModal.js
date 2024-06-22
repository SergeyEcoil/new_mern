"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var PhoneModal = function PhoneModal(_ref) {
  var phoneModalVisible = _ref.phoneModalVisible,
    phoneInput = _ref.phoneInput,
    setPhoneInput = _ref.setPhoneInput,
    handlePhoneSubmit = _ref.handlePhoneSubmit,
    handlePhoneCancel = _ref.handlePhoneCancel;
  return phoneModalVisible && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white p-4 rounded shadow-md w-full max-w-xs"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-4"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043D\u0435\u0442, \u043D\u043E \u0412\u044B \u0435\u0433\u043E \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "tel",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
    value: phoneInput,
    onChange: function onChange(e) {
      return setPhoneInput(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary bg-gray-500 text-white px-4 py-2 rounded mr-2",
    onClick: handlePhoneCancel
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-dark bg-blue-500 text-white px-4 py-2 rounded",
    onClick: handlePhoneSubmit
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))));
};
var _default = exports["default"] = PhoneModal;