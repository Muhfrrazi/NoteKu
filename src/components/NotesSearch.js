import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Icon = () => {
  return <FontAwesomeIcon icon={faMagnifyingGlass} />;
};

function NotesSearch({ onSearch }) {
  return (
    <div className="note-app__search">
      <input className="inputSearch" type="text" placeholder="Search" onChange={(e) => onSearch(e.target.value)} />
      <Icon className="icon" />
    </div>
  );
}

export default NotesSearch;
