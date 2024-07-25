import React from "react";

const InputField = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className="flex flex-col justify-center gap-2 mb-4 w-full lg:ml-32">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        className="mt-1 p-2 border border-gray-300 rounded-lg"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
