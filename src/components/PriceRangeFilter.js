import React from "react";

const PriceRangeFilter = ({ onChange, value, MIN_VAL }) => {
  return (
    <div className="mb-4 relative">
      <label className="block mb-2 text-xl font-bold">Set Budget</label>
      {/* {showPriceRange &&  */}

      <div>
        <input
          type="range"
          min={MIN_VAL}
          max="10000000"
          value={value}
          step="100000"
          onChange={onChange}
          className=" h-[6px] w-[100%]"
        />
        <div className=" flex justify-between items-center text-md font-bold">
          <label>0</label>
          <b className="font-normal">{value}</b>
          <label>10 Cr</label>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
