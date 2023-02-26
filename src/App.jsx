import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import NoteLayout from "./components/NoteLayout";
import NotesList from "./components/NotesList";
import { selectNotes } from "./features/notesSlice";

function App() {
  const notes = useSelector(selectNotes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Routes>
      <Route path="/" element={<NotesList />} />
      <Route path="/notes/add" element={<AddNote />} />
      <Route path="/notes/:noteId" element={<NoteLayout />}>
        <Route index element={<Note />} />
      </Route>
    </Routes>
  );
}

export default App;
