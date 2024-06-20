"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNote = exports.socket = exports.saveNote = exports.onUpdateNote = exports.onSelected = exports.onNewNote = exports.onDeleteNote = exports.loadNotes = exports.getNoteById = exports.deleteNote = void 0;
var _socket = require("socket.io-client");
var socket = exports.socket = (0, _socket.io)();
var loadNotes = exports.loadNotes = function loadNotes(callback) {
  socket.on("server:loadnotes", callback);
};
var saveNote = exports.saveNote = function saveNote(city, description, phone, address) {
  socket.emit("client:newnote", {
    city: city,
    description: description,
    phone: phone,
    address: address
  });
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
var updateNote = exports.updateNote = function updateNote(id, city, description, phone, address) {
  socket.emit("client:updatenote", {
    _id: id,
    city: city,
    description: description,
    phone: phone,
    address: address
  });
};
var getNoteById = exports.getNoteById = function getNoteById(id, callback) {
  socket.emit("client:getnote", id);
  socket.once("server:selectednote", callback); // Используем once, чтобы избежать дублирования
};
var onUpdateNote = exports.onUpdateNote = function onUpdateNote(callback) {
  socket.on("server:updatenote", callback);
};
var onDeleteNote = exports.onDeleteNote = function onDeleteNote(callback) {
  socket.on("server:deletenote", callback);
};