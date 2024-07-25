import React from "react";

const VerifiedFilter = ({ onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Verified</label>
      <input
        type="checkbox"
        onChange={onChange}
        className="p-2 border rounded ml-5"
      />
    </div>
  );
};

export default VerifiedFilter;
