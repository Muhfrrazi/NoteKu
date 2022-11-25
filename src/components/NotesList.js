import React from "react";
import NotesItem from "./NotesItem";
import NotesListEmpty from "./NotesListEmpty";

function NotesList({ notes, keyword, onDelete, onArchived }) {
  if (notes.length > 0) {
    notes = notes.filter((note) => {
      if (keyword === "") {
        return note;
      }
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });
  }

  if (notes.length === 0) {
    return <NotesListEmpty />;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <NotesItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchived={onArchived}
            note={note}
          />
        );
      })}
    </div>
  );
}

export default NotesList;
