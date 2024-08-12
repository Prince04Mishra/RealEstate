import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropertyTypeFilter from "./PropertyTypeFilter";
import BHKFilter from "./BHKFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import SortByFilter from "./SortByFilter";
import ListedByFilter from "./ListedByFilter";
import {
  filterByType,
  filterByBHK,
  filterByPrice,
  sortByPrice,
  filterByListedBy,
  filterByVerified,
  // Import the action creator
} from "../slices/propertySlice"; // Ensure the path is correct
import VerifiedFilter from "./VerifiedFilter";

const MIN_VAL = 0;
const MAX_VAL = 10000000;

const Filters = () => {
  const [values, setValues] = useState(MAX_VAL);
  const dispatch = useDispatch();

  const handlePropertyTypeChange = (e) => {
    dispatch(filterByType(e.target.value));
  };

  const handleBHKChange = (e) => {
    dispatch(filterByBHK(e.target.value));
  };

  const handlePriceChange = (e) => {
    dispatch(filterByPrice(e.target.value));
    setValues(e.target.value);
  };

  const handleSortChange = (e) => {
    dispatch(sortByPrice(e.target.value));
  };
  const handleListedByChange = (e) => {
    dispatch(filterByListedBy(e.target.value));
  };
  const handleVerifiedChange = (e) => {
    dispatch(filterByVerified(e.target.checked));
  };

  return (
    <div className="sticky top-14 border border-b-sky-500   p-4 z-10 flex flex-wrap items-center justify-between gap-3 mb-11 rounded bg-green-400 text-xl font-bold ">
      <PropertyTypeFilter onChange={handlePropertyTypeChange} />
      <BHKFilter onChange={handleBHKChange} />
      <PriceRangeFilter
        onChange={handlePriceChange}
        value={values}
        max={MAX_VAL}
        min={MIN_VAL}
      />
      <SortByFilter onChange={handleSortChange} />
      <ListedByFilter onChange={handleListedByChange} />
      <VerifiedFilter onChange={handleVerifiedChange} />
    </div>
  );
};

export default Filters;

// md:bg-gradient-to-b from-gray-200
