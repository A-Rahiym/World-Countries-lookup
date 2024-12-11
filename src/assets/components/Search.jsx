import React from "react";

const Search = ({ Onchange }) => {
  return (
    <div>
      <input
        className="border-spacing-4 w-80  m-4 p-3  relative border  "
        type="text"
        placeholder=" search..."
        onChange={Onchange}
      />
    </div>
  );
};

export default Search;
