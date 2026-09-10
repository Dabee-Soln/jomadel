import React from "react";
import EntryPackagesTable from "../components/EntryPackagesTable";
import { waysToEarn } from "../data";

const CompensationPlan = () => {
  return (
    <div className="bg-white">
      <section className="bg-green-950 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-orange-400 font-semibold uppercase tracking-widest mb-3">
            Transforming Lives Through Health and Wealth
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Jomadel Compensation Plan</h1>
          <p className="text-lg text-green-50">
            A step-by-step business structure designed to reward retail activity,
            referrals, team growth, repurchases, leadership, stockist development
            and long-term achievement.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-orange-900 mb-3">Business Packages</h2>
            <p className="text-gray-600">
              Choose an entry package based on your preferred starting level. Point
              Value (PV) is used throughout the compensation structure.
            </p>
          </div>
          <div className="pkg-bg rounded-2xl overflow-hidden p-4 md:p-8">
            <EntryPackagesTable />
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-green-700 font-semibold uppercase tracking-wider mb-2">16 Income Streams</p>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-3">
              Multiple Ways to Earn
            </h2>
            <p className="text-gray-600">
              Jomadel's compensation plan combines retail, referral, team,
              repurchase, recognition, stockist and company-wide reward streams.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToEarn.map((way, index) => (
              <div key={way.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <way.icon className="text-3xl text-green-600" />
                  <span className="text-3xl font-bold text-orange-100">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{way.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-7">
            <div className="lg:col-span-2 bg-green-50 rounded-2xl p-7">
              <h2 className="text-2xl font-bold text-green-900 mb-4">Key Bonus Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-5 text-gray-700">
                <div><b>Direct Referral:</b> 28% based on package PV.</div>
                <div><b>Indirect Referral:</b> Up to 10% across the 2nd–8th generations, depending on package eligibility.</div>
                <div><b>Direct Upgrade:</b> 28% when directly referred partners upgrade.</div>
                <div><b>Indirect Upgrade:</b> Up to 10% on qualifying upgrades through the 8th generation.</div>
                <div><b>Binary Pairing:</b> 8%–17%, with package-based daily pair limits.</div>
                <div><b>Personal Repurchase:</b> Up to 25% PV on qualifying repurchases.</div>
                <div><b>Unilevel:</b> Up to 30% from team repurchases, extending as deep as 15 generations for qualifying packages.</div>
                <div><b>Global Profit Sharing:</b> Qualified Ambassador-rank leaders participate in a 2% company-profit pool.</div>
              </div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-7">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Eligibility Matters</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Package level determines access to generation depth, pairing rates,
                daily limits and other compensation benefits.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some bonuses also require direct sponsorship on both the left and
                right binary legs and other rank-specific conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-900 text-center mb-8">Awards, Stockists & Community Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-green-700 text-xl mb-3">Awards & Recognition</h3>
                <p className="text-gray-600">Accumulate qualifying PV on the binary lesser leg to progress through ranks and unlock cash, product, technology, travel, vehicle and property awards.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-green-700 text-xl mb-3">Stockist Opportunity</h3>
                <p className="text-gray-600">The plan includes State, Area and Community Stockist levels, with turnover PV earnings, stockist PV, gifts and referral bonuses.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-green-700 text-xl mb-3">Community Support Fund</h3>
                <p className="text-gray-600">Jomadel's plan allocates 2% of company profits to its Community Support Fund as part of its commitment to giving back to society.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Join the Jomadel Success Story</h2>
          <p className="text-green-50 mb-7">
            Be part of a growing network of affiliates transforming lives while
            creating wealth. Choose your package and begin your journey.
          </p>
          <a href="http://www.jomadel.com/default.aspx" className="inline-block bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-lg font-semibold transition">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default CompensationPlan;
