import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import "jspdf-autotable";

const YearWiseBreakdown = ({ monthlyBreakdown }) => {
  const tableRef = useRef();
  const [currentYearIndex, setCurrentYearIndex] = useState(0);

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  const handleDownload = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "Month",
      "Principal",
      "Interest",
      "Monthly Payment",
      "Balance",
    ];
    const tableRows = [];

    monthlyBreakdown.forEach((payment) => {
      const paymentData = [
        payment.month,
        payment.principal.replace("₹", ""),
        payment.interest.replace("₹", ""),
        payment.monthlyPayment.replace("₹", ""),
        payment.balance.replace("₹", ""),
      ];
      tableRows.push(paymentData);
    });

    // Calculate the total of the Monthly Payment column
    const totalMonthlyPayment = monthlyBreakdown.reduce((acc, payment) => {
      return acc + parseFloat(payment.monthlyPayment.replace(/₹|,/g, ""));
    }, 0);

    // Add the total balance to the table rows
    tableRows.push([
      "",
      "",
      "",
      "Total Balance",
      `${totalMonthlyPayment.toLocaleString()}`,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: {
        font: "helvetica",
        halign: "center",
      },
      headStyles: {
        fillColor: [0, 57, 108],
        textColor: [255, 255, 255],
      },
      bodyStyles: {
        fillColor: [245, 245, 245],
      },
    });

    doc.save("YearWiseBreakdown.pdf");
  };

  const groupedByYear = monthlyBreakdown.reduce((acc, payment) => {
    if (!acc[payment.year]) {
      acc[payment.year] = [];
    }
    acc[payment.year].push(payment);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear);

  const handleNextYear = () => {
    if (currentYearIndex < years.length - 1) {
      setCurrentYearIndex(currentYearIndex + 1);
    }
  };

  const handlePreviousYear = () => {
    if (currentYearIndex > 0) {
      setCurrentYearIndex(currentYearIndex - 1);
    }
  };

  return (
    <div className="ml-16 mr-16 p-2">
      {years.length > 0 && (
        <div>
          <div className="flex justify-between mb-4">
            <button
              onClick={handlePreviousYear}
              disabled={currentYearIndex === 0}
              className="bg-blue-500 text-white p-2 rounded-md disabled:bg-gray-300"
            >
              Previous Year
            </button>
            <h2 className="text-xl font-bold">{years[currentYearIndex]}</h2>
            <button
              onClick={handleNextYear}
              disabled={currentYearIndex === years.length - 1}
              className="bg-blue-500 text-white p-2 rounded-md disabled:bg-gray-300"
            >
              Next Year
            </button>
          </div>
          <div ref={tableRef}>
            <table className="table-auto w-full mt-4 border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Month</th>
                  <th className="border border-gray-300 p-2">Year</th>
                  <th className="border border-gray-300 p-2">Principal</th>
                  <th className="border border-gray-300 p-2">Interest</th>
                  <th className="border border-gray-300 p-2">
                    Monthly Payment
                  </th>
                  <th className="border border-gray-300 p-2">Balance</th>
                </tr>
              </thead>
              <tbody>
                {groupedByYear[years[currentYearIndex]].map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">{item.month}</td>
                    <td className="border border-gray-300 p-2">{item.year}</td>
                    <td className="border border-gray-300 p-2">
                      {item.principal}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {item.interest}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {item.monthlyPayment}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {item.balance}
                    </td>
                  </tr>
                ))}
                {/* Total Monthly Payment Row */}
                {/* <tr>
                  <td
                    className="border border-gray-300 p-2"
                    colSpan="4"
                    style={{ textAlign: "right" }}
                  >
                    Total Monthly Payment
                  </td>
                  <td className="border border-gray-300 p-2" colSpan="2">
                    {monthlyBreakdown
                      .reduce((acc, payment) => {
                        return (
                          acc +
                          parseFloat(payment.monthlyPayment.replace(/₹|,/g, ""))
                        );
                      }, 0)
                      .toLocaleString()}
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={handleDownload}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="bg-green-500 text-white p-2 rounded-md"
            >
              Print
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YearWiseBreakdown;
