import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { FaPhone } from "react-icons/fa";
import { socket } from "./socket.js";

const NoteCard = ({
  note,
  animateCard,
  setAnimateCard,
  handlePhoneClick,
  handleDeleteNote,
  handleEditNote,
}) => {
  const [newWeight, setNewWeight] = useState("");
  const [newFryoil, setNewFryoil] = useState("");

  const handleAddWeight = () => {
    if (newWeight.trim()) {
      const weightData = { value: newWeight, date: new Date().toISOString() };
      console.log("Adding weight data:", weightData); // Вывод в консоль на клиенте
      socket.emit("client:addweight", { id: note._id, weight: weightData });
      setNewWeight("");
      // Очистка поля order
      socket.emit("client:updateorder", { id: note._id, order: "" });
    }
  };

  const handleAddFryoil = () => {
    if (newFryoil.trim()) {
      const fryoilData = { value: newFryoil, date: new Date().toISOString() };
      console.log("Adding fryoil data:", fryoilData); // Вывод в консоль на клиенте
      socket.emit("client:addfryoil", { id: note._id, fryoil: fryoilData });
      setNewFryoil("");
      // Очистка поля fryorder
      socket.emit("client:updatefryorder", { id: note._id, fryorder: "" });
    }
  };

  const cardBackground = note.order === "1" ? "bg-pink-100" : "bg-gray-50";

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit" };
    return new Date(dateString).toLocaleDateString("ru-RU", options);
  };

  const lastWeight =
    note.weight && note.weight.length > 0
      ? note.weight[note.weight.length - 1]
      : null;
  const lastFryoil =
    note.fryoil && note.fryoil.length > 0
      ? note.fryoil[note.fryoil.length - 1]
      : null;

  return (
    <div
      className={`shadow-md rounded mb-1 border ${
        animateCard === note._id ? "animate__animated animate__fadeInRight" : ""
      }`}
      onAnimationEnd={() => setAnimateCard("")}
    >
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper3"
      >
        <SwiperSlide className={`${cardBackground} swiper-slide-custom`}>
          <div className="w-full p-1 flex items-center justify-between">
            <div className="text-center text-[12px] font-bold">
              {note.city || "Unknown City"}
            </div>
            <div className="flex flex-col items-start text-[12px]">
              <p className="text-gray-700">
                {note.description || "No description"}
              </p>
              <p className="text-gray-700">{note.street || "No street"}</p>
              <p className="text-gray-700">{note.house}</p>
            </div>
            <div className="flex items-center justify-end text-[12px]">
              <p className="text-gray-700">
                {note.phone ? (
                  <a
                    href={`tel:${note.phone}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaPhone />
                  </a>
                ) : (
                  <FaPhone
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => handlePhoneClick(note._id)}
                  />
                )}
              </p>
              {note.fryorder >= 1 && (
                <div className="flex items-center justify-center border rounded-lg w-[30px] h-[40px] bg-white ml-2">
                  <img
                    src="/images/oil3.png"
                    alt="Fry Order"
                    className="w-[25px] h-[35px]"
                  />
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${cardBackground} swiper-slide-custom`}>
          <div className="w-full p-1 flex flex-col">
            <div className="flex items-center mb-2 text-[10px] gap-2">
              <p className="text-gray-700 flex-grow">
                {lastWeight
                  ? `${lastWeight.value} кг (${formatDate(lastWeight.date)})`
                  : "No weight data"}
              </p>
              <input
                type="tel"
                className="form-input flex-grow px-1 py-1"
                placeholder="Вес масла"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-1/4"
                onClick={handleAddWeight}
              >
                Внести
              </button>
            </div>
            <div className="flex items-center mb-2 text-[10px] gap-2">
              <p className="text-gray-700 flex-grow">
                {lastFryoil
                  ? `${lastFryoil.value} шт (${formatDate(lastFryoil.date)})`
                  : "No fryoil data"}
              </p>
              <input
                type="tel"
                className="form-input flex-grow px-1 py-1"
                placeholder="Шт фритюра"
                value={newFryoil}
                onChange={(e) => setNewFryoil(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-1/4"
                onClick={handleAddFryoil}
              >
                Внести
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${cardBackground} swiper-slide-custom`}>
          <div className="w-full p-1 flex justify-between items-center">
            <div className="flex justify-between">
              <button
                className="delete bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NoteCard;
