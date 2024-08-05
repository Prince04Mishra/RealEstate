import React from "react";

const PostalCodeDetails = ({
  pincode,
  state,
  district,
  name,
  address,
  division,
}) => {
  if ((!pincode || !state || !name || !address || !division) && !district) {
    return (
      <div className="text-red-400 text-center font-semibold font-display font-mono sm:ml-6 ">
        No details to display
      </div>
    );
  }

  return (
    <div className="max-w-xl p-6 my-11">
      <h2 className=" font-mono text-center p-2 font-bold mb-4 text-2xl text-white underline">
        Post Office Details
      </h2>
      <div className="mb-2 text-lg text-white font-sans">
        <strong className="mx-8 font-serif">Pin Code:</strong> {pincode}
      </div>
      <div className="mb-2 text-lg text-white font-sans">
        <strong className="mx-8 font-serif">Post Office Name:</strong> {name}
      </div>
      <div className="mb-2 text-lg text-white font-sans">
        <strong className="mx-8 font-serif">District:</strong> {district}
      </div>
      <div className="mb-2 text-lg text-white font-sans">
        <strong className="mx-8 font-serif">State:</strong> {state}
      </div>
      <div className="mb-2 text-lg text-white font-sans">
        <strong className="mx-8 font-serif">P.O. Address:</strong> {address}
      </div>
      <div className="mb-2 text-lg text-white font-sans">
        <strong className="mx-8 font-serif">Division:</strong> {division}
      </div>
    </div>
  );
};

export default PostalCodeDetails;
