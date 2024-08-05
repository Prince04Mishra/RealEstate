import React from "react";

const RangeSlider = ({ value, max, min, onChange, step }) => {
  return (
    <div className="md:w-1/2 mb-4 w-[100%]">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={onChange}
        className=" h-[6px] w-[100%] cursor-pointer "
      />
      <div className=" flex justify-between items-center text-md font-bold">
        <label className=" font-extralight font-mono lg:text-white text-sm text-amber-200">
          {min >= 1000 ? min / 1000 + " K" : min}
        </label>
        <label className="font-extralight text-sm font-mono lg:text-white text-amber-200 ">
          {max === 10000000 ? max / 10000000 + " Cr" : max}
        </label>
      </div>
    </div>
  );
};

export default RangeSlider;
