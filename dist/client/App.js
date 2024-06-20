"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _socket = require("./socket");
require("./styles.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var App = function App() {
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    notes = _useState2[0],
    setNotes = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    searchText = _useState4[0],
    setSearchText = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    formVisible = _useState6[0],
    setFormVisible = _useState6[1];
  var _useState7 = (0, _react.useState)({
      city: "",
      description: "",
      phone: "",
      address: ""
    }),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    formData = _useState8[0],
    setFormData = _useState8[1];
  var _useState9 = (0, _react.useState)(""),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    editingId = _useState10[0],
    setEditingId = _useState10[1];
  (0, _react.useEffect)(function () {
    (0, _socket.loadNotes)(function (loadedNotes) {
      return setNotes(loadedNotes);
    });
    (0, _socket.onNewNote)(function (newNote) {
      return setNotes(function (prevNotes) {
        return [].concat((0, _toConsumableArray2["default"])(prevNotes), [newNote]);
      });
    });
    (0, _socket.onUpdateNote)(function (updatedNote) {
      return setNotes(function (prevNotes) {
        return prevNotes.map(function (note) {
          return note._id === updatedNote._id ? updatedNote : note;
        });
      });
    });
    (0, _socket.onDeleteNote)(function (id) {
      return setNotes(function (prevNotes) {
        return prevNotes.filter(function (note) {
          return note._id !== id;
        });
      });
    });
  }, []);
  var handleSearchChange = function handleSearchChange(e) {
    setSearchText(e.target.value);
  };
  var handleAddNoteClick = function handleAddNoteClick() {
    setFormVisible(true);
    setEditingId("");
    setFormData({
      city: "",
      description: "",
      phone: "",
      address: ""
    });
  };
  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    if (editingId) {
      (0, _socket.updateNote)(editingId, formData.city, formData.description, formData.phone, formData.address);
    } else {
      (0, _socket.saveNote)(formData.city, formData.description, formData.phone, formData.address);
    }
    setFormVisible(false);
    setFormData({
      city: "",
      description: "",
      phone: "",
      address: ""
    });
  };
  var handleEditNote = function handleEditNote(id) {
    (0, _socket.getNoteById)(id, function (note) {
      setFormData(note);
      setEditingId(id);
      setFormVisible(true);
    });
  };
  var handleDeleteNote = function handleDeleteNote(id) {
    (0, _socket.deleteNote)(id);
  };
  var handleCancel = function handleCancel() {
    setFormVisible(false);
    setFormData({
      city: "",
      description: "",
      phone: "",
      address: ""
    });
    setEditingId("");
  };
  var filteredNotes = notes.filter(function (note) {
    return note.city.toLowerCase().includes(searchText.toLowerCase()) || note.description.toLowerCase().includes(searchText.toLowerCase()) || note.address.toLowerCase().includes(searchText.toLowerCase());
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input rounded px-4 py-2",
    placeholder: "\u041F\u043E\u0438\u0441\u043A...",
    value: searchText,
    onChange: handleSearchChange
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-dark bg-green-400 text-white px-4 py-2 rounded ml-4",
    onClick: handleAddNoteClick
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), formVisible && /*#__PURE__*/_react["default"].createElement("form", {
    className: "bg-[#ecf0dc] p-4 rounded shadow-md mb-4",
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
    type: "text",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
    value: formData.phone,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        phone: e.target.value
      }));
    },
    required: true
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input w-full mb-3 px-4 py-2",
    placeholder: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441",
    value: formData.address,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        address: e.target.value
      }));
    },
    required: true
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "btn btn-dark bg-blue-500 text-white px-4 py-2 rounded"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary bg-gray-500 text-white px-4 py-2 rounded",
    onClick: handleCancel
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "notes"
  }, filteredNotes.map(function (note) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: note._id,
      className: "note-card bg-white shadow-md rounded p-4 mb-4 animate__animated animate__fadeInRight"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex justify-between items-center mb-2"
    }, /*#__PURE__*/_react["default"].createElement("h1", {
      className: "text-xl font-bold"
    }, note.city || "Unknown City"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
      className: "delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2",
      onClick: function onClick() {
        return handleDeleteNote(note._id);
      }
    }, "Delete"), /*#__PURE__*/_react["default"].createElement("button", {
      className: "update bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded",
      onClick: function onClick() {
        return handleEditNote(note._id);
      }
    }, "Update"))), /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-gray-700 mb-1"
    }, note.description || "No description"), /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-gray-700 mb-1"
    }, note.phone || "No phone"), /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-gray-700"
    }, note.address || "No address"));
  })));
};
var _default = exports["default"] = App;