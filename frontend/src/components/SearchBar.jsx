import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, locationTerm); // live filter on title change
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationTerm(value);
    onSearch(searchTerm, value); // live filter on location change
  };

  return (
    <div className="flex bg-gray-200 rounded-md md:p-2 md:max-w-xl max-w-sm px-2 mt-6 mx-auto">
      <input
        type="text"
        placeholder="Job title"
        value={searchTerm}
        onChange={handleSearchChange}
        className="bg-transparent outline-none flex-1 md:px-2 placeholder-gray-500 text-sm border-r-2 border-gray-300"
      />
      <input
        type="text"
        placeholder="Location"
        value={locationTerm}
        onChange={handleLocationChange}
        className="bg-transparent outline-none flex-1 md:px-2 placeholder-gray-500 text-sm"
      />
    </div>
  );
}

export default SearchBar;
