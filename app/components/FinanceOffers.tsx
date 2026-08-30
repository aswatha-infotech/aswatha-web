"use client";

import { useMemo, useState } from "react";

const INR = new Intl.NumberFormat("en-IN");

const offers = [
  {
    title: "Low Down Payment Schemes",
    description:
      "Drive home your favorite TVS motorcycle or scooter with minimal upfront investment and flexible initial deposit plans.",
  },
  {
    title: "Attractive EMI & Low Interest Rates",
    description:
      "Choose from customized repayment tenures spanning 12 to 48 months with competitive interest rates designed to fit your monthly budget.",
  },
  {
    title: "Instant Digital Approvals",
    description:
      "Experience quick, paperless processing with minimal documentation and get your loan approved right here at the showroom within minutes.",
  },
  {
    title: "Exclusive Dealer Cashback & Zero-Cost EMI",
    description:
      "Take advantage of limited-period bank offers, festive cashbacks, and special zero-processing-fee schemes on select models.",
  },
  {
    title: "Multi-Partner Network",
    description:
      "We collaborate with leading banks and top NBFCs to ensure you secure the best loan terms available.",
  },
  {
    title: "100% Transparent Process",
    description:
      "Enjoy peace of mind with zero hidden charges. Our finance experts break down every cost upfront before you make a commitment.",
  },
];

const calculateEmi = (principal: number, annualRate: number, months: number) => {
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / months;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
};

export default function FinanceOffers() {
  const [loanAmount, setLoanAmount] = useState(150000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenureMonths, setTenureMonths] = useState(36);

  const monthlyEmi = useMemo(
    () => Math.max(0, calculateEmi(loanAmount, interestRate, tenureMonths)),
    [loanAmount, interestRate, tenureMonths]
  );

  return (
    <section id="finance-offers" className="bg-slate-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#DC4226]">Finance offers</p>
          <h3 className="mt-1 text-2xl font-bold text-slate-900">Ride Home Today with Easy Financing</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Tailored loan options, lowest interest rates, and instant approvals to make your dream TVS two-wheeler affordable.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] bg-white/90 p-6 sm:p-8 ring-1 ring-slate-200/70">
            <ul className="space-y-4">
              {offers.map((offer) => (
                <li key={offer.title} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-400" />
                  <div>
                    <h4 className="text-base font-semibold text-slate-900">{offer.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{offer.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[32px] bg-white/95 p-6 sm:p-8 ring-1 ring-slate-200/70">
            <div className="mb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F172A]">EMI Calculator</p>
              <h4 className="mt-3 text-lg font-bold text-slate-900">Estimate your monthly payment</h4>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <label className="text-sm font-medium text-slate-700">Loan Amount</label>
                  <span className="text-sm font-semibold text-slate-900">₹{INR.format(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={500000}
                  step={5000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="mt-3 w-full accent-[#DC4226]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-3">
                  <label className="text-sm font-medium text-slate-700">Interest Rate (%)</label>
                  <span className="text-sm font-semibold text-slate-900">{interestRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={18}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="mt-3 w-full accent-[#DC4226]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-3">
                  <label className="text-sm font-medium text-slate-700">Tenure (months)</label>
                  <span className="text-sm font-semibold text-slate-900">{tenureMonths}</span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={60}
                  step={6}
                  value={tenureMonths}
                  onChange={(e) => setTenureMonths(Number(e.target.value))}
                  className="mt-3 w-full accent-[#DC4226]"
                />
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-slate-100 p-5">
              <p className="text-sm text-slate-500">Estimated monthly EMI</p>
              <p className="mt-3 text-2xl font-bold text-slate-900">₹{INR.format(Math.round(monthlyEmi))}</p>
              <p className="mt-2 text-sm text-slate-600">Based on ₹{INR.format(loanAmount)} for {tenureMonths} months at {interestRate.toFixed(1)}%.</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:8270015000"
                className="rounded-full bg-[#DC4226] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#c13b22] text-center"
              >
                Talk to a Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
