import React, { useEffect, useState } from "react";
import DownPAy from "./DownPAy";
import GrossIncome from "./GrossIncome";
import Tenure from "./Tenure";
import InterestRate from "./InterestRate";
import OtherEMI from "./OtherEMI";
import EligiblityAmount from "./EligiblityAmount";
import PieChart from "./PieChart";
import { Link } from "react-router-dom";
import LoanApplyForm from "./LoanApplyForm";

const MIN_VAL = 1000;

const BudgetMainPage = () => {
  const [downPayment, setDownPayment] = useState(MIN_VAL);
  const [montIncome, setMonthIncome] = useState(10000);
  const [interestRate, setInterestRate] = useState(0.5);
  const [tenure, setTenure] = useState(1);
  const [otherEmi, setOtherEmi] = useState(0);
  const [eligibleBudget, setEligibleBudget] = useState(null);
  const [propertyCost, setPropertyCost] = useState(null);
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    if (!toggle) {
      setToggle(!toggle);
      <LoanApplyForm />;
    }
  };

  useEffect(() => {
    // setPropertyCost(downPayment + eligibleBudget);
    calculationAmount();
    // setPropertyCost(eligibleBudget + +(+(+downPayment)));
  }, [downPayment, otherEmi, tenure, interestRate, montIncome]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const calculationAmount = () => {
    const netIncome = (parseInt(montIncome) - parseInt(otherEmi)) * 0.3334;
    const principleAmount = parseInt(netIncome);
    const calculatedInterest = parseInt(interestRate) / 100 / 12;
    const calculatedTanureInMonth = parseInt(tenure) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedTanureInMonth);
    const eligibility = (principleAmount * (x - 1)) / (calculatedInterest * x);
    const eligibile = Math.floor(eligibility);
    const finalCost = Math.floor(parseInt(eligibile) + parseInt(downPayment));

    if (isFinite(eligibile)) {
      setEligibleBudget(formatCurrency(parseInt(eligibile)));
      setPropertyCost(formatCurrency(finalCost));
    }
    if (eligibile <= 0) {
      setEligibleBudget(formatCurrency(parseInt(0)));
      setPropertyCost(formatCurrency(0));
    }
  };

  return (
    <>
      <div className="w-full  bg-gray-50 bg-opacity-70 ">
        <div
          className=" overflow-hidden rounded-b-[200px] "
          style={{
            backgroundImage: `url('https://c.housingcdn.com/growth/s/client/common/assets/AffordabilityCalcMobileBanner.d2a39e88.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <div className=" mt-2 text-left ml-44 relative">
            <span className=" relative text-center  py-2 font-bold font-sans ">
              <h1 className="text-center  py-2 font-bold font-mono text-white text-3xl">
                Affordability Calculator
              </h1>
              <p className="text-center  py-2 font-light font-mono  text-white text-xl ml-9">
                We’ll Help you estimate how much you can afford...
              </p>
            </span>
          </div>

          <div className="relative w-max-full flex justify-between lg:justify-around items-center  gap-1  flex-col lg:flex-row mt-11 overflow-hidden">
            <div className="relative w-fit h-fit lg:bg-black md:w-1/3  items-center my-2 py-4 px-11 lg:bg-opacity-30 ml-4  lg:border lg:border-blue-900 rounded-lg">
              <DownPAy
                value={downPayment}
                onChange={(e) => setDownPayment(e?.target?.value)}
              />
              <GrossIncome
                value={montIncome}
                onChange={(e) => setMonthIncome(e?.target?.value)}
              />
              <Tenure
                value={tenure}
                onChange={(e) => setTenure(e?.target?.value)}
              />
              <InterestRate
                value={interestRate}
                onChange={(e) => setInterestRate(e?.target?.value)}
              />
              <OtherEMI
                value={otherEmi}
                onChange={(e) => setOtherEmi(e?.target?.value)}
              />
            </div>
            {eligibleBudget && propertyCost && (
              <div className="md:w-[600px] lg:bg-black ml-2 mr-4 my-8 py-4 px-11 items-center lg:bg-opacity-50  lg:border lg:border-blue-900 rounded-lg lg:text-white relative mb-11">
                <EligiblityAmount
                  eligibile={eligibleBudget}
                  cost={propertyCost}
                  onChange={(e) => setDownPayment(e.target.value)}
                />
                <PieChart
                  eligibleBudget={eligibleBudget.replace(/[^0-9.-]+/g, "")}
                  cost={propertyCost.replace(/[^0-9.-]+/g, "")}
                />

                <div className="mt-4 ml-2">
                  <Link
                    onChange={toggleHandler}
                    to="/applyform"
                    className="text-white my-6 p-2 bg-orange-400 px-4 rounded-xl text-center ml-52 mt-9 w-44 hover:bg-green-700"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetMainPage;
