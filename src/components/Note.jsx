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
    <div>
      {note && (
        <>
          <h2>{note.title}</h2>
          <hr />
          <p style={{ whiteSpace: "pre-wrap" }}>{note.content}</p>
        </>
      )}
    </div>
  );

  return content;
}

export default Note;
