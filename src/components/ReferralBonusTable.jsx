import React from "react";
import { referralBonus } from "../data";

const ReferralBonusTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2" rowSpan={2}>
              Package
            </th>
            <th className="border border-gray-300 px-4 py-2" rowSpan={2}>
              Amount
            </th>
            <th className="border border-gray-300 px-4 py-2" rowSpan={2}>
              PV
            </th>
            <th className="border border-gray-300 px-4 py-2" colSpan={3}>
              Referral Bonus
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Direct(%)</th>
            <th className="border border-gray-300 px-4 py-2">Indirect(%)</th>
            <th className="border border-gray-300 px-4 py-2">Total(%)</th>
          </tr>
        </thead>
        <tbody>
          {referralBonus.map((bonus, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-300 px-4 py-2">
                {bonus.name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {bonus.amount}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {bonus.pv}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {bonus.direct}({bonus.directAmount})
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {bonus.indirect}({bonus.indirectAmount})
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {bonus.total}({bonus.totalAmount})
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralBonusTable;
