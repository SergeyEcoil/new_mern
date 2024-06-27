import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import NoteCard from "./NoteCard.js";
import FormModal from "./FormModal.js";
import PhoneModal from "./PhoneModal.js";
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
} from "./socket.js";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);
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
  const [isSortByStreet, setIsSortByStreet] = useState(true);

  useEffect(() => {
    loadNotes((loadedNotes) => {
      setNotes(loadedNotes);
      setAllNotes(loadedNotes);
    });

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
      setAllNotes((prevNotes) => {
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
          note._id === updatedNote._id
            ? (setAnimateCard(updatedNote._id), updatedNote)
            : note
        )
      )
    );

    onDeleteNote((id) => {
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      setAllNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    });
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
    if (value.trim() === "") {
      setNotes(allNotes);
    } else {
      const filteredNotes = allNotes.filter(
        (note) =>
          note.city.toLowerCase().includes(value.toLowerCase()) ||
          note.description.toLowerCase().includes(value.toLowerCase()) ||
          note.street.toLowerCase().includes(value.toLowerCase())
      );
      setNotes(filteredNotes);
    }
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

  const handleCityChange = (selectedOptions) => {
    setSelectedCities(selectedOptions || []);
  };

  const toggleShowOnlyOrderOne = () => {
    setShowOnlyOrderOne(!showOnlyOrderOne);
  };

  const clearSearch = () => {
    setSearchText("");
    setNotes(allNotes);
  };

  const handleSortToggle = () => {
    const sortedNotes = [...notes].sort((a, b) =>
      isSortByStreet
        ? a.street.localeCompare(b.street)
        : a.description.localeCompare(b.description)
    );
    setNotes(sortedNotes);
    setIsSortByStreet(!isSortByStreet);
  };

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

  const filteredNotes = notes.filter((note) => {
    const matchesCity =
      selectedCities.length > 0
        ? selectedCities
            .map((option) => option.value)
            .includes(note.city.trim().toLowerCase())
        : true;
    const matchesOrder = showOnlyOrderOne ? note.order === "1" : true;
    const matchesSearch =
      note.city.toLowerCase().includes(searchText.toLowerCase()) ||
      note.description.toLowerCase().includes(searchText.toLowerCase()) ||
      note.street.toLowerCase().includes(searchText.toLowerCase());

    return matchesCity && matchesOrder && matchesSearch;
  });

  const uniqueCities = [
    ...new Set(allNotes.map((note) => note.city.trim().toLowerCase())),
  ];

  return (
    <div>
      <Header
        searchText={searchText}
        handleSearchChange={handleSearchChange}
        handleAddNoteClick={handleAddNoteClick}
        selectedCities={selectedCities}
        handleCityChange={handleCityChange}
        uniqueCities={uniqueCities}
        showOnlyOrderOne={showOnlyOrderOne}
        toggleShowOnlyOrderOne={toggleShowOnlyOrderOne}
        clearSearch={clearSearch}
        handleSortToggle={handleSortToggle}
        isSortByStreet={isSortByStreet}
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
      <div className="content">
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
