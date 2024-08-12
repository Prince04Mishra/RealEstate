import React from "react";

const ListedByFilter = ({ onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-xl font-bold">Listed By</label>
      <select onChange={onChange} className="p-2 border rounded w-full">
        <option value="">All</option>
        <option value="Agent">Agent</option>
        <option value="Owner">Owner</option>
        <option value="Developer">Developer</option>
        <option value="Expert Pro Agents">Expert Pro Agents</option>
      </select>
    </div>
  );
};

export default ListedByFilter;
