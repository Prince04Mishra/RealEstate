import React from "react";

const YearWiseBreakdown = ({ monthlyBreakdown, year }) => {
  const startMonth = (year - 1) * 12;
  const endMonth = year * 12;

  const yearlyBreakdown = monthlyBreakdown.slice(startMonth, endMonth);

  return (
    <div className="ml-16 mr-16 p-2 ">
      <h3 className="text-xl font-bold mt-6">Year {year}</h3>
      <table className="table-auto w-full mt-4 border-collapse border border-gray-200 ">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Month</th>
            <th className="border border-gray-300 p-2">Principal</th>
            <th className="border border-gray-300 p-2">Interest</th>
          </tr>
        </thead>
        <tbody>
          {yearlyBreakdown.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">Month {index + 1}</td>
              <td className="border border-gray-300 p-2">{item.principal}</td>
              <td className="border border-gray-300 p-2">{item.interest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YearWiseBreakdown;
