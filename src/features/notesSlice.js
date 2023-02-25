import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("notes")) || [];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const { newNote } = action.payload;

      state.push(newNote);
    },
    editNote: (state, action) => {
      const { editedNote } = action.payload;

      const indexOfNewNote = state.findIndex(
        (note) => note.id === editedNote.id
      );

      state.splice(indexOfNewNote, 1, editedNote);
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;

      const indexOfNote = state.findIndex((note) => note.id === id);
      state.splice(indexOfNote, 1);
    },
  },
});

export const selectNotes = (state) => state.notes;
export const selectNoteById = createSelector(
  selectNotes,
  (_, noteId) => noteId,
  (notes, noteId) => notes.find((note) => note.id === noteId)
);

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
