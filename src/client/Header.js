import React from "react";

const Header = ({
  searchText,
  handleSearchChange,
  handleAddNoteClick,
  selectedCity,
  handleCityChange,
  uniqueCities,
  showOnlyOrderOne,
  toggleShowOnlyOrderOne,
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="form-select rounded px-4 py-2 mr-4"
          >
            <option value="">Все города</option>
            {uniqueCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <button
            onClick={toggleShowOnlyOrderOne}
            className={`btn ${
              showOnlyOrderOne ? "bg-red-500" : "bg-blue-500"
            } text-white px-4 py-2 rounded`}
          >
            {showOnlyOrderOne ? "Показать все" : "Показать только Order 1"}
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center p-4">
        <input
          type="text"
          className="form-input rounded px-4 py-2"
          placeholder="Поиск..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <button
          className="btn btn-dark bg-blue-500 text-white px-4 py-2 rounded ml-4"
          onClick={handleAddNoteClick}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default Header;
