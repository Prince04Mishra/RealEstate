import React from "react";

const EligiblityAmount = ({ eligibile, cost }) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      {eligibile && (
        <span className="text-center mb-1 py-2 font-bold font-sans text-[#0000ee]  text-xl">
          You are Eligible for a Loan Amount upto
          <br />
          <h1 className="text-center  py-2 font-bold font-mono text-white inline-block">
            {eligibile}
          </h1>
          <h1 className="border  border-b-red-700 text-center w-48 ml-24 lg:ml-24 mt-4"></h1>
        </span>
      )}
      {cost && (
        <span className="text-center mb-1 py-2 font-bold font-sans text-xl ">
          Property Cost
          <br />
          <h2 className="b text-center mb-1 py-2 font-bold font-mono my-4 inline-block">
            {cost}
          </h2>
        </span>
      )}
    </div>
  );
};

export default EligiblityAmount;
