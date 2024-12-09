import React from "react";

const Search = ({ Onchange }) => {
  return (
    <div>
      <input
        className="border-spacing-4  m-2 my-4 p-1  relative rounded-sm"
        type="text"
        placeholder=" search..."
        onChange={Onchange}
      />
    </div>
  );
};

export default Search;
