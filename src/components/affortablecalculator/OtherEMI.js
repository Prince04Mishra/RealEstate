import React, { useState } from "react";
import AmoutType from "./AmoutType";
import RangeSlider from "./RangeSlider";

const MIN_VAL = 0;
const MAX_VAL = 10000000;
const step = 0.2;

const OtherEMI = ({ value, onChange }) => {
  return (
    <div className="w-[1000px] p-1 items-center  ">
      <AmoutType
        name={"Other EMIs (Monthly)"}
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

export default OtherEMI;
