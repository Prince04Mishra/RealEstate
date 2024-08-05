import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCity } from "../slices/propertySlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  // const [isSearchBtn, setIsSearchBtn] = useState(true);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  useEffect(() => {
    setCity("");
    handleSearch();
  }, []);

  const handleSearch = () => {
    dispatch(filterByCity(city));
  };
  const handleReset = () => {
    setCity("");
    dispatch(filterByCity(""));
  };

  return (
    <div className="sticky top-0 shadow-lg z-20 gap-3 header p-4 bg-blue-500 text-white flex justify-between items-center">
      <Link to="/">
        <img
          className="w-72 rounded-xl px-4 bg-white cursor-pointer hover:w-64"
          src="
https://reecocefe1aea.b-cdn.net/wp-content/uploads/2022/09/Reecocefe-Logo.webp.bv.webp?bv_host=reecocefe.in"
          alt="LOGO"
        />
      </Link>

      <div className="flex justify-between items-center lg:gap-x-12">
        <Link
          to="/calculator"
          className="text-md font-semibold text-center p-2 font-sans hover:text-black text-opacity-5 -mx-2 hover:underline hover:decoration-pink-500 hover:text-xl"
        >
          EMI Caluculator
        </Link>
        <Link
          to="/budget"
          className="text-md font-semibold text-center p-2 font-sans hover:text-black text-opacity-5 -mx-2 hover:underline hover:decoration-pink-500 hover:text-xl"
        >
          Budget Caluculator
        </Link>
        <Link
          to="/pincode"
          className="text-md font-semibold text-center p-2 font-sans hover:text-black text-opacity-5 mx-2 hover:underline hover:decoration-pink-500 hover:text-xl"
        >
          Pin code
        </Link>
      </div>
      <div className="search-bar flex items-center">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Search by city..."
          className="p-2 border rounded-lg px-4 text-black"
        />
        <button
          onClick={handleSearch}
          className="ml-2  p-2 px-4 bg-white text-blue-500 rounded-lg focus-within:brightness-95 hover:bg-red-400 hover:text-white"
        >
          Search
        </button>
        <button
          onClick={handleReset}
          className="ml-2  mr-11 p-2 px-4 bg-white text-blue-500 rounded-lg focus-within:brightness-95 hover:bg-red-400 hover:text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Header;
