import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { FaPhone } from "react-icons/fa";

const NoteCard = ({
  note,
  animateCard,
  setAnimateCard,
  handlePhoneClick,
  handleDeleteNote,
  handleEditNote,
}) => {
  const cardBackground = note.order === "1" ? "bg-pink-100" : "bg-white";

  return (
    <div
      className={`note-card shadow-md rounded mb-4 ${
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
          <div className="slide-content p-4">
            <h1 className="text-xl font-bold mb-2">
              {note.city || "Unknown City"}
            </h1>
            <p className="text-gray-700 mb-1">
              {note.description || "No description"}
            </p>
            <p className="text-gray-700 mb-1">{note.street || "No street"}</p>
            <p className="text-gray-700 mb-1">{note.house}</p>
            <p className="text-gray-700 mb-1">
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
            {note.fryoil && (
              <img
                src="/images/oil3.png"
                alt="Fry Oil"
                className="w-12 h-12 mt-2"
              />
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${cardBackground} swiper-slide-custom`}>
          <div className="slide-content p-4">
            <p className="text-gray-700">{note.weight}</p>
            <p className="text-gray-700">{note.usedprice}</p>
            <p className="text-gray-700">{note.order}</p>
            <p className="text-gray-700">{note.fryoil}</p>
            <p className="text-gray-700">{note.fryprice}</p>
            <p className="text-gray-700">{note.worktime}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${cardBackground} swiper-slide-custom`}>
          <div className="slide-content p-4">
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
