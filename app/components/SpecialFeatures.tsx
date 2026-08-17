"use client";

import {
  WrenchIcon,
  TruckIcon,
  Cog6ToothIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const FEATURES = [
  {
    title: "Service Workshop Open All 7 Days",
    desc: "Service workshop open throughout the week",
    Icon: WrenchIcon,
  },
  {
    title: "Service Pick Up & Drop Facility",
    desc: "Convenient pick-up and drop service",
    Icon: TruckIcon,
  },
  {
    title: "TVS Genuine Parts & Oil",
    desc: "Factory genuine parts and lubricants",
    Icon: Cog6ToothIcon,
  },
  {
    title: "Annual Maintenance Plan Coverage",
    desc: "Comprehensive annual maintenance plans",
    Icon: CalendarDaysIcon,
  },
  {
    title: "5 Years Standard Warranty",
    desc: "Extended standard warranty for peace of mind",
    Icon: ShieldCheckIcon,
  },
  {
    title: "24 x 7 Assistance Through RSA",
    desc: "Round-the-clock roadside assistance",
    Icon: DevicePhoneMobileIcon,
  },
];

export default function SpecialFeatures() {
  return (
    <section id="special-features" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#DC4226]">Special Features</p>
          <h3 className="mt-1 text-2xl font-bold text-slate-900">Customised Care For All Your Needs</h3>
        </div>

        <div className="mx-auto max-w-6xl mt-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6 items-start justify-center text-center">
            {FEATURES.map((f) => {
              const Icon = f.Icon;
              return (
                <div key={f.title} className="flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 shadow-sm">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="max-w-[140px]">
                    <h4 className="text-sm font-semibold text-slate-500">{f.title}</h4>
                    {/* <p className="mt-1 text-xs text-slate-500">{f.desc}</p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
