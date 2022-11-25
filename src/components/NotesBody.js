import React from "react";
import NotesCategory from "./NotesCategory";
import NotesInput from "./NotesInput";

function NotesBody({ notes, keyword, onDelete, onArchived, addNote }) {
  const archivedType = "archived";

  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NotesCategory notes={notes} keyword={keyword} onDelete={onDelete} onArchived={onArchived} />
      <h2>Arsip</h2>
      <NotesCategory notes={notes} type={archivedType} keyword={keyword} onDelete={onDelete} onArchived={onArchived} />
    </div>
  );
}

export default NotesBody;
