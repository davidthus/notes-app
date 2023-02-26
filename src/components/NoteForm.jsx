import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
import { addNote, editNote } from "../features/notesSlice";
import { toggleIsEditing } from "../features/userSlice";

function NoteForm({ initialNote, type }) {
  const { tags } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
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
          {...register("title", { required: "This is a required field." })}
        />
      </div>
      {errors.title?.message && <p>{errors.title.message}</p>}
      <hr />
      <div className="input-group">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          defaultValue={initialNote.content}
          {...register("content", { required: "This is a required field." })}
        />
        {errors.content?.message && <p>{errors.content.message}</p>}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default NoteForm;
