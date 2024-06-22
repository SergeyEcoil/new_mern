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
var _Header = _interopRequireDefault(require("./Header"));
var _NoteCard = _interopRequireDefault(require("./NoteCard"));
var _FormModal = _interopRequireDefault(require("./FormModal"));
var _PhoneModal = _interopRequireDefault(require("./PhoneModal"));
require("animate.css");
require("./styles.css");
var _socket = require("./socket");
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
  var _useState5 = (0, _react.useState)(""),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    selectedCity = _useState6[0],
    setSelectedCity = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    showOnlyOrderOne = _useState8[0],
    setShowOnlyOrderOne = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    formVisible = _useState10[0],
    setFormVisible = _useState10[1];
  var _useState11 = (0, _react.useState)({
      city: "",
      description: "",
      phone: "",
      street: "",
      house: "",
      weight: "",
      usedprice: "",
      order: "",
      fryoil: "",
      fryprice: "",
      worktime: ""
    }),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    formData = _useState12[0],
    setFormData = _useState12[1];
  var _useState13 = (0, _react.useState)(""),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    editingId = _useState14[0],
    setEditingId = _useState14[1];
  var _useState15 = (0, _react.useState)(""),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    animateCard = _useState16[0],
    setAnimateCard = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    phoneModalVisible = _useState18[0],
    setPhoneModalVisible = _useState18[1];
  var _useState19 = (0, _react.useState)(""),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    phoneInput = _useState20[0],
    setPhoneInput = _useState20[1];
  var _useState21 = (0, _react.useState)(""),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    currentNoteId = _useState22[0],
    setCurrentNoteId = _useState22[1];
  (0, _react.useEffect)(function () {
    (0, _socket.loadNotes)(function (loadedNotes) {
      return setNotes(loadedNotes);
    });
    (0, _socket.onNewNote)(function (newNote) {
      setNotes(function (prevNotes) {
        var noteExists = prevNotes.some(function (note) {
          return note._id === newNote._id;
        });
        if (noteExists) {
          return prevNotes;
        } else {
          setAnimateCard(newNote._id);
          return [].concat((0, _toConsumableArray2["default"])(prevNotes), [newNote]);
        }
      });
    });
    (0, _socket.onUpdateNote)(function (updatedNote) {
      return setNotes(function (prevNotes) {
        return prevNotes.map(function (note) {
          return note._id === updatedNote._id ? (setAnimateCard(updatedNote._id), updatedNote) : note;
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
      street: "",
      house: "",
      weight: "",
      usedprice: "",
      order: "",
      fryoil: "",
      fryprice: "",
      worktime: ""
    });
  };
  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    if (editingId) {
      (0, _socket.updateNote)(editingId, formData);
    } else {
      (0, _socket.saveNote)(formData);
    }
    setFormVisible(false);
    setFormData({
      city: "",
      description: "",
      phone: "",
      street: "",
      house: "",
      weight: "",
      usedprice: "",
      order: "",
      fryoil: "",
      fryprice: "",
      worktime: ""
    });
  };
  var handleCancel = function handleCancel() {
    setFormVisible(false);
    setFormData({
      city: "",
      description: "",
      phone: "",
      street: "",
      house: "",
      weight: "",
      usedprice: "",
      order: "",
      fryoil: "",
      fryprice: "",
      worktime: ""
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
  var handleCityChange = function handleCityChange(e) {
    setSelectedCity(e.target.value.trim().toLowerCase());
  };
  var toggleShowOnlyOrderOne = function toggleShowOnlyOrderOne() {
    setShowOnlyOrderOne(!showOnlyOrderOne);
  };
  var filteredNotes = notes.filter(function (note) {
    var matchesCity = selectedCity ? note.city.trim().toLowerCase() === selectedCity : true;
    var matchesOrder = showOnlyOrderOne ? note.order === "1" : true;
    var matchesSearch = note.city.toLowerCase().includes(searchText.toLowerCase()) || note.description.toLowerCase().includes(searchText.toLowerCase()) || note.street.toLowerCase().includes(searchText.toLowerCase());
    return matchesCity && matchesOrder && matchesSearch;
  });
  var uniqueCities = (0, _toConsumableArray2["default"])(new Set(notes.map(function (note) {
    return note.city.trim().toLowerCase();
  })));
  var handlePhoneClick = function handlePhoneClick(id) {
    var note = notes.find(function (note) {
      return note._id === id;
    });
    if (!note.phone) {
      setPhoneModalVisible(true);
      setCurrentNoteId(id);
    }
  };
  var handlePhoneSubmit = function handlePhoneSubmit() {
    if (phoneInput && currentNoteId) {
      var noteToUpdate = notes.find(function (note) {
        return note._id === currentNoteId;
      });
      (0, _socket.updateNote)(currentNoteId, _objectSpread(_objectSpread({}, noteToUpdate), {}, {
        phone: phoneInput
      }));
      setPhoneModalVisible(false);
      setPhoneInput("");
    }
  };
  var handlePhoneCancel = function handlePhoneCancel() {
    setPhoneModalVisible(false);
    setPhoneInput("");
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    searchText: searchText,
    handleSearchChange: handleSearchChange,
    handleAddNoteClick: handleAddNoteClick,
    selectedCity: selectedCity,
    handleCityChange: handleCityChange,
    uniqueCities: uniqueCities,
    showOnlyOrderOne: showOnlyOrderOne,
    toggleShowOnlyOrderOne: toggleShowOnlyOrderOne
  }), /*#__PURE__*/_react["default"].createElement(_FormModal["default"], {
    formVisible: formVisible,
    handleFormSubmit: handleFormSubmit,
    formData: formData,
    setFormData: setFormData,
    handleCancel: handleCancel
  }), /*#__PURE__*/_react["default"].createElement(_PhoneModal["default"], {
    phoneModalVisible: phoneModalVisible,
    phoneInput: phoneInput,
    setPhoneInput: setPhoneInput,
    handlePhoneSubmit: handlePhoneSubmit,
    handlePhoneCancel: handlePhoneCancel
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pt-32"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "notes"
  }, filteredNotes.map(function (note) {
    return /*#__PURE__*/_react["default"].createElement(_NoteCard["default"], {
      key: note._id,
      note: note,
      animateCard: animateCard,
      setAnimateCard: setAnimateCard,
      handlePhoneClick: handlePhoneClick,
      handleDeleteNote: handleDeleteNote,
      handleEditNote: handleEditNote
    });
  }))));
};
var _default = exports["default"] = App;