import React from "react";
import EntryPackagesTable from "../components/EntryPackagesTable";
// import ReferralBonusTable from "../components/ReferralBonusTable";
// import { waysToEarn } from "../data";
// import complan from "../assets/complan.pdf";

const CompensationPlan = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center tet-blue-900">
          Compensation Plan
        </h1>

        <div className="mb-8 pkg-bg">
          <h2 className="text-5xl uppercase font-semibold mb-4 text-white text-center">
            Entry Packages
          </h2>
          <EntryPackagesTable />
        </div>

        {/* <div className="mb-8">
          <h2 className="text-3xl font-semibold mt-8 mb-4 text-blue-700 text-center">
            10 Ways to Earn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {waysToEarn.map((way, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="text-3xl text-blue-500 mb-2">
                  <way.icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {way.title}
                </h3>
                <p className="text-gray-600 text-sm">{way.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Referral Bonus
          </h2>
          <ReferralBonusTable />
        </div> */}

        {/* <div className="mt-8 text-center">
          {" "}
         
          <p className="mb-2">
            To know more about our juicy compensation plan, kindly download the
            document below
          </p>
          <a
            href={complan}
            download="compensation_plan.pdf" // Set the download attribute and filename
            className="bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block"
          >
            Download Compensation Plan (PDF)
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default CompensationPlan;
