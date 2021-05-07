import React from "react";

function SearchBar({ inputChange }) {
  return (
    <input
      style={{
        width: "25%",
        opacity: "0.7",
        margin: "15px auto",
      }}
      type="text"
      className="form-control"
      placeholder="Search for an employee here"
      onChange={inputChange}
    />
  );
}

export default SearchBar;
