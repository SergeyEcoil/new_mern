import React, { useState, useEffect } from "react";
import {
  loadNotes,
  saveNote,
  deleteNote,
  getNoteById,
  updateNote,
  onNewNote,
  onUpdateNote,
  onDeleteNote,
} from "./socket";
import "./styles.css"

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    city: "",
    description: "",
    phone: "",
    address: "",
  });
  const [editingId, setEditingId] = useState("");

  useEffect(() => {
    loadNotes((loadedNotes) => setNotes(loadedNotes));

    onNewNote((newNote) => {
      setNotes((prevNotes) => {
        const noteExists = prevNotes.some((note) => note._id === newNote._id);
        if (noteExists) {
          return prevNotes;
        } else {
          return [...prevNotes, newNote];
        }
      });
    });

    onUpdateNote((updatedNote) =>
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === updatedNote._id ? updatedNote : note
        )
      )
    );

    onDeleteNote((id) =>
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id))
    );
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleAddNoteClick = () => {
    setFormVisible(true);
    setEditingId("");
    setFormData({ city: "", description: "", phone: "", address: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateNote(
        editingId,
        formData.city,
        formData.description,
        formData.phone,
        formData.address
      );
    } else {
      saveNote(
        formData.city,
        formData.description,
        formData.phone,
        formData.address
      );
    }
    setFormVisible(false);
    setFormData({ city: "", description: "", phone: "", address: "" });
  };

  const handleEditNote = (id) => {
    getNoteById(id, (note) => {
      setFormData({
        city: note.city,
        description: note.description,
        phone: note.phone,
        address: note.address,
      });
      setEditingId(id);
      setFormVisible(true);
    });
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.city.toLowerCase().includes(searchText.toLowerCase()) ||
      note.description.toLowerCase().includes(searchText.toLowerCase()) ||
      note.address.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          className="form-input rounded px-4 py-2"
          placeholder="Поиск..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <button
          className="btn btn-dark bg-[#68f887] text-white px-4 py-2 rounded ml-1"
          onClick={handleAddNoteClick}
        >
          Добавить
        </button>
      </div>
      {formVisible && (
        <form
          className="bg-[#ecf0dc] p-4 rounded shadow-md mb-4"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Укажите город"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
          <textarea
            rows="1"
            className="form-textarea w-full mb-3 px-4 py-2"
            placeholder="название кафе"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          ></textarea>
          <input
            type="text"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Укажите телефон"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
          <input
            type="text"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Укажите адрес"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
          />
          <button className="btn btn-dark bg-purple-300 hover:bg-[#b7f19f] text-white px-4 py-2 rounded">
            Отправить
          </button>
        </form>
      )}
      <div id="notes">
        {filteredNotes.map((note) => (
          <div
            key={note._id}
            className="note-card bg-white shadow-md rounded p-4 mb-4 animate__animated animate__fadeInRight"
          >
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-xl font-bold">
                {note.city || "Unknown City"}
              </h1>
              <div>
                <button
                  className="delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => handleDeleteNote(note._id)}
                >
                  Delete
                </button>
                <button
                  className="update bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleEditNote(note._id)}
                >
                  Update
                </button>
              </div>
            </div>
            <p className="text-gray-700 mb-1">
              {note.description || "No description"}
            </p>
            <p className="text-gray-700 mb-1">{note.phone || "No phone"}</p>
            <p className="text-gray-700">{note.address || "No address"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
