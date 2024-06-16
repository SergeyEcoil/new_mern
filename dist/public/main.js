import { loadNotes, onNewNote, onSelected, socket } from "./socket.js";
import {
  onHandleSubmit,
  renderNotes,
  appendNote,
  fillForm,
  updateNoteUI,
} from "./ui.js";

onNewNote(appendNote);
loadNotes(renderNotes);
onSelected(fillForm);

socket.on("server:updatenote", (updatedNote) => {
  updateNoteUI(updatedNote);
});

const noteForm = document.querySelector("#noteForm");
noteForm.addEventListener("submit", onHandleSubmit);
