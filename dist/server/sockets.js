"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Note = _interopRequireDefault(require("./models/Note.js"));
var _default = exports["default"] = function _default(io) {
  io.on("connection", function (socket) {
    console.log("New client connected: ".concat(socket.id));
    var emitNotes = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var notes;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Note["default"].find();
            case 2:
              notes = _context.sent;
              io.emit("server:loadnotes", notes);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function emitNotes() {
        return _ref.apply(this, arguments);
      };
    }();
    emitNotes();
    socket.on("client:newnote", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
        var newNote, savedNote;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!data.weight) {
                data.weight = [{
                  value: "0",
                  date: new Date().toISOString()
                }];
              }
              if (!data.fryoil) {
                data.fryoil = [{
                  value: "0",
                  date: new Date().toISOString()
                }];
              }
              newNote = new _Note["default"](data);
              _context2.prev = 3;
              _context2.next = 6;
              return newNote.save();
            case 6:
              savedNote = _context2.sent;
              io.emit("server:newnote", savedNote);
              _context2.next = 13;
              break;
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](3);
              console.error("Error creating new note:", _context2.t0);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[3, 10]]);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    socket.on("client:deletenote", /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _Note["default"].findByIdAndDelete(id);
            case 2:
              emitNotes();
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    socket.on("client:getnote", /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var note;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _Note["default"].findById(id);
            case 2:
              note = _context4.sent;
              socket.emit("server:selectednote", note);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    socket.on("client:updatenote", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(updatedNote) {
        var note;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _Note["default"].findByIdAndUpdate(updatedNote._id, updatedNote, {
                "new": true
              });
            case 2:
              note = _context5.sent;
              io.emit("server:updatenote", note);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    socket.on("client:addweight", /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_ref6) {
        var id, weight, note;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              id = _ref6.id, weight = _ref6.weight;
              _context6.next = 3;
              return _Note["default"].findById(id);
            case 3:
              note = _context6.sent;
              if (!note) {
                _context6.next = 16;
                break;
              }
              note.weight.push(weight);
              note.order = ""; // Очистка поля order
              _context6.prev = 7;
              _context6.next = 10;
              return note.save();
            case 10:
              io.emit("server:updatenote", note);
              _context6.next = 16;
              break;
            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](7);
              console.error("Error adding weight:", _context6.t0);
            case 16:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[7, 13]]);
      }));
      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }());
    socket.on("client:addfryoil", /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_ref8) {
        var id, fryoil, note;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              id = _ref8.id, fryoil = _ref8.fryoil;
              _context7.next = 3;
              return _Note["default"].findById(id);
            case 3:
              note = _context7.sent;
              if (!note) {
                _context7.next = 16;
                break;
              }
              note.fryoil.push(fryoil);
              note.fryorder = ""; // Очистка поля fryorder
              _context7.prev = 7;
              _context7.next = 10;
              return note.save();
            case 10:
              io.emit("server:updatenote", note);
              _context7.next = 16;
              break;
            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](7);
              console.error("Error adding fryoil:", _context7.t0);
            case 16:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[7, 13]]);
      }));
      return function (_x6) {
        return _ref9.apply(this, arguments);
      };
    }());
  });
  var changeStream = _Note["default"].watch([], {
    fullDocument: "updateLookup"
  });
  changeStream.on("change", function (change) {
    switch (change.operationType) {
      case "insert":
        var insertedNote = change.fullDocument;
        io.emit("server:newnote", insertedNote);
        break;
      case "update":
        var updatedNote = change.fullDocument;
        io.emit("server:updatenote", updatedNote);
        break;
      case "delete":
        var deletedId = change.documentKey._id;
        io.emit("server:deletenote", deletedId);
        break;
      default:
        console.error("Unsupported change operation type:", change.operationType);
    }
  });
};