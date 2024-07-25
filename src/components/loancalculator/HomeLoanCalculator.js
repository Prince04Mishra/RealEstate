import React, { useState } from "react";
import InputField from "./InputField";
import LoanSummaryTable from "./LoanSummaryTable";
import PieChart from "./PieChart";

const HomeLoanCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [monthlyBreakdown, setMonthlyBreakdown] = useState([]);
  const [error, setError] = useState("");

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const validateInputs = () => {
    if (principal <= 0) {
      setError("Principal amount should be greater than zero.");
      return false;
    }
    if (interestRate <= 0 || interestRate > 100) {
      setError("Interest rate should be between 0 and 100.");
      return false;
    }
    if (years <= 0) {
      setError("Term should be greater than zero.");
      return false;
    }
    setError("");
    return true;
  };

  const calculateLoan = () => {
    if (!validateInputs()) return;

    const principalAmount = parseFloat(principal);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principalAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      setMonthlyPayment(formatCurrency(monthly.toFixed(2)));
      setTotalPayment(
        formatCurrency((monthly * calculatedPayments).toFixed(2))
      );
      setTotalInterest(
        formatCurrency(
          (monthly * calculatedPayments - principalAmount).toFixed(2)
        )
      );

      let balance = principalAmount;
      let monthlyBreakdownData = [];

      for (let i = 0; i < calculatedPayments; i++) {
        const interest = balance * calculatedInterest;
        const principalPaid = monthly - interest;
        balance -= principalPaid;
        monthlyBreakdownData.push({
          principal: formatCurrency(principalPaid.toFixed(2)),
          interest: formatCurrency(interest.toFixed(2)),
        });
      }

      setMonthlyBreakdown(monthlyBreakdownData);
    }
  };

  return (
    <>
      <h2 className="text-3xl lg:font-serif font-bold my-6  sm:font-semibold mb-14 ml-11">
        Home Loan Calculator
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 p-4 lg:bg-orange-200 m-4 rounded-3xl lg:ml-32 lg:mr-32">
        <div className=" w-full flex  flex-col items-center gap-2 mx-24  rounded-3xl">
          <InputField
            label="Principal Amount (₹):"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            type="number"
          />
          <InputField
            label="Annual Interest Rate (%):"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            type="number"
          />
          <InputField
            label="Term (years):"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            type="number"
          />
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-yellow-500 hover:shadow-lg hover:shadow-blue-500"
            onClick={calculateLoan}
          >
            Calculate
          </button>
        </div>

        {monthlyPayment && (
          <div className=" w-full flex  flex-col items-center mx-24  lg:mx-6 ">
            <PieChart
              monthlyPayment={monthlyPayment}
              totalPayment={totalPayment}
              //    totalInterest={totalInterest}
              principal={parseFloat(principal)}
              payment={monthlyPayment}
              totalInterest={parseFloat(
                totalInterest.replace(/[^0-9.-]+/g, "")
              )}
            />
          </div>
        )}
      </div>
      {monthlyPayment && (
        <div>
          <LoanSummaryTable
            monthlyBreakdown={monthlyBreakdown}
            years={parseInt(years)}
          />
        </div>
      )}
    </>
  );
};

export default HomeLoanCalculator;
