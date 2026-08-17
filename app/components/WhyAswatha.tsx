"use client";

import {
  ShieldCheckIcon,
  BuildingStorefrontIcon,
  BanknotesIcon,
  WrenchIcon,
  UserGroupIcon,
  TruckIcon,
  HandRaisedIcon,
  SparklesIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export default function WhyAswatha() {
  return (
    <section id="why-aswatha" className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 px-0 py-16 text-slate-900 sm:px-6 lg:px-4">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[420px] w-[210px] bg-[url('/img/BG/red-horse.png')] bg-contain bg-center bg-no-repeat opacity-10" />
      <div className="pointer-events-none absolute -right-16 top-24 h-80 w-80 rounded-full bg-[#60A5FA]/20 blur-3xl" />
      <div className="pointer-events-none absolute left-8 bottom-4 h-44 w-44 rounded-full bg-[#60A5FA]/20 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] sm:p-10">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DC4226]">Why Choose Aswatha TVS?</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Your Trusted TVS Partner for Every Ride</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              At <strong className="text-slate-950">Aswatha TVS</strong>, we don't just sell two-wheelers—we help you choose the perfect ride with complete confidence. From expert guidance and attractive finance options to genuine service support, we're committed to delivering an exceptional ownership experience from day one.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Authorized TVS Dealership",
                description:
                  "Experience the complete range of genuine TVS motorcycles, scooters, and electric vehicles backed by authentic products, transparent pricing, and manufacturer-approved services.",
                icon: ShieldCheckIcon,
              },
              {
                title: "Wide Range of TVS Models",
                description:
                  "Explore the latest TVS bikes, scooters, and EVs under one roof. Whether you're looking for daily commuting, performance, or family mobility, we have the perfect vehicle for your needs.",
                icon: BuildingStorefrontIcon,
              },
              {
                title: "Easy Finance & Exchange Support",
                description:
                  "Own your dream TVS with flexible finance solutions, competitive EMI options, and hassle-free exchange assistance designed to fit your budget.",
                icon: BanknotesIcon,
              },
              {
                title: "Expert Service & Genuine Spare Parts",
                description:
                  "Our trained technicians use genuine TVS spare parts and advanced diagnostic equipment to keep your vehicle performing at its best.",
                icon: WrenchIcon,
              },
              {
                title: "Experienced & Friendly Team",
                description:
                  "Our knowledgeable sales and service professionals are dedicated to providing honest advice, transparent communication, and personalized assistance throughout your journey.",
                icon: UserGroupIcon,
              },
              {
                title: "Fast Delivery Process",
                description:
                  "Complete your purchase quickly with smooth documentation and timely vehicle delivery, so you can hit the road without unnecessary delays.",
                icon: TruckIcon,
              },
              {
                title: "Customer-First Approach",
                description:
                  "Your satisfaction is our priority. We believe in building long-term relationships through reliable service, transparency, and consistent support.",
                icon: HandRaisedIcon,
              },
              {
                title: "Complete Ownership Experience",
                description:
                  "From vehicle selection and insurance to service reminders and after-sales care, we're with you at every stage of your ownership journey.",
                icon: SparklesIcon,
              },
              {
                title: "Insurance & Registration Assistance",
                description:
                  "Enjoy a hassle-free buying experience with complete support for vehicle insurance, registration, and documentation. Our team takes care of the paperwork so you can focus on enjoying your new TVS.",
                icon: DocumentTextIcon,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-[#F59E0B] to-[#DC4226] text-white shadow-md shadow-[#DC4226]/20">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
