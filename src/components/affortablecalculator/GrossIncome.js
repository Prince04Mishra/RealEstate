import React from "react";
import AmoutType from "./AmoutType";
import RangeSlider from "./RangeSlider";

const MIN_VAL = 10000;
const MAX_VAL = 10000000;
const stepVal = 1;

const GrossIncome = ({ value, onChange }) => {
  return (
    <div className="w-[900px] p-1 items-center  ">
      <AmoutType
        name={"PaymGross Income (Monthly)"}
        min={MIN_VAL}
        value={value}
        step={stepVal}
        modifyVal={onChange}
      />
      <RangeSlider
        value={value}
        max={MAX_VAL}
        min={MIN_VAL}
        onChange={onChange}
      />
    </div>
  );
};

export default GrossIncome;
