import React, { useState } from "react";
import Select from "react-select";
import { FaCity, FaSearch, FaList, FaPlus,FaTimes } from 'react-icons/fa';


const Header = ({
  searchText,
  handleSearchChange,
  handleAddNoteClick,
  selectedCities,
  handleCityChange,
  uniqueCities,
  showOnlyOrderOne,
  toggleShowOnlyOrderOne,
  clearSearch,
}) => {
  const [showSelect, setShowSelect] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cityButtonActive, setCityButtonActive] = useState(false);
  const [searchButtonActive, setSearchButtonActive] = useState(false);

  const cityOptions = uniqueCities.map((city) => ({
    value: city,
    label: city,
  }));

  const toggleSelect = () => {
    setShowSelect(!showSelect);
    setCityButtonActive(!cityButtonActive);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchButtonActive(!searchButtonActive);
  };

  return (
    <div className="fixed top-0 z-10 border h-[35px] bg-white w-full left-0">
      <div className="flex items-center gap-7 ml-9 mt-1">
        <button
          onClick={toggleSelect}
          className={` ${
            cityButtonActive ? "bg-green-400" : "bg-gray-300"
          } text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md`}
        >
          <FaCity />
          {cityButtonActive && (
            <span className="absolute left-0 right-0 h-1"></span>
          )}
        </button>
        <button
          onClick={toggleSearch}
          className={` ${
            searchButtonActive ? "bg-green-400" : "bg-gray-300"
          } text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md`}
        >
          <FaSearch />
          {searchButtonActive && (
            <span className="absolute left-0 right-0 h-1 "></span>
          )}
        </button>
        <button
          onClick={toggleShowOnlyOrderOne}
          className={`btn ${
            showOnlyOrderOne ? "bg-green-400" : "bg-gray-300"
          } text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md`}
        >
          <FaList />
        </button>
        <button
          onClick={handleAddNoteClick}
          className="flex justify-center items-center w-[45px] h-[25px] bg-gray-300 text-white rounded-lg shadow-md"
        >
          <FaPlus />
        </button>
      </div>
      {showSelect && (
        <div className="animate__animated animate__slideInDown p-1">
          <Select
            isMulti
            isSearchable
            value={selectedCities}
            onChange={handleCityChange}
            options={cityOptions}
            className="basic-multi-select h-[35px] text-[12px]"
            classNamePrefix="select"
            placeholder="Выберите города..."
          />
        </div>
      )}
      {showSearch && (
        <div className="animate__animated animate__slideInDown p-1">
          <div className="relative h-[35px] w-full">
            <input
              type="text"
              className="text-[12px] form-input border rounded px-2 py-1 w-full"
              placeholder="Поиск..."
              value={searchText}
              onChange={handleSearchChange}
            />
            {searchText && (
              <button
                onClick={clearSearch}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

