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
var _Header = _interopRequireDefault(require("./Header.js"));
var _NoteCard = _interopRequireDefault(require("./NoteCard.js"));
var _FormModal = _interopRequireDefault(require("./FormModal.js"));
var _PhoneModal = _interopRequireDefault(require("./PhoneModal.js"));
require("animate.css");
require("./styles.css");
var _socket = require("./socket.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var App = function App() {
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    notes = _useState2[0],
    setNotes = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    allNotes = _useState4[0],
    setAllNotes = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    searchText = _useState6[0],
    setSearchText = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    selectedCities = _useState8[0],
    setSelectedCities = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    showOnlyOrderOne = _useState10[0],
    setShowOnlyOrderOne = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    formVisible = _useState12[0],
    setFormVisible = _useState12[1];
  var _useState13 = (0, _react.useState)({
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
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    formData = _useState14[0],
    setFormData = _useState14[1];
  var _useState15 = (0, _react.useState)(""),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    editingId = _useState16[0],
    setEditingId = _useState16[1];
  var _useState17 = (0, _react.useState)(""),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    animateCard = _useState18[0],
    setAnimateCard = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    phoneModalVisible = _useState20[0],
    setPhoneModalVisible = _useState20[1];
  var _useState21 = (0, _react.useState)(""),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    phoneInput = _useState22[0],
    setPhoneInput = _useState22[1];
  var _useState23 = (0, _react.useState)(""),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    currentNoteId = _useState24[0],
    setCurrentNoteId = _useState24[1];
  var _useState25 = (0, _react.useState)(true),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    isSortByStreet = _useState26[0],
    setIsSortByStreet = _useState26[1];
  (0, _react.useEffect)(function () {
    (0, _socket.loadNotes)(function (loadedNotes) {
      setNotes(loadedNotes);
      setAllNotes(loadedNotes);
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
      setAllNotes(function (prevNotes) {
        var noteExists = prevNotes.some(function (note) {
          return note._id === newNote._id;
        });
        if (noteExists) {
          return prevNotes;
        } else {
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
      setNotes(function (prevNotes) {
        return prevNotes.filter(function (note) {
          return note._id !== id;
        });
      });
      setAllNotes(function (prevNotes) {
        return prevNotes.filter(function (note) {
          return note._id !== id;
        });
      });
    });
  }, []);
  var handleSearchChange = function handleSearchChange(event) {
    var value = event.target.value;
    setSearchText(value);
    if (value.trim() === "") {
      setNotes(allNotes);
    } else {
      var _filteredNotes = allNotes.filter(function (note) {
        return note.city.toLowerCase().includes(value.toLowerCase()) || note.description.toLowerCase().includes(value.toLowerCase()) || note.street.toLowerCase().includes(value.toLowerCase());
      });
      setNotes(_filteredNotes);
    }
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
  var handleCityChange = function handleCityChange(selectedOptions) {
    setSelectedCities(selectedOptions || []);
  };
  var toggleShowOnlyOrderOne = function toggleShowOnlyOrderOne() {
    setShowOnlyOrderOne(!showOnlyOrderOne);
  };
  var clearSearch = function clearSearch() {
    setSearchText("");
    setNotes(allNotes);
  };
  var handleSortToggle = function handleSortToggle() {
    var sortedNotes = (0, _toConsumableArray2["default"])(notes).sort(function (a, b) {
      return isSortByStreet ? a.street.localeCompare(b.street) : a.description.localeCompare(b.description);
    });
    setNotes(sortedNotes);
    setIsSortByStreet(!isSortByStreet);
  };
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
  var filteredNotes = notes.filter(function (note) {
    var matchesCity = selectedCities.length > 0 ? selectedCities.map(function (option) {
      return option.value;
    }).includes(note.city.trim().toLowerCase()) : true;
    var matchesOrder = showOnlyOrderOne ? note.order === "1" : true;
    var matchesSearch = note.city.toLowerCase().includes(searchText.toLowerCase()) || note.description.toLowerCase().includes(searchText.toLowerCase()) || note.street.toLowerCase().includes(searchText.toLowerCase());
    return matchesCity && matchesOrder && matchesSearch;
  });
  var uniqueCities = (0, _toConsumableArray2["default"])(new Set(allNotes.map(function (note) {
    return note.city.trim().toLowerCase();
  })));
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    searchText: searchText,
    handleSearchChange: handleSearchChange,
    handleAddNoteClick: handleAddNoteClick,
    selectedCities: selectedCities,
    handleCityChange: handleCityChange,
    uniqueCities: uniqueCities,
    showOnlyOrderOne: showOnlyOrderOne,
    toggleShowOnlyOrderOne: toggleShowOnlyOrderOne,
    clearSearch: clearSearch,
    handleSortToggle: handleSortToggle,
    isSortByStreet: isSortByStreet
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
    className: "content"
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