import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { toggleIsEditing } from "../features/userSlice";
import Note from "./Note";

function NoteLayout() {
  const dispatch = useDispatch();
  const { isEditing } = useSelector((state) => state.isEditing);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleIsEditing());
  };

  useEffect(() => {
    return () => {
      if (isEditing) {
        dispatch(toggleIsEditing());
      }
    };
  }, []);

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <button onClick={handleClick}>Edit</button>
        </nav>
      </header>
      <Note />
    </div>
  );
}

export default NoteLayout;
