const socket = io();

export const loadNotes = (callback) => {
  socket.on("server:loadnotes", callback);
};

export const saveNote = (city, description, phone, address) => {
  socket.emit("client:newnote", { city, description, phone, address });
};

export const onNewNote = (callback) => {
  socket.on("server:newnote", callback);
};

export const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};


export const onSelected = (callback) => {
  socket.on("server:selectednote", callback);
};

export const updateNote = (id, city, description, phone, address) => {
  socket.emit("client:updatenote", {
    _id: id,
    city,
    description,
    phone,
    address,
  });
};

export const getNoteById = (id, callback) => {
  socket.emit("client:getnote", id);
  socket.once("server:selectednote", callback); // Используем once, чтобы избежать дублирования
};

export const onUpdateNote = (callback) => {
  socket.on("server:updatenote", callback);
};

export const onDeleteNote = (callback) => {
  socket.on("server:deletenote", callback);
};

export { socket };
