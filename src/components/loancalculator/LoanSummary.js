import React from "react";

const LoanSummary = ({ monthlyPayment, totalPayment, totalInterest }) => {
  return (
    <div>
      <h3 className="text-xl font-bold">Loan Summary</h3>
      <table className="table-auto w-full py-4 my-4 mt-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Monthly Payment</td>
            <td className="border border-gray-300 p-2">{monthlyPayment}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Total Payment</td>
            <td className="border border-gray-300 p-2">{totalPayment}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Total Interest</td>
            <td className="border border-gray-300 p-2">₹ {totalInterest}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoanSummary;
