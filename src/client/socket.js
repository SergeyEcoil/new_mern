const socket = io();

export const loadNotes = (callback) => {
  socket.on("server:loadnotes", callback);
};

export const saveNote = (noteData) => {
  socket.emit("client:newnote", noteData);
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

export const updateNote = (id, noteData) => {
  socket.emit("client:updatenote", { _id: id, ...noteData });
};

export const getNoteById = (id, callback) => {
  socket.emit("client:getnote", id);
  socket.once("server:selectednote", callback);
};

export const onUpdateNote = (callback) => {
  socket.on("server:updatenote", callback);
};

export const onDeleteNote = (callback) => {
  socket.on("server:deletenote", callback);
};

export { socket };
