import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
    // onSearch(inputValue, "societies"); // Set the searchTerm when the button is clicked
  };
  console.log(handleSearchClick);
  return (
    <div className="-m-9 relative z-20 px-6 ml-32 lg:ml-[500px] hover:ease-in-out">
      <SearchIcon className="absolute left-9 top-8 text-gray-400 " />
      <input
        type="text"
        placeholder="Enter a city, locality or society"
        className=" w-[700px] lg:w-[800px] h-20 p-2 pl-10 border border-gray-300 rounded hover:shadow-lg shadow-gray-600"
        value={inputValue}
        onChange={handleInputChange}
      />

      <button
        className="-ml-80 shadow-lg shadow-lime-800 bg-green-400 px-5 py-2 rounded-lg text-white text-lg font-bold hover:bg-green-700 "
        onClick={handleSearchClick}
      >
        Search City, Locality Or Society
      </button>
    </div>
  );
};

export default SearchBar;
