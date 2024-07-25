import React from "react";

const BHKFilter = ({ onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">BHK Type</label>
      <select onChange={onChange} className="p-2 border rounded w-full">
        <option value="">All BHK</option>
        <option value="1 RK">1 RK</option>
        <option value="1 BHK">1 BHK</option>
        <option value="2 BHK">2 BHK</option>
        <option value="3 BHK">3 BHK</option>
        <option value="4 BHK">4 BHK</option>
        <option value="5 BHK">5 BHK</option>
        <option value="6 BHK">6 BHK</option>
      </select>
    </div>
  );
};

export default BHKFilter;
