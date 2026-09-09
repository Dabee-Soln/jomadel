import React from 'react'
import { packages } from '../data'

const EntryPackagesTable = () => {
  return (
    <div className="overflow-x-auto"> {/* Added for horizontal scrolling on smaller screens */}
    <table className="min-w-full border-collapse border border-gray-300 bg-transparent">
      <thead>
        <tr className="bg-white">
          <th className="border border-gray-300 px-4 py-2">Package</th>
          <th className="border border-gray-300 px-4 py-2">Amount</th>
          <th className="border border-gray-300 px-4 py-2">Products</th>
        </tr>
      </thead>
      <tbody>
        {packages.map((pkg, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-orange-500 text-white' : 'bg-gray-50'}> {/* Alternating row colors */}
            <td className="border border-gray-300 px-4 py-2">{pkg.name}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{pkg.amount}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{pkg.pv}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default EntryPackagesTable