import React from "react";

const AmoutType = ({ name, value, modifyVal }) => {
  return (
    <div className="flex justify-between items-center md:w-1/2  w-[100%]">
      <h2 className="font-serif font-bold tracking-wider w-1/2 lg:text-white text-gray-50">
        {name}
      </h2>
      <input
        type="text"
        value={value}
        onChange={modifyVal}
        className=" w-1/2 p-2 px-4  my-4 md:w-32 rounded-md items-center font-mono font-semibold shadow-sm border border-gray-400 text-left tracking-wider "
      />
    </div>
  );
};

export default AmoutType;
