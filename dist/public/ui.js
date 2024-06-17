import { saveNote, deleteNote, getNoteById, updateNote } from "./socket.js";

const notesList = document.querySelector("#notes");
const city = document.querySelector("#city");
const description = document.querySelector("#description");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
const noteModal = document.querySelector("#noteModal");
const closeModalBtn = document.querySelector("#closeModalBtn");
const addNoteBtn = document.querySelector("#addNoteBtn");

let savedId = "";

// Функции для открытия и закрытия модального окна
const openModal = () => {
  noteModal.classList.remove("hidden");
};

const closeModal = () => {
  noteModal.classList.add("hidden");
  clearForm();
};

const clearForm = () => {
  city.value = "";
  description.value = "";
  phone.value = "";
  address.value = "";
  savedId = "";
};

closeModalBtn.addEventListener("click", closeModal);
addNoteBtn.addEventListener("click", () => {
  clearForm();
  openModal();
});

const noteUI = (note) => {
  const div = document.createElement("div");
  div.classList.add(
    "note-card",
    "bg-white",
    "shadow-md",
    "rounded",
    "p-4",
    "mb-4",
    "animate__animated",
    "animate__fadeInRight"
  );
  div.dataset.id = note._id;
  div.innerHTML = `
    <div class="flex justify-between items-center mb-2">
      <h1 class="text-xl font-bold">${note.city}</h1>
      <div>
        <button class="delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2" data-id="${note._id}">Delete</button>
        <button class="update bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" data-id="${note._id}">Update</button>
      </div>
    </div>
    <p class="text-gray-700 mb-1">${note.description}</p>
    <p class="text-gray-700 mb-1">${note.phone}</p>
    <p class="text-gray-700">${note.address}</p>
  `;

  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".update");

  btnDelete.addEventListener("click", () => deleteNote(btnDelete.dataset.id));
  btnUpdate.addEventListener("click", () => {
    getNoteById(btnUpdate.dataset.id);
    openModal();
  });

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
      <div class="flex justify-between items-center mb-2">
        <h1 class="text-xl font-bold">${updatedNote.city}</h1>
        <div>
          <button class="delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2" data-id="${updatedNote._id}">Delete</button>
          <button class="update bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" data-id="${updatedNote._id}">Update</button>
        </div>
      </div>
      <p class="text-gray-700 mb-1">${updatedNote.description}</p>
      <p class="text-gray-700 mb-1">${updatedNote.phone}</p>
      <p class="text-gray-700">${updatedNote.address}</p>
    `;

    existingNoteDiv.classList.add("animate__animated", "animate__fadeInRight");

    const btnDelete = existingNoteDiv.querySelector(".delete");
    const btnUpdate = existingNoteDiv.querySelector(".update");

    btnDelete.addEventListener("click", () => deleteNote(btnDelete.dataset.id));
    btnUpdate.addEventListener("click", () => {
      getNoteById(btnUpdate.dataset.id);
      openModal();
    });
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

  closeModal();
};

export const appendNote = (note) => {
  notesList.append(noteUI(note));
};
