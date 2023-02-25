import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNote, editNote } from "../features/notesSlice";

function NoteForm({ intitialNote, type }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const editedNote = {
      ...intitialNote,
      title: data.title,
      content: data.content,
    };
    if (type === "edit") {
      dispatch(editNote({ editedNote }));
    } else {
      dispatch(addNote({ editedNote }));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue={intitialNote.title}
        {...register("title", { required: true })}
      />
      {errors.title.message && <p>{errors.title.message}</p>}
      <hr />
      <textarea
        defaultValue={intitialNote.content}
        {...register("content", { required: true })}
      />
      {errors.content.message && <p>{errors.content.message}</p>}
      <button type="submit">Save</button>
    </form>
  );
}

export default NoteForm;
