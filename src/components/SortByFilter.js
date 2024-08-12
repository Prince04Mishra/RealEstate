import React from "react";

const SortByFilter = ({ onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-xl font-bold">Sort By</label>
      <select onChange={onChange} className="p-2 border rounded w-full">
        <option value="relevance">Relevance</option>
        <option value="price-inc">Price (Low to High)</option>
        <option value="price-dec">Price (High to Low)</option>
        <option value="area-inc">Area (Low to High)</option>
        <option value="area-dec">Area (High to Low)</option>
      </select>
    </div>
  );
};

export default SortByFilter;
