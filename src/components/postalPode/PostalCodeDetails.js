import React from "react";

const PostalCodeDetails = ({
  pincode,
  state,
  district,
  name,
  address,
  deliveryStatus,
  region,
  division,
  details,
}) => {
  console.log("Details:" + details);
  if (
    (!pincode || !state || !name || !address || !deliveryStatus || !division) &&
    !district
  ) {
    return (
      <div className="text-red-400 text-center font-semibold font-display  font-mono sm:ml-6">
        No details to display
      </div>
    );
  }

  return (
    <div className="max-w-xl  p-6 my-11 ">
      <h2 className="text-xl font-mono text-center p-2 font-bold mb-4">
        Post Office Details
      </h2>
      <div className="mb-2 ">
        <strong className="mx-8 font-serif">Pin Code:</strong> {pincode}
      </div>
      <div className="mb-2">
        <strong className="mx-8 font-serif">Post Office Name:</strong>
        {name}
      </div>
      <div className="mb-2">
        <strong className="mx-8 font-serif">District:</strong>
        {district}
      </div>
      <div className="mb-2">
        <strong className="mx-8 font-serif">State:</strong> {state}
      </div>
      <div className="mb-2">
        <strong className="mx-8 font-serif">P.O. Address:</strong>
        {address}
      </div>
      <div className="mb-2">
        <strong className="mx-8 font-serif">Delivery Status:</strong>
        {deliveryStatus}
      </div>
      <div className="mb-2">
        <strong className="mx-8 font-serif">Division:</strong>
        {division}
      </div>
      <div className="mb-2">
        <strong className="mx-8 font-serif">Region:</strong> {region}
      </div>
    </div>
  );
};

export default PostalCodeDetails;
