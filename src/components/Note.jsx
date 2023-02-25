import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NoteForm from "./NoteForm";

function Note() {
  const { noteId } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const note = useSelector((state) => selectNoteById(state, noteId));

  let content;

  if (isEditing) return (content = <NoteForm initialNote={note} type="edit" />);

  content = (
    <div>
      <h2>{note.title}</h2>
      <hr />
      <p>{note.content}</p>
    </div>
  );

  return content;
}

export default Note;
