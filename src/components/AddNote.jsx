import React from "react";
import NoteForm from "./NoteForm";

function AddNote() {
  return (
    <div>
      <NoteForm
        intitialNote={{ id: Date.now(), title: "", content: "" }}
        type="add"
      />
    </div>
  );
}

export default AddNote;
