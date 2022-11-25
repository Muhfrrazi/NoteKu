import React from "react";
import NotesList from "./NotesList";

function NotesCategory({ notes, type, keyword, onDelete, onArchived }) {
  if (type === "archived") {
    const filteredArchiveNotes = notes.filter((note) => note.archived === true);
    return (
      <NotesList
        notes={filteredArchiveNotes}
        keyword={keyword}
        onDelete={onDelete}
        onArchived={onArchived}
      />
    );
  }
  const filteredActiveNotes = notes.filter((note) => note.archived === false);
  return (
    <NotesList
      notes={filteredActiveNotes}
      keyword={keyword}
      onDelete={onDelete}
      onArchived={onArchived}
    />
  );
}

export default NotesCategory;
