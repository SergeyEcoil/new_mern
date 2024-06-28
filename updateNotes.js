import mongoose from "mongoose";
import Note from "./src/server/models/Note.js";

const uri = "mongodb+srv://Sergey:Qw300886@oil.110akpo.mongodb.net/note";

mongoose.connect(uri, {});

const updateNotes = async () => {
  try {
    const notes = await Note.find();

    for (const note of notes) {
      let updated = false;

      // Проверка и установка значения по умолчанию для обязательных полей
      if (!note.city) {
        note.city = "Unknown City";
        updated = true;
      }
      if (!note.description) {
        note.description = "No Description";
        updated = true;
      }
      if (!note.phone) {
        note.phone = "Unknown Phone";
        updated = true;
      }
      if (!note.street) {
        note.street = "Unknown Street";
        updated = true;
      }

      // Инициализация weight
      if (
        !note.weight ||
        !Array.isArray(note.weight) ||
        note.weight.length === 0 ||
        note.weight[0] === ""
      ) {
        if (note.weight && note.weight[0] !== "") {
          note.weight = [
            {
              value: note.weight[0] || "0",
              date: new Date().toISOString(),
            },
          ];
        } else {
          note.weight = [
            {
              value: "0",
              date: new Date().toISOString(),
            },
          ];
        }
        updated = true;
      } else {
        note.weight = note.weight.map((w) => {
          if (typeof w !== "object" || !w.value || !w.date) {
            return {
              value: w.value || "0",
              date: w.date || new Date().toISOString(),
            };
          }
          return w;
        });
      }

      // Инициализация fryoil
      if (
        !note.fryoil ||
        !Array.isArray(note.fryoil) ||
        note.fryoil.length === 0 ||
        note.fryoil[0] === ""
      ) {
        if (note.fryoil && note.fryoil[0] !== "") {
          note.fryoil = [
            {
              value: note.fryoil[0] || "0",
              date: new Date().toISOString(),
            },
          ];
        } else {
          note.fryoil = [
            {
              value: "0",
              date: new Date().toISOString(),
            },
          ];
        }
        updated = true;
      } else {
        note.fryoil = note.fryoil.map((f) => {
          if (typeof f !== "object" || !f.value || !f.date) {
            return {
              value: f.value || "0",
              date: f.date || new Date().toISOString(),
            };
          }
          return f;
        });
      }

      // Инициализация fryorder
      if (!note.fryorder) {
        note.fryorder = "No Fry Order";
        updated = true;
      }

      // Сохранение обновленных документов
      if (updated) {
        await note.save();
      }
    }

    console.log("All notes updated successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error updating notes:", error);
    mongoose.connection.close();
  }
};

updateNotes();
