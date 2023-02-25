import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNotes } from "../features/notesSlice";

function NotesList() {
  const notes = useSelector(selectNotes);
  console.log(notes);

  return (
    <div>
      <Link to="/notes/add">Add new note</Link>
      {notes.map((note, i) => {
        return (
          <div key={i}>
            <Link to={`/notes/${note.id}`}>
              <h1>{note.title}</h1>
            </Link>
            <p>{note.content.slice(0, 30)}...</p>
          </div>
        );
      })}
    </div>
  );
}

export default NotesList;
