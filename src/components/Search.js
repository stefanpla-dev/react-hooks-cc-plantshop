import React from "react";

function Search({ search, setSearch }) {
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
