import React, { useState, useEffect } from "react";
import Header from "./Header";
import NoteCard from "./NoteCard";
import FormModal from "./FormModal";
import PhoneModal from "./PhoneModal";
import "animate.css";
import "./styles.css";
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

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showOnlyOrderOne, setShowOnlyOrderOne] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
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
    worktime: "",
  });
  const [editingId, setEditingId] = useState("");
  const [animateCard, setAnimateCard] = useState("");
  const [phoneModalVisible, setPhoneModalVisible] = useState(false);
  const [phoneInput, setPhoneInput] = useState("");
  const [currentNoteId, setCurrentNoteId] = useState("");

  useEffect(() => {
    loadNotes((loadedNotes) => setNotes(loadedNotes));

    onNewNote((newNote) => {
      setNotes((prevNotes) => {
        const noteExists = prevNotes.some((note) => note._id === newNote._id);
        if (noteExists) {
          return prevNotes;
        } else {
          setAnimateCard(newNote._id);
          return [...prevNotes, newNote];
        }
      });
    });

    onUpdateNote((updatedNote) =>
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === updatedNote._id
            ? (setAnimateCard(updatedNote._id), updatedNote)
            : note
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
      worktime: "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateNote(editingId, formData);
    } else {
      saveNote(formData);
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
      worktime: "",
    });
  };

  const handleCancel = () => {
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
      worktime: "",
    });
  };

  const handleEditNote = (id) => {
    getNoteById(id, (note) => {
      setFormData(note);
      setEditingId(id);
      setFormVisible(true);
    });
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value.trim().toLowerCase());
  };

  const toggleShowOnlyOrderOne = () => {
    setShowOnlyOrderOne(!showOnlyOrderOne);
  };

  const filteredNotes = notes.filter((note) => {
    const matchesCity = selectedCity
      ? note.city.trim().toLowerCase() === selectedCity
      : true;
    const matchesOrder = showOnlyOrderOne ? note.order === "1" : true;
    const matchesSearch =
      note.city.toLowerCase().includes(searchText.toLowerCase()) ||
      note.description.toLowerCase().includes(searchText.toLowerCase()) ||
      note.street.toLowerCase().includes(searchText.toLowerCase());

    return matchesCity && matchesOrder && matchesSearch;
  });

  const uniqueCities = [
    ...new Set(notes.map((note) => note.city.trim().toLowerCase())),
  ];

  const handlePhoneClick = (id) => {
    const note = notes.find((note) => note._id === id);
    if (!note.phone) {
      setPhoneModalVisible(true);
      setCurrentNoteId(id);
    }
  };

  const handlePhoneSubmit = () => {
    if (phoneInput && currentNoteId) {
      const noteToUpdate = notes.find((note) => note._id === currentNoteId);
      updateNote(currentNoteId, { ...noteToUpdate, phone: phoneInput });
      setPhoneModalVisible(false);
      setPhoneInput("");
    }
  };

  const handlePhoneCancel = () => {
    setPhoneModalVisible(false);
    setPhoneInput("");
  };

  return (
    <div>
      <Header
        searchText={searchText}
        handleSearchChange={handleSearchChange}
        handleAddNoteClick={handleAddNoteClick}
        selectedCity={selectedCity}
        handleCityChange={handleCityChange}
        uniqueCities={uniqueCities}
        showOnlyOrderOne={showOnlyOrderOne}
        toggleShowOnlyOrderOne={toggleShowOnlyOrderOne}
      />
      <FormModal
        formVisible={formVisible}
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
        handleCancel={handleCancel}
      />
      <PhoneModal
        phoneModalVisible={phoneModalVisible}
        phoneInput={phoneInput}
        setPhoneInput={setPhoneInput}
        handlePhoneSubmit={handlePhoneSubmit}
        handlePhoneCancel={handlePhoneCancel}
      />
      <div className="pt-32">
        <div id="notes">
          {filteredNotes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              animateCard={animateCard}
              setAnimateCard={setAnimateCard}
              handlePhoneClick={handlePhoneClick}
              handleDeleteNote={handleDeleteNote}
              handleEditNote={handleEditNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
