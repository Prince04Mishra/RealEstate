import React from "react";
import AmoutType from "./AmoutType";
import RangeSlider from "./RangeSlider";

const MIN_VAL = 0.5;
const MAX_VAL = 15;
const step = 0.1;

const InterestRate = ({ value, onChange }) => {
  // const [values, setValues] = useState(MIN_VAL);
  // const handlePriceChange = (e) => {
  //   setValues(e.target.value);
  // };

  return (
    <div className="w-[1000px] p-1 items-center  ">
      <AmoutType
        name={"Interest Rate (% P.A.)"}
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

export default InterestRate;
