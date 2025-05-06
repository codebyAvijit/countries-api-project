import React from "react";

const SearchBarComponent = ({ setFilteredValue }) => {
  const findFilteredResult = (event) => {
    // console.log(event.target.value);
    setFilteredValue(event.target.value.toLowerCase());
  };

  return (
    <>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={findFilteredResult}
          placeholder="Search for a country..."
          type="text"
          // value={filteredValue || ""}
        />
      </div>
    </>
  );
};

export default SearchBarComponent;
