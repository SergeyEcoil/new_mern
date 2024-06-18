"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNoteUI = exports.renderNotes = exports.removeNote = exports.onHandleSubmit = exports.filterNotes = exports.fillForm = exports.appendNote = void 0;
var _socket = require("./socket.js");
var notesList = document.querySelector("#notes");
var city = document.querySelector("#city");
var description = document.querySelector("#description");
var phone = document.querySelector("#phone");
var address = document.querySelector("#address");
var noteForm = document.querySelector("#noteForm");
var savedId = "";
var allNotes = [];
var clearForm = function clearForm() {
  city.value = "";
  description.value = "";
  phone.value = "";
  address.value = "";
  savedId = "";
};
var noteUI = function noteUI(note) {
  var div = document.createElement("div");
  div.classList.add("note-card", "bg-white", "shadow-md", "rounded", "p-4", "mb-4", "animate__animated", "animate__fadeInRight");
  div.dataset.id = note._id;
  div.innerHTML = "\n    <div class=\"flex justify-between items-center mb-2\">\n      <h1 class=\"text-xl font-bold\">".concat(note.city || "Unknown City", "</h1>\n      <div>\n        <button class=\"delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2\" data-id=\"").concat(note._id, "\">Delete</button>\n        <button class=\"update bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded\" data-id=\"").concat(note._id, "\">Update</button>\n      </div>\n    </div>\n    <p class=\"text-gray-700 mb-1\">").concat(note.description || "No description", "</p>\n    <p class=\"text-gray-700 mb-1\">").concat(note.phone || "No phone", "</p>\n    <p class=\"text-gray-700\">").concat(note.address || "No address", "</p>\n  ");
  var btnDelete = div.querySelector(".delete");
  var btnUpdate = div.querySelector(".update");
  btnDelete.addEventListener("click", function () {
    return deleteNoteHandler(btnDelete.dataset.id);
  });
  btnUpdate.addEventListener("click", function () {
    return updateNoteHandler(btnUpdate.dataset.id);
  });
  return div;
};
var deleteNoteHandler = function deleteNoteHandler(id) {
  (0, _socket.deleteNote)(id);
  var noteDiv = document.querySelector(".note-card[data-id=\"".concat(id, "\"]"));
  if (noteDiv) {
    noteDiv.remove();
  }
};
var updateNoteHandler = function updateNoteHandler(id) {
  (0, _socket.getNoteById)(id);
  noteForm.classList.remove("hidden");
};
var renderNotes = exports.renderNotes = function renderNotes(notes) {
  allNotes = notes;
  notesList.innerHTML = "";
  notes.forEach(function (note) {
    return notesList.append(noteUI(note));
  });
};
var updateNoteUI = exports.updateNoteUI = function updateNoteUI(updatedNote) {
  if (!updatedNote || !updatedNote._id) {
    console.error("Invalid note data:", updatedNote);
    return;
  }
  var existingNoteDiv = notesList.querySelector(".note-card[data-id=\"".concat(updatedNote._id, "\"]"));
  if (existingNoteDiv) {
    existingNoteDiv.innerHTML = "\n      <div class=\"flex justify-between items-center mb-2\">\n        <h1 class=\"text-xl font-bold\">".concat(updatedNote.city || "Unknown City", "</h1>\n        <div>\n          <button class=\"delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2\" data-id=\"").concat(updatedNote._id, "\">Delete</button>\n          <button class=\"update bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded\" data-id=\"").concat(updatedNote._id, "\">Update</button>\n        </div>\n      </div>\n      <p class=\"text-gray-700 mb-1\">").concat(updatedNote.description || "No description", "</p>\n      <p class=\"text-gray-700 mb-1\">").concat(updatedNote.phone || "No phone", "</p>\n      <p class=\"text-gray-700\">").concat(updatedNote.address || "No address", "</p>\n    ");
    var btnDelete = existingNoteDiv.querySelector(".delete");
    var btnUpdate = existingNoteDiv.querySelector(".update");
    btnDelete.addEventListener("click", function () {
      return deleteNoteHandler(btnDelete.dataset.id);
    });
    btnUpdate.addEventListener("click", function () {
      return updateNoteHandler(btnUpdate.dataset.id);
    });
  } else {
    notesList.append(noteUI(updatedNote));
  }
};
var fillForm = exports.fillForm = function fillForm(note) {
  city.value = note.city || "";
  description.value = note.description || "";
  phone.value = note.phone || "";
  address.value = note.address || "";
  savedId = note._id;
};
var onHandleSubmit = exports.onHandleSubmit = function onHandleSubmit(e) {
  e.preventDefault();
  var noteData = {
    city: city.value,
    description: description.value,
    phone: phone.value,
    address: address.value
  };
  if (savedId) {
    (0, _socket.updateNote)(savedId, noteData.city, noteData.description, noteData.phone, noteData.address);
  } else {
    (0, _socket.saveNote)(noteData.city, noteData.description, noteData.phone, noteData.address);
  }
  noteForm.classList.add("hidden");
  clearForm();
};
var appendNote = exports.appendNote = function appendNote(note) {
  var existingNoteDiv = notesList.querySelector(".note-card[data-id=\"".concat(note._id, "\"]"));
  if (!existingNoteDiv) {
    notesList.append(noteUI(note));
  }
};
var removeNote = exports.removeNote = function removeNote(id) {
  var noteDiv = notesList.querySelector(".note-card[data-id=\"".concat(id, "\"]"));
  if (noteDiv) {
    noteDiv.remove();
  }
};
var filterNotes = exports.filterNotes = function filterNotes(searchText) {
  var filteredNotes = allNotes.filter(function (note) {
    return note.city.toLowerCase().includes(searchText.toLowerCase()) || note.description.toLowerCase().includes(searchText.toLowerCase()) || note.address.toLowerCase().includes(searchText.toLowerCase());
  });
  renderNotes(filteredNotes);
};

// Обработка добавления новой заметки
(0, _socket.onNewNote)(function (newNote) {
  appendNote(newNote);
});

// Обработка обновления заметки
(0, _socket.onUpdateNote)(function (updatedNote) {
  updateNoteUI(updatedNote);
});

// Обработка удаления заметки
(0, _socket.onDeleteNote)(function (id) {
  removeNote(id);
});