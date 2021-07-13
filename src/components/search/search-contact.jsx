import React, { useState } from "react";

const SearchContact = ({placeHolder,handleChange}) => {
  const [SearchField, setSearchField] = useState("");
  return (
    <div className='SearchBox'>
      <input
        type="search"
        placeholder={placeHolder}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchContact;
