import React from "react";
import AmoutType from "./AmoutType";
import RangeSlider from "./RangeSlider";

const MIN_VAL = 1;
const MAX_VAL = 30;

const Tenure = ({ value, onChange }) => {
  // const [values, setValues] = useState(MIN_VAL);
  // const handlePriceChange = (e) => {
  //   setValues(e.target.value);
  // };

  return (
    <div className="w-[900px] md:p-1  overflow-hidden">
      <AmoutType
        name={"Tenure (Years)"}
        min={MIN_VAL}
        value={value}
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

export default Tenure;
