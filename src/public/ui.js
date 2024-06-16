import { saveNote, deleteNote, getNoteById, updateNote } from "./socket.js";

const notesList = document.querySelector("#notes");
const city = document.querySelector("#city");
const description = document.querySelector("#description");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");

let savedId = "";

const noteUI = (note) => {
  const div = document.createElement("div");
  div.classList.add("note-card");
  div.dataset.id = note._id;
  div.innerHTML = `
    <div class="card card-body rounded-0 mb-2">
      <div class="d-flex justify-content-between p-1">
        <h1>${note.city}</h1>
        <div>
          <button class="delete btn btn-danger btn-sm" data-id="${note._id}">Delete</button>
          <button class="update btn btn-secondary btn-sm" data-id="${note._id}">Update</button>
        </div>
      </div>
      <p>${note.description}</p>
      <p>${note.phone}</p>
      <p>${note.address}</p>
    </div>
  `;

  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".update");

  btnDelete.addEventListener("click", (e) => deleteNote(btnDelete.dataset.id));
  btnUpdate.addEventListener("click", (e) => getNoteById(btnUpdate.dataset.id));

  return div;
};

export const renderNotes = (notes) => {
  notesList.innerHTML = "";
  notes.forEach((note) => notesList.append(noteUI(note)));
};

export const updateNoteUI = (updatedNote) => {
  const existingNoteDiv = notesList.querySelector(
    `.note-card[data-id="${updatedNote._id}"]`
  );

  if (existingNoteDiv) {
    existingNoteDiv.classList.remove("animate__fadeInRight");
    existingNoteDiv.innerHTML = `
      <div class="card card-body rounded-0 mb-2">
        <div class="d-flex justify-content-between p-1">
          <h1>${updatedNote.city}</h1>
          <div>
            <button class="delete btn btn-danger btn-sm" data-id="${updatedNote._id}">Delete</button>
            <button class="update btn btn-secondary btn-sm" data-id="${updatedNote._id}">Update</button>
          </div>
        </div>
        <p>${updatedNote.description}</p>
        <p>${updatedNote.phone}</p>
        <p>${updatedNote.address}</p>
      </div>
    `;

    existingNoteDiv.classList.add("animate__animated", "animate__fadeInRight");

    const btnDelete = existingNoteDiv.querySelector(".delete");
    const btnUpdate = existingNoteDiv.querySelector(".update");

    btnDelete.addEventListener("click", (e) =>
      deleteNote(btnDelete.dataset.id)
    );
    btnUpdate.addEventListener("click", (e) =>
      getNoteById(btnUpdate.dataset.id)
    );
  } else {
    notesList.append(noteUI(updatedNote));
  }
};

export const fillForm = (note) => {
  city.value = note.city;
  description.value = note.description;
  phone.value = note.phone;
  address.value = note.address;
  savedId = note._id;
};

export const onHandleSubmit = (e) => {
  e.preventDefault();

  const noteData = {
    city: city.value,
    description: description.value,
    phone: phone.value,
    address: address.value,
  };

  if (savedId) {
    updateNote(
      savedId,
      noteData.city,
      noteData.description,
      noteData.phone,
      noteData.address
    );
  } else {
    saveNote(
      noteData.city,
      noteData.description,
      noteData.phone,
      noteData.address
    );
  }

  savedId = "";
  city.value = "";
  description.value = "";
  phone.value = "";
  address.value = "";
};

export const appendNote = (note) => {
  notesList.append(noteUI(note));
};
