import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNotes } from "../features/notesSlice";

function NotesList() {
  const notes = useSelector(selectNotes);

  return (
    <div className="page-wrapper">
      <Link to="/notes/add">Add new note</Link>
      <div className="notes-wrapper">
        {notes.map((note, i) => {
          return (
            <div key={i} className="card">
              <Link to={`/notes/${note.id}`}>
                <h1 className="card_title">{note.title}</h1>
              </Link>
              <p className="card_content">
                {note.content.slice(0, 30)}
                {note.content.length > 30 && "..."}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NotesList;
