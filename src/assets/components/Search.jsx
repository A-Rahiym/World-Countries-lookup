import React from "react";

const Search = ({ Onchange }) => {
  return (
    <div>
      <input
        className="border-spacing-4 p-4 m-2 shadow-lg relative"
        type="text"
        placeholder="search..."
        onChange={Onchange}
      />
    </div>
  );
};

export default Search;
