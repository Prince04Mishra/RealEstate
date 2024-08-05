// import React, { useState } from "react";
// import YearWiseBreakdown from "./YearWiseBreakdown";

// const LoanSummaryTable = ({ monthlyBreakdown, years }) => {
//   const [activeYear, setActiveYear] = useState(1);

//   const handlePreviousYear = () => {
//     if (activeYear > 1) {
//       setActiveYear(activeYear - 1);
//     }
//   };

//   const handleNextYear = () => {
//     if (activeYear < years) {
//       setActiveYear(activeYear + 1);
//     }
//   };

//   return (
//     <div className="md:mx-36 lg:mx-72 py-4 bg-slate-50 rounded-3xl lg:bg-green-100 mt-6 lg:mt-28 outline outline-offset-2 lg:outline-pink-400 mb-40">
//       <div className="flex justify-between items-center mt-8  px-6 ">
//         <button
//           className={`bg-blue-500 text-white  hover:bg-blue-300 hover:shadow-md p-2 rounded-md ${
//             activeYear === 1 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           onClick={handlePreviousYear}
//           disabled={activeYear === 1}
//         >
//           Previous Year
//         </button>
//         <span className="text-xl">Year {activeYear}</span>
//         <button
//           className={`bg-blue-500 text-white p-2 rounded-md  hover:bg-blue-300 hover:shadow-md ${
//             activeYear === years ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           onClick={handleNextYear}
//           disabled={activeYear === years}
//         >
//           Next Year
//         </button>
//       </div>
//       <YearWiseBreakdown
//         monthlyBreakdown={monthlyBreakdown}
//         year={activeYear}
//       />
//     </div>
//   );
// };

// export default LoanSummaryTable;

import React, { useState } from "react";
import YearWiseBreakdown from "./YearWiseBreakdown";

const LoanSummaryTable = ({ monthlyBreakdown, years, totalPayment }) => {
  const [activeYear, setActiveYear] = useState(1);

  return (
    <div className="md:mx-36 lg:mx-72 py-4 bg-slate-50 rounded-3xl lg:bg-green-100 mt-6 lg:mt-28 outline outline-offset-2 lg:outline-pink-400 mb-40">
      <YearWiseBreakdown
        monthlyBreakdown={monthlyBreakdown}
        year={activeYear}
        totalPayment={totalPayment}
      />
    </div>
  );
};

export default LoanSummaryTable;
