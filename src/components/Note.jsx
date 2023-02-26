import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectNotes } from "../features/notesSlice";
import NoteForm from "./NoteForm";

function Note() {
  const { noteId } = useParams();
  const { isEditing } = useSelector((state) => state.user);

  const notes = useSelector(selectNotes);
  const note = notes.find(({ id }) => id === Number(noteId));

  let content;

  if (isEditing) return (content = <NoteForm initialNote={note} type="edit" />);

  content = (
    <div className="note-wrapper">
      {note && (
        <>
          <h2 className="note_title">{note.title}</h2>
          <hr />
          <p className="note_content">{note.content}</p>
        </>
      )}
    </div>
  );

  return content;
}

export default Note;
