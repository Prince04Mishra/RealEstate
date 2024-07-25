import React from "react";

const PropertyTypeFilter = ({ onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Property Type</label>
      <select onChange={onChange} className="p-2 border rounded w-full">
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Independent House">Independent House</option>
        <option value="Independent Floor">Independent Floor</option>
        <option value="Plot">Plot</option>
        <option value="Studio">Studio</option>
        <option value="Duplex">Duplex</option>
        <option value="Penthouse">Penthouse</option>
        <option value="Villa">Villa</option>
        <option value="Agricultural Land">Agricultural Land</option>
      </select>
    </div>
  );
};

export default PropertyTypeFilter;
