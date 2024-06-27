import React, { useState, useEffect } from "react";
import {
  FaCity,
  FaSearch,
  FaList,
  FaPlus,
  FaTimes,
  FaSortAlphaDown,
} from "react-icons/fa";
import Select from "react-select";

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
  handleSortToggle,
  isSortByStreet,
}) => {
  const [searchButtonActive, setSearchButtonActive] = useState(false);
  const [cityButtonActive, setCityButtonActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}.${month} ${hours}:${minutes}`;
  };

  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const cityOptions = uniqueCities.map((city) => ({
    value: city,
    label: city,
  }));

  return (
    <div className="header-section glass-effect">
      <div className="header-top w-full p-2 flex items-center gap-2">
        <button
          onClick={handleAddNoteClick}
          className="text-white bg-gray-300 flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md"
        >
          <FaPlus />
        </button>
        <button
          onClick={toggleShowOnlyOrderOne}
          className={` ${
            showOnlyOrderOne ? "bg-green-400" : "bg-gray-300"
          } text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md`}
        >
          <FaList />
        </button>
        <button
          onClick={() => {
            setShowSearch(!showSearch);
            setSearchButtonActive(!searchButtonActive);
          }}
          className={` ${
            searchButtonActive ? "bg-green-400" : "bg-gray-300"
          } text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md`}
        >
          <FaSearch />
        </button>
        <button
          onClick={() => {
            setShowSelect(!showSelect);
            setCityButtonActive(!cityButtonActive);
          }}
          className={` ${
            cityButtonActive ? "bg-green-400" : "bg-gray-300"
          } text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md`}
        >
          <FaCity />
        </button>
        <button
          onClick={handleSortToggle}
          className={` ${
            isSortByStreet ? "bg-green-400" : "bg-gray-300"
          } text-white flex justify-center items-center w-[45px] h-[25px] rounded-lg shadow-md`}
        >
          <FaSortAlphaDown />
        </button>
        <div className="text-[11px] bg-gray-300 w-[65px] h-[25px] flex justify-center items-center rounded shadow-md">
          {formatDateTime(currentDateTime)}
        </div>
      </div>
      {showSelect && (
        <div className="header-select w-full p-2">
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
        <div className="header-search w-full p-2">
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
