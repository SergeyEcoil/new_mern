"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNote = exports.socket = exports.saveNote = exports.onUpdateNote = exports.onSelected = exports.onNewNote = exports.onDeleteNote = exports.loadNotes = exports.getNoteById = exports.deleteNote = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _socket = require("socket.io-client");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// Добавьте этот импорт в ваш файл socket.js

var socket = exports.socket = (0, _socket.io)();
var loadNotes = exports.loadNotes = function loadNotes(callback) {
  socket.on("server:loadnotes", callback);
};
var saveNote = exports.saveNote = function saveNote(noteData) {
  socket.emit("client:newnote", noteData);
};
var onNewNote = exports.onNewNote = function onNewNote(callback) {
  socket.on("server:newnote", callback);
};
var deleteNote = exports.deleteNote = function deleteNote(id) {
  socket.emit("client:deletenote", id);
};
var onSelected = exports.onSelected = function onSelected(callback) {
  socket.on("server:selectednote", callback);
};
var updateNote = exports.updateNote = function updateNote(id, noteData) {
  socket.emit("client:updatenote", _objectSpread({
    _id: id
  }, noteData));
};
var getNoteById = exports.getNoteById = function getNoteById(id, callback) {
  socket.emit("client:getnote", id);
  socket.once("server:selectednote", callback);
};
var onUpdateNote = exports.onUpdateNote = function onUpdateNote(callback) {
  socket.on("server:updatenote", callback);
};
var onDeleteNote = exports.onDeleteNote = function onDeleteNote(callback) {
  socket.on("server:deletenote", callback);
};