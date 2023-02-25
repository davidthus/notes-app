import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNotes } from "../features/notesSlice";

function NotesList() {
  const notes = useSelector(selectNotes);

  return (
    <div>
      <Link to="/notes/add">Add new note</Link>
      {notes.map((note, i) => {
        <Link to={`/notes/${note.id}`}>
          <h1>{note.title}</h1>
          <p>{note.content.slice(0, 30)}...</p>
        </Link>;
      })}
    </div>
  );
}

export default NotesList;
