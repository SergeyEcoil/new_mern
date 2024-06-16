import Note from "./models/Note";

export default (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected");

    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit("server:loadnotes", notes);
    };

    emitNotes();

    socket.on("client:newnote", async (data) => {
      const newNote = new Note(data);
      const savedNote = await newNote.save();
      io.emit("server:newnote", savedNote);
    });

    socket.on("client:deletenote", async (id) => {
      await Note.findByIdAndDelete(id);
      emitNotes();
    });

    socket.on("client:getnote", async (id) => {
      const note = await Note.findById(id);
      socket.emit("server:selectednote", note); // Отправляем только конкретному клиенту
    });

    socket.on("client:updatenote", async (updatedNote) => {
      const note = await Note.findByIdAndUpdate(
        updatedNote._id,
        {
          city: updatedNote.city,
          description: updatedNote.description,
          phone: updatedNote.phone,
          address: updatedNote.address,
        },
        { new: true }
      );
      io.emit("server:updatenote", note); // Отправляем обновленную заметку всем клиентам
    });
  });
};
