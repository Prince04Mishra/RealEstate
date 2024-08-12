import React, { useState } from "react";
import { localities } from "../../data/localities";

const LocationDropdown = ({ selectedCity, setSelectedCity }) => {
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getUniqueCities = () => {
    const cities = localities.map((loc) => loc.city);
    return [...new Set(cities)];
  };

  const filteredCities = getUniqueCities().filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center justify-between w-full text-white p-1"
      >
        <span>{selectedCity}</span>
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute left-0 w-full bg-white border rounded-md shadow-lg text-gray-600">
          <input
            type="text"
            placeholder="Filter Cities by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border-b"
          />
          <ul className="max-h-60 overflow-y-auto">
            {filteredCities.map((city) => (
              <li
                key={city}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  city === selectedCity ? "bg-gray-100 font-bold" : ""
                }`}
                onClick={() => {
                  setSelectedCity(city);
                  setDropdownOpen(false);
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
