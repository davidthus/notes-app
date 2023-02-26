import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { deleteNote } from "../features/notesSlice";
import { toggleIsEditing } from "../features/userSlice";

function NoteLayout() {
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const navigate = useNavigate();
  const { isEditing } = useSelector((state) => state.user);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(toggleIsEditing());
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteNote(Number(noteId)));
    navigate("/");
  };

  useEffect(() => {
    return () => {
      if (isEditing) {
        dispatch(toggleIsEditing());
      }
    };
  }, []);

  return (
    <div className="note-page-wrapper">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <button onClick={handleEdit}>Edit</button>
          <button className="danger" onClick={handleDelete}>
            Delete
          </button>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default NoteLayout;
