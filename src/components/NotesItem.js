import React from "react";
import NotesItemAction from "./NotesItemAction";
import NotesItemContent from "./NotesItemContent";

function NotesItem({ note, onDelete, onArchived }) {
  return (
    <div className="note-item">
      <NotesItemContent {...note} />
      <NotesItemAction
        id={note.id}
        archived={note.archived}
        onDelete={onDelete}
        onArchived={onArchived}
      />
    </div>
  );
}

export default NotesItem;
