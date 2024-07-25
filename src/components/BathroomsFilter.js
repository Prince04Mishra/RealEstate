import React from "react";

const BathroomsFilter = ({ onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Bathrooms</label>
      <select onChange={onChange} className="p-2 border rounded w-full">
        <option value="0">All</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
      </select>
    </div>
  );
};

export default BathroomsFilter;
