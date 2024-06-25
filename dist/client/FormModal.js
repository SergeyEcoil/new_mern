"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormModal = function FormModal(_ref) {
  var formVisible = _ref.formVisible,
    handleFormSubmit = _ref.handleFormSubmit,
    formData = _ref.formData,
    setFormData = _ref.setFormData,
    handleCancel = _ref.handleCancel;
  return formVisible && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    className: "bg-white p-6 rounded shadow-md w-full max-w-md",
    onSubmit: handleFormSubmit
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434",
    value: formData.city,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        city: e.target.value
      }));
    },
    required: true
  }), /*#__PURE__*/_react["default"].createElement("textarea", {
    rows: "1",
    className: "form-textarea w-full mb-3 px-4 py-2",
    placeholder: "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0444\u0435",
    value: formData.description,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        description: e.target.value
      }));
    },
    required: true
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "tel",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
    value: formData.phone,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        phone: e.target.value
      }));
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0443\u043B\u0438\u0446\u0443",
    value: formData.street,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        street: e.target.value
      }));
    },
    required: true
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "tel",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0434\u043E\u043C\u0430",
    value: formData.house,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        house: e.target.value
      }));
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "tel",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0432\u0435\u0441",
    value: formData.weight,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        weight: e.target.value
      }));
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "tel",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0442\u043E\u0432\u0430\u0440",
    value: formData.usedprice,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        usedprice: e.target.value
      }));
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0417\u0430\u043A\u0430\u0437",
    value: formData.order,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        order: e.target.value
      }));
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u041C\u0430\u0441\u043B\u043E \u0434\u043B\u044F \u0444\u0440\u0438\u0442\u044E\u0440\u0430",
    value: formData.fryoil,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        fryoil: e.target.value
      }));
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "tel",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0426\u0435\u043D\u0430 \u043C\u0430\u0441\u043B\u0430 \u0434\u043B\u044F \u0444\u0440\u0438\u0442\u044E\u0440\u0430",
    value: formData.fryprice,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        fryprice: e.target.value
      }));
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B",
    value: formData.worktime,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        worktime: e.target.value
      }));
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "w-50 h-10 bg-gray-500 text-white px-4 py-2 rounded mr-2",
    onClick: handleCancel
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "w-50 h-10 bg-blue-500 text-white px-4 py-2 rounded"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))));
};
var _default = exports["default"] = FormModal;