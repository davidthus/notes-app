import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import NoteLayout from "./components/NoteLayout";
import NotesList from "./components/NotesList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NotesList />} />
      <Route path="/note/add" element={<AddNote />} />
      <Route path="/note/:noteId" element={<NoteLayout />} />
    </Routes>
  );
}

export default App;
