import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote, editNote } from "../features/notesSlice";
import { toggleIsEditing } from "../features/userSlice";

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
      dispatch(toggleIsEditing());
    } else {
      dispatch(addNote({ newNote }));
      navigate("/");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          defaultValue={initialNote.title}
          {...register("title", { required: true })}
        />
      </div>
      {errors.title?.message && <p>{errors.title.message}</p>}
      <hr />
      <div className="input-group">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          defaultValue={initialNote.content}
          {...register("content", { required: true })}
        />
        {errors.content?.message && <p>{errors.content.message}</p>}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default NoteForm;
