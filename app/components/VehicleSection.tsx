"use client";

import { useState, useRef, useEffect } from "react";

type VehicleCategory = "Motorcycle" | "Moped" | "Scooter" | "Electric";

type Vehicle = {
  name: string;
  category: VehicleCategory;
  engine: string;
  power: string;
  weight: string;
  price: string;
  description: string;
  brand: string;
  picture: string;
};

const vehicles: Vehicle[] = [
  {
    name: "TVS XL",
    category: "Moped",
    engine: "110cc",
    power: "8 PS",
    weight: "115 Kg",
    price: "₹ 45,000 /-",
    description: "Reliable and practical for everyday city commuting.",
    brand: "/img/PRODUCTS/MOPED/XL/TVS-XL-100-logo.svg",
    picture: "/img/PRODUCTS/MOPED/XL/TVS-xl-100.webp",
  },
  {
    name: "TVS Zest 110",
    category: "Scooter",
    engine: "110cc",
    power: "8.4 PS",
    weight: "106 Kg",
    price: "₹ 72,000 /-",
    description: "A compact scooter built for smooth urban mobility.",
    brand: "/img/PRODUCTS/SCOOTER/ZEST/TVS-Zest-110-logo.svg",
    picture: "/img/PRODUCTS/SCOOTER/ZEST/zest.webp",
  },
  {
    name: "TVS Jupiter",
    category: "Scooter",
    engine: "110cc",
    power: "8.25 PS",
    weight: "110 Kg",
    price: "₹ 80,000 /-",
    description: "Comfort-focused and ideal for daily rides.",
    brand: "/img/PRODUCTS/SCOOTER/JUPITER/TVS-Jupiter-logo.svg",
    picture: "/img/PRODUCTS/SCOOTER/JUPITER/jupiter.webp",
  },
  {
    name: "TVS Jupiter 125",
    category: "Scooter",
    engine: "125cc",
    power: "8.4 PS",
    weight: "112 Kg",
    price: "₹ 85,000 /-",
    description: "A stylish upgrade with better performance and space.",
    brand: "/img/PRODUCTS/SCOOTER/JUPITER125/jupiter-125-logo.png",
    picture: "/img/PRODUCTS/SCOOTER/JUPITER125/jupiter-125.webp",
  },
  {
    name: "TVS NTorq 125",
    category: "Scooter",
    engine: "125cc",
    power: "9.4 PS",
    weight: "116 Kg",
    price: "₹ 95,000 /-",
    description: "Sporty design with lively performance and smart features.",
    brand: "/img/PRODUCTS/SCOOTER/NTORQ125/TVS-NTorq-125-logo.svg",
    picture: "/img/PRODUCTS/SCOOTER/NTORQ125/Ntorq.webp",
  },
  {
    name: "TVS NTorq 150",
    category: "Scooter",
    engine: "150cc",
    power: "10.25 PS",
    weight: "118 Kg",
    price: "₹ 1,05,000 /-",
    description: "A bold scooter with stronger road presence.",
    brand: "/img/PRODUCTS/SCOOTER/NTORQ150/Ntorq-150-logo.webp",
    picture: "/img/PRODUCTS/SCOOTER/NTORQ150/Ntorq-150.webp",
  },
  {
    name: "iQube",
    category: "Electric",
    engine: "EV",
    power: "7.6 PS",
    weight: "122 Kg",
    price: "₹ 1,20,000 /-",
    description: "Electric convenience with a modern and efficient design.",
    brand: "/img/PRODUCTS/EV/IQUBE/TVS-IQube-logo.svg",
    picture: "/img/PRODUCTS/EV/IQUBE/Tvs-iqube.webp",
  },
  {
    name: "Orbiter",
    category: "Electric",
    engine: "EV",
    power: "3.3 kW",
    weight: "135 Kg",
    price: "₹ 1,40,000 /-",
    description: "A clean, quiet ride tailored for smart commuting.",
    brand: "/img/PRODUCTS/EV/ORBITER/TVS-Orbiter-Logo.webp",
    picture: "/img/PRODUCTS/EV/ORBITER/TVS-Orbiter.webp",
  },
  {
    name: "TVS Sport",
    category: "Motorcycle",
    engine: "110cc",
    power: "8.02 PS",
    weight: "114 Kg",
    price: "₹ 68,000 /-",
    description: "Classic styling with dependable everyday performance.",
    brand: "/img/PRODUCTS/MC/SPORT/TVS-Sport-logo.svg",
    picture: "/img/PRODUCTS/MC/SPORT/TVS-sport.webp",
  },
  {
    name: "TVS Star City Plus",
    category: "Motorcycle",
    engine: "110cc",
    power: "8.3 PS",
    weight: "123 Kg",
    price: "₹ 75,000 /-",
    description: "Comfortable and practical for daily city use.",
    brand: "/img/PRODUCTS/MC/STAR/TVS-Star-City-logo.svg",
    picture: "/img/PRODUCTS/MC/STAR/TVS-STAR-City.webp",
  },
  {
    name: "TVS Radeon",
    category: "Motorcycle",
    engine: "110cc",
    power: "8.2 PS",
    weight: "115 Kg",
    price: "₹ 71,000 /-",
    description: "A balanced commuter with a premium road feel.",
    brand: "/img/PRODUCTS/MC/RADEON/TVS-Radeon-logo.svg",
    picture: "/img/PRODUCTS/MC/RADEON/TVS-Radeon.webp",
  },
  {
    name: "TVS Raider",
    category: "Motorcycle",
    engine: "125cc",
    power: "11.4 PS",
    weight: "135 Kg",
    price: "₹ 1,10,000 /-",
    description: "Sporty styling with strong performance and agility.",
    brand: "/img/PRODUCTS/MC/RAIDER/TVS-Raider-logo.svg",
    picture: "/img/PRODUCTS/MC/RAIDER/TVS-Raider.webp",
  },
  {
    name: "TVS Ronin",
    category: "Motorcycle",
    engine: "225cc",
    power: "20.3 PS",
    weight: "153 Kg",
    price: "₹ 1,35,000 /-",
    description: "A bold, premium motorcycle with standout design.",
    brand: "/img/PRODUCTS/MC/RONIN/TVS-Ronin-logo.svg",
    picture: "/img/PRODUCTS/MC/RONIN/TVS-Ronin.webp",
  },
  {
    name: "TVS Apache RTR Series",
    category: "Motorcycle",
    engine: "160cc*",
    power: "15.4 PS*",
    weight: "135 Kg*",
    price: "₹ 1,35,000 /-",
    description: "A refined streetbike with responsive performance.",
    brand: "/img/PRODUCTS/MC/APACHE/TVS-Apache-RTR-logo.svg",
    picture: "/img/PRODUCTS/MC/APACHE/Apache-RTR-200.webp",
  },
  {
    name: "TVS RTX",
    category: "Motorcycle",
    engine: "299.1 cc",
    power: "36 PS",
    weight: "180 Kg",
    price: "₹ 1,99,000 /-",
    description: "Built for versatility with a commanding ride feel.",
    brand: "/img/PRODUCTS/MC/RTX/Apache-RTX-logo.webp",
    picture: "/img/PRODUCTS/MC/RTX/Apache-RTX.webp",
  },
  {
    name: "TVS RR 310",
    category: "Motorcycle",
    engine: "310cc",
    power: "34 PS",
    weight: "169 Kg",
    price: "₹ 2,75,000 /-",
    description: "High-performance engineering for riders seeking excitement.",
    brand: "/img/PRODUCTS/MC/RR/TVS-Apache-RR-310-logo.svg",
    picture: "/img/PRODUCTS/MC/RR/RR-310.webp",
  },
  {
    name: "TVS RTR 310",
    category: "Motorcycle",
    engine: "310cc",
    power: "34 PS",
    weight: "169 Kg",
    price: "₹ 2,69,000 /-",
    description: "A race-inspired machine with refined control and power.",
    brand: "/img/PRODUCTS/MC/RTR/TVS-Apache-RTR-310-logo.svg",
    picture: "/img/PRODUCTS/MC/RTR/RTR-310.webp",
  },
];

const categories: VehicleCategory[] = ["Motorcycle", "Scooter", "Electric", "Moped"];

export default function VehicleSection() {
  const [activeTab, setActiveTab] = useState<VehicleCategory>("Motorcycle");

  const visibleVehicles = vehicles.filter((vehicle) => vehicle.category === activeTab);

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    return () => {
      // reset user-select in case component unmounts while dragging
      document.body.style.userSelect = "auto";
    };
  }, []);

  function handlePointerDown(e: React.PointerEvent) {
    // allow native touch scrolling; only handle mouse/pen drag for desktop drag-to-scroll
    if (e.pointerType === "touch") return;
    const el = scrollerRef.current;
    if (!el) return;
    isDownRef.current = true;
    startXRef.current = e.clientX;
    scrollLeftRef.current = el.scrollLeft;
    if (el.setPointerCapture) el.setPointerCapture(e.pointerId as any);
    el.classList.add("cursor-grabbing");
    document.body.style.userSelect = "none";
  }

  function handlePointerMove(e: React.PointerEvent) {
    const el = scrollerRef.current;
    if (!el || !isDownRef.current) return;
    const x = e.clientX;
    const walk = x - startXRef.current;
    el.scrollLeft = scrollLeftRef.current - walk;
  }

  function handlePointerUp(e: React.PointerEvent) {
    const el = scrollerRef.current;
    isDownRef.current = false;
    try {
      if (el && el.releasePointerCapture) el.releasePointerCapture(e.pointerId as any);
    } catch {}
    el?.classList.remove("cursor-grabbing");
    document.body.style.userSelect = "auto";
  }

  function handlePointerLeave(e: React.PointerEvent) {
    // treat leaving as end of drag
    const el = scrollerRef.current;
    isDownRef.current = false;
    el?.classList.remove("cursor-grabbing");
    document.body.style.userSelect = "auto";
  }

  function scrollByAmount(amount: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft + amount, behavior: "smooth" });
  }

  return (
    <section id="vehicles" className="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#DC4226]">Discover Your Ride</p>
            <h3 className="mt-1 text-2xl font-bold text-slate-900">Choose Your Ride</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const btnClass =
                "rounded-full px-4 py-2 text-sm font-medium transition " +
                (activeTab === category
                  ? "bg-[#DC4226] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200");
              return (
                <button key={category} type="button" onClick={() => setActiveTab(category)} className={btnClass}>
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6 h-px w-full bg-slate-200" />

        <div className="relative">
          <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-2">
            <button
              type="button"
              onClick={() => scrollByAmount(-340)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#DC4226] text-white shadow-lg shadow-[#DC4226]/30 transition hover:bg-[#c13b22] opacity-50 hover:opacity-100 cursor-pointer"
              aria-label="Scroll left"
            >
              <span aria-hidden="true">‹</span>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-10 flex items-center pr-2">
            <button
              type="button"
              onClick={() => scrollByAmount(340)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#DC4226] text-white shadow-lg shadow-[#DC4226]/30 transition hover:bg-[#c13b22] opacity-50 hover:opacity-100 cursor-pointer"
              aria-label="Scroll right"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>

          <div
            className="-mx-4 overflow-x-auto px-4 no-scrollbar cursor-grab"
            style={{ touchAction: 'pan-y' }}
            ref={scrollerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
          >
            <div className="flex w-max gap-6 py-2 snap-x snap-mandatory">
            {visibleVehicles.map((vehicle) => (
              <article
                key={vehicle.name}
                className="snap-start flex-none w-[300px] sm:w-[320px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="p-6">
                    <div className="flex justify-center py-4">
                    <img src={vehicle.brand} alt={vehicle.name + ' brand'} className="w-50 h-auto object-contain" />
                  </div>
                  <div className="relative mx-auto mb-6 h-40 w-full overflow-hidden rounded-[28px] p-2">
                    <img
                      src={vehicle.picture}
                      alt={vehicle.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-lg font-semibold text-slate-900">{vehicle.name}</h3>

                  <div className="mt-4 grid grid-cols-3 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-3 text-center text-xs text-slate-500">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400">Engine</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">{vehicle.engine}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400">Power</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">{vehicle.power}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400">Weight</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">{vehicle.weight}</p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-slate-200 pt-4 text-center text-sm text-slate-500">
                    {/* price could go here */}
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <button className="rounded-full border border-slate-300 bg-white py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                      Know More
                    </button>
                    <button className="rounded-full bg-[#183883] py-2 text-sm font-semibold text-white transition hover:bg-[#c13b22]">
                      Test Ride
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
