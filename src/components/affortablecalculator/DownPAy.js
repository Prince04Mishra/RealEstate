import React from "react";
import AmoutType from "./AmoutType";
import RangeSlider from "./RangeSlider";

const MIN_VAL = 1000;
const MAX_VAL = 10000000;
const step = 1;

const DownPAy = ({ onChange, value }) => {
  return (
    <div className="w-[900px] p-1 items-center  ">
      <AmoutType
        name={"Down Payment"}
        min={MIN_VAL}
        value={value}
        modifyVal={onChange}
      />
      <RangeSlider
        value={value}
        max={MAX_VAL}
        min={MIN_VAL}
        step={step}
        onChange={onChange}
      />
    </div>
  );
};

export default DownPAy;
