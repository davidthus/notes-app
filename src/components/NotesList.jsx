import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNotes } from "../features/notesSlice";

function NotesList() {
  const notes = useSelector(selectNotes);
  const [filterValue, setFilterValue] = useState("");

  function handleChange(e) {
    setFilterValue(e.target.value);
  }

  return (
    <div className="page-wrapper">
      <Link to="/notes/add">Add new note</Link>
      <input
        type="text"
        placeholder="Search for a note..."
        onChange={handleChange}
      />
      <div className="notes-wrapper">
        {notes
          .filter((note) => {
            if (filterValue === "") {
              return note;
            } else if (
              note.title.toLowerCase().includes(filterValue.toLowerCase())
            ) {
              return note;
            }
          })
          .map((note, i) => {
            return (
              <div key={i} className="card">
                <Link to={`/notes/${note.id}`}>
                  <h1 className="card_title">
                    {note.title.slice(0, 30)}
                    {note.title.length > 30 && "..."}
                  </h1>
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
