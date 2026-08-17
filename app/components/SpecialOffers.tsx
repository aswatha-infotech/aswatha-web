"use client";

import React from "react";

type Offer = {
  id: string;
  title: string;
  subtitle?: string;
  price?: string;
  badge?: string;
  image: string;
};

const offers: Offer[] = [
  {
    id: "o1",
    title: "0% EMI for 12 months",
    subtitle: "On select motorcycles",
    price: "EMI starting ₹3,999",
    badge: "Limited",
    image: "/img/HERO/1.webp",
  },
  {
    id: "o2",
    title: "Free Accessories",
    subtitle: "Helmet + jacket on purchase",
    price: "Worth ₹4,999",
    badge: "Offer",
    image: "/img/HERO/2.webp",
  },
  {
    id: "o3",
    title: "Exchange Bonus",
    subtitle: "Up to ₹10,000 on old bikes",
    price: "T&C apply",
    badge: "Hot",
    image: "/img/HERO/3.webp",
  },
  {
    id: "o4",
    title: "Test Ride Voucher",
    subtitle: "Get ₹500 voucher",
    price: "Instant",
    badge: "New",
    image: "/img/HERO/4.webp",
  },
];

export default function SpecialOffers() {
  return (
    <section id="special-offers" className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#DC4226]">Offers</p>
            <h3 className="mt-1 text-2xl font-bold text-slate-900">Special Offers</h3>
          </div>
        </div>

        <div className="-mx-4 overflow-x-auto px-0 no-scrollbar">
          <div className="flex w-max gap-2 py-4">
            {offers.map((offer) => (
              <article key={offer.id} className="flex-none w-[320px] rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative mb-3 h-36 w-full overflow-hidden rounded-xl bg-slate-50">
                  <img src={offer.image} alt={offer.title} className="h-full w-full object-cover" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-900">{offer.title}</h4>
                  {offer.badge && <span className="rounded-full bg-[#DC4226] px-2 py-0.5 text-xs font-semibold text-white">{offer.badge}</span>}
                </div>
                <p className="mb-3 text-xs text-slate-500">{offer.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">{offer.price}</span>
                  <button className="rounded-full bg-[#DC4226] px-3 py-1 text-xs font-semibold text-white hover:bg-[#c13b22]">Redeem</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
