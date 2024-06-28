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
  var handleWeightChange = function handleWeightChange(e) {
    var weightValue = e.target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      weight: [{
        value: weightValue,
        date: new Date().toISOString()
      }]
    }));
  };
  var handleFryoilChange = function handleFryoilChange(e) {
    var fryoilValue = e.target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      fryoil: [{
        value: fryoilValue,
        date: new Date().toISOString()
      }]
    }));
  };
  return formVisible && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    className: "bg-gray-100 p-4 rounded shadow-md w-full max-w-md",
    onSubmit: handleFormSubmit
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "w-2/5 text-[15px]"
  }, "\u0413\u043E\u0440\u043E\u0434:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-3/5 px-1 py-1",
    value: formData.city,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        city: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "w-2/5 text-[15px]"
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0444\u0435:"), /*#__PURE__*/_react["default"].createElement("textarea", {
    rows: "1",
    className: "form-textarea w-3/5 px-1 py-1",
    value: formData.description,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        description: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "w-2/5 text-[15px]"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "tel",
    className: "form-input w-3/5 px-1 py-1",
    value: formData.phone,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        phone: e.target.value
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "w-2/5 text-[15px]"
  }, "\u0423\u043B\u0438\u0446\u0430:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-3/5 px-1 py-1",
    value: formData.street,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        street: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "w-2/5 text-[15px]"
  }, "\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043C\u0430:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-3/5 px-1 py-1",
    value: formData.house,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        house: e.target.value
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "w-2/5 text-[15px]"
  }, "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0420/\u043A\u0433:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-3/5 px-1 py-1",
    value: formData.usedprice,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        usedprice: e.target.value
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "w-2/5 text-[15px]"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u0432\u044B\u0432\u043E\u0437:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-3/5 px-1 py-1",
    value: formData.order,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        order: e.target.value
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "w-2/5 text-[15px]"
  }, "\u0424\u0440\u0438\u0442\u044E\u0440 \u0420. \u0437\u0430 10\u043B.:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-3/5 px-1 py-1",
    value: formData.fryprice,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        fryprice: e.target.value
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "w-2/5 text-[15px]"
  }, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-3/5 px-1 py-1",
    value: formData.worktime,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        worktime: e.target.value
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "w-2/5 text-[15px]"
  }, "\u0417\u0430\u043A\u0430\u0437 \u0444\u0440\u0438\u0442\u044E\u0440\u0430 \u0448\u0442:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-3/5 px-1 py-1",
    value: formData.fryorder,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        fryorder: e.target.value
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "w-50 h-10 bg-red-900 text-white px-4 py-2 rounded mr-2",
    onClick: handleCancel
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "w-50 h-10 bg-green-900 text-white px-4 py-2 rounded"
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"))));
};
var _default = exports["default"] = FormModal;