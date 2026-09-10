import React from "react";
import { packages } from "../data";

const EntryPackagesTable = () => (
  <div className="overflow-x-auto rounded-xl">
    <table className="min-w-full border-collapse bg-white">
      <thead>
        <tr className="bg-green-900 text-white">
          <th className="px-4 py-3 text-left">Package</th>
          <th className="px-4 py-3 text-center">Amount</th>
          <th className="px-4 py-3 text-center">Point Value (PV)</th>
        </tr>
      </thead>
      <tbody>
        {packages.map((pkg, index) => (
          <tr key={pkg.name} className={index % 2 === 0 ? "bg-white" : "bg-orange-50"}>
            <td className="border-t border-gray-200 px-4 py-3 font-semibold">{pkg.name}</td>
            <td className="border-t border-gray-200 px-4 py-3 text-center">{pkg.amount}</td>
            <td className="border-t border-gray-200 px-4 py-3 text-center">{pkg.pv}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default EntryPackagesTable;
