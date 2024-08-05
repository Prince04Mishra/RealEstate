import React from "react";

const ErrorMessage = ({ error }) => (
  <p className="text-red-400 text-center font-semibold font-display font-mono sm:ml-6">
    {error}
  </p>
);

export default ErrorMessage;
