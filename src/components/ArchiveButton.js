import React from "react";

function ArchiveButton({ id, archived, onArchived }) {
  if (archived) {
    return (
      <button
        className="note-item__archive-button"
        onClick={() => onArchived(id)}
      >
        Pindahkan
      </button>
    );
  }
  return (
    <button
      className="note-item__archive-button"
      onClick={() => onArchived(id)}
    >
      Arsipkan
    </button>
  );
}

export default ArchiveButton;
