import Note from "./models/Note.js";

export default (io) => {
  io.on("connection", (socket) => {
    console.log(`New client connected: ${socket.id}`);

    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit("server:loadnotes", notes);
    };

    emitNotes();

    socket.on("client:newnote", async (data) => {
      if (!data.weight) {
        data.weight = [{ value: "0", date: new Date().toISOString() }];
      }
      if (!data.fryoil) {
        data.fryoil = [{ value: "0", date: new Date().toISOString() }];
      }
      const newNote = new Note(data);
      try {
        const savedNote = await newNote.save();
        io.emit("server:newnote", savedNote);
      } catch (error) {
        console.error("Error creating new note:", error);
      }
    });

    socket.on("client:deletenote", async (id) => {
      await Note.findByIdAndDelete(id);
      emitNotes();
    });

    socket.on("client:getnote", async (id) => {
      const note = await Note.findById(id);
      socket.emit("server:selectednote", note);
    });

    socket.on("client:updatenote", async (updatedNote) => {
      const note = await Note.findByIdAndUpdate(updatedNote._id, updatedNote, {
        new: true,
      });
      io.emit("server:updatenote", note);
    });

    socket.on("client:addweight", async ({ id, weight }) => {
      const note = await Note.findById(id);
      if (note) {
        note.weight.push(weight);
        note.order = ""; // Очистка поля order
        try {
          await note.save();
          io.emit("server:updatenote", note);
        } catch (error) {
          console.error("Error adding weight:", error);
        }
      }
    });

    socket.on("client:addfryoil", async ({ id, fryoil }) => {
      const note = await Note.findById(id);
      if (note) {
        note.fryoil.push(fryoil);
        note.fryorder = ""; // Очистка поля fryorder
        try {
          await note.save();
          io.emit("server:updatenote", note);
        } catch (error) {
          console.error("Error adding fryoil:", error);
        }
      }
    });
  });

  const changeStream = Note.watch([], { fullDocument: "updateLookup" });
  changeStream.on("change", (change) => {
    switch (change.operationType) {
      case "insert":
        const insertedNote = change.fullDocument;
        io.emit("server:newnote", insertedNote);
        break;
      case "update":
        const updatedNote = change.fullDocument;
        io.emit("server:updatenote", updatedNote);
        break;
      case "delete":
        const deletedId = change.documentKey._id;
        io.emit("server:deletenote", deletedId);
        break;
      default:
        console.error(
          "Unsupported change operation type:",
          change.operationType
        );
    }
  });
};
