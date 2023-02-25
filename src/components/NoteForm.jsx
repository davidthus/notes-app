import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote, editNote } from "../features/notesSlice";

function NoteForm({ initialNote, type }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const newNote = {
      ...initialNote,
      title: data.title,
      content: data.content,
    };
    if (type === "edit") {
      dispatch(editNote({ newNote }));
      navigate("/");
    } else {
      dispatch(addNote({ newNote }));
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue={initialNote.title}
        {...register("title", { required: true })}
      />
      {errors.title?.message && <p>{errors.title.message}</p>}
      <hr />
      <textarea
        defaultValue={initialNote.content}
        {...register("content", { required: true })}
      />
      {errors.content?.message && <p>{errors.content.message}</p>}
      <button type="submit">Save</button>
    </form>
  );
}

export default NoteForm;
