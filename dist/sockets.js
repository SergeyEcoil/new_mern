"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _Note = _interopRequireDefault(require("./models/Note"));
var _default = exports["default"] = function _default(io) {
  io.on("connection", function (socket) {
    console.log("New client connected");
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
              newNote = new _Note["default"](data);
              _context2.next = 3;
              return newNote.save();
            case 3:
              savedNote = _context2.sent;
              io.emit("server:newnote", savedNote);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
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
              socket.emit("server:selectednote", note); // Отправляем только конкретному клиенту
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
              return _Note["default"].findByIdAndUpdate(updatedNote._id, {
                city: updatedNote.city,
                description: updatedNote.description,
                phone: updatedNote.phone,
                address: updatedNote.address
              }, {
                "new": true
              });
            case 2:
              note = _context5.sent;
              io.emit("server:updatenote", note); // Отправляем обновленную заметку всем клиентам
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
  });

  // Настройка Change Streams
  var changeStream = _Note["default"].watch();
  changeStream.on("change", function (change) {
    if (change.operationType === "insert") {
      var note = change.fullDocument;
      io.emit("server:newnote", note);
    } else if (change.operationType === "update") {
      var _note = change.updateDescription.updatedFields;
      io.emit("server:updatenote", _note);
    } else if (change.operationType === "delete") {
      io.emit("server:deletenote", change.documentKey._id);
    }
  });
};