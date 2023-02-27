import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
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
          <ReactMarkdown children={note.content} remarkPlugins={[remarkGfm]} />
        </>
      )}
    </div>
  );

  return content;
}

export default Note;
