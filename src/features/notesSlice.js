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
      const { newNote } = action.payload;

      const indexOfNewNote = state.findIndex((note) => note.id == newNote.id);

      state.splice(indexOfNewNote, 1, newNote);
    },
    deleteNote: (state, action) => {
      const id = action.payload;

      return state.filter((note) => note.id !== Number(id));
    },
  },
});

export const selectNotes = (state) => state.notes;

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
