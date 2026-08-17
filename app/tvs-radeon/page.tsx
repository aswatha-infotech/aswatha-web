"use client";

import Navigation from "../components/Navigation";
import TestRideForm from "../components/TestRideForm";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";

const colorGroups = [
  {
    name: "Base",
    options: [
      { name: "Metal Black", value: "#171716" },
      { name: "All Black", value: "#171717" },
      { name: "Titanium Grey", value: "#b2acab" },
      { name: "Royal Purple", value: "#2f0a17" },
      { name: "Starlight Blue", value: "#009eb1" },
    ],
  },
  {
    name: "Digi Cluster Edition",
    options: [
      { name: "Black", value: "#171715" },
      { name: "Blue and Black", value: "#284fd9" },
      { name: "Red and Black", value: "#c31919" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Metal Black": "/img/PRODUCTS/MC/RADEON/base-metal.avif",
    "All Black": "/img/PRODUCTS/MC/RADEON/base-black.avif",
    "Titanium Grey": "/img/PRODUCTS/MC/RADEON/base-grey.avif",
    "Royal Purple": "/img/PRODUCTS/MC/RADEON/base-purple.avif",
    "Starlight Blue": "/img/PRODUCTS/MC/RADEON/base-blue.avif",
    "Black": "/img/PRODUCTS/MC/RADEON/digi-black.avif",
    "Blue and Black": "/img/PRODUCTS/MC/RADEON/digi-blue.avif",
    "Red and Black": "/img/PRODUCTS/MC/RADEON/digi-red.avif",
};

const features = [
  {
    title: "Real Time Mileage Display",
    description: "Allows you to control your mileage based on your riding conditions.",
  },
  {
    title: "Clock, Service Indicator",
    description: "Never miss your important meetings or service schedule",
  },
  {
    title: "Low Fuel Indication",
    description: "Indicates to rush to your nearest petrol bunk before you run out of fuel.",
  },
  {
    title: "Longest Seat",
    description: "Enjoy long rides like never before",
  },
  {
    title: "USB Charger",
    description: "Stay Connected. Charge your phone on the Go",
  },
  {
    title: "Chrome bezel headlamp with DRL",
    description: "Multi facet reflector with LED DRL for your safe journey",
  },
  {
    title: "Unique Impact Resistant Design",
    description: "Safety from scratch & breakage",
  },
  {
    title: "Long Lasting Dura Life Engine",
    description: "Ensures high mileage & performance for years to come.",
  },
  {
    title: "Super strong box iron chassis",
    description: "Everlasting superior strength of the vehicle",
  },
  {
    title: "18” bigger wheels",
    description: "Stability in all types of roads & riding conditions",
  },
  {
    title: "Solid suspension",
    description: "Enjoy your ride in any kind of bumpy roads",
  },
  {
    title : "Convenient all gear self -start",
    description: "Start at any gear as per your convenience",
  },
  {
    title : "Perfect Seat Height",
    description: "Apt seat height for a commanding posture",
  },
  {
    title : "Pillion Grab Rail with Carrier",
    description: "Ease of carrying luggage and pillion safety",
  },
  {
    title : "Lady Pillion handle with hook",
    description: "Comfort for female pillion riders & to carry your daily essentials",
  },
];

const engineSpec = [
  { label: "Capacity", value: "109.7 CC" },
  { label: "Type", value: "4 Stroke Duralife Engine" },
  { label: "Max Power", value: "6.03 kW (8.08 bhp) @7350 rpm" },
  { label: "Max Torque", value: "8.7 Nm @ 4500 rpm" },
  { label: "Bore x Stroke", value: "53.5 mm x 48.8 mm" },
  { label: "Compression Ratio", value: "9.5:1" },
  { label: "EFI system", value: "Eco-Thrust Fuel Injection"},
  { label: "Emission compliance", value: "BS VI" },
  { label: "Cooling system", value: "Oil cooled" },
  { label: "Fuel Tank Capacity", value: "12 L" },
  { label: "Starting", value: "Self start & Kick start" },
  { label: "Transmission", value: "4 speed constant mesh" },
  { label: "Clutch", value: "Wet multi-plate" },
];

const electricalSpec = [
  { label: "Headlamp", value: "LED" },
  { label: "Tail lamp", value: "LED" },
  { label: "Battery", value: "MF battery, 12V 5 Ah (iGO Assist)" },
];

const dimentionSpec = [
  { label: "Height", value: "1080 mm" },
  { label: "Length", value: "2025 mm" },
  { label: "Width", value: "705 mm" },
  { label: "Wheelbase", value: "1265 mm" },
  { label: "Ground Clearance", value: "180 mm" },
  { label: "Kerb Weight", value: "113 kg(Drum) & 115 kg(Disc)" },
];

const chassisSpec = [
  { label: "Chassis Type", value: "Single Cradle Tubular Frame" },
  { label: "Front Suspension", value: "Telescopic oil damped shock absorber" },
  { label: "Rear Suspension", value: "5 step adjustable hydraulic shock absorber" },
  { label: "Ignition type", value: "ECU" },
  { label: "Battery", value: "12V - 4Ah Maintenance Free (MF)" },
  { label: "Headlamp", value: "12V - 35/35W Multi-Reflector with LED DRL (5W)" },
  { label: "Taillamp", value: "12V - 35/35W Multi-Reflector with LED DRL (5W)" },
];

const brakesSpec = [
  { label: "Technology", value: "Synchronized Braking Technology" },
  { label: "Front Brake", value: "130 mm, Drum, Internally Expanding" },
  { label: "COTY Edition (Disc)", value: "240 mm Disc" },
  { label: "Rear Brake", value: "110 mm, Drum, Internally Expanding" },
  { label: "Wheel Type", value: "Premium 5-Spoke Alloy" },
  { label: "Front Tyre", value: "Tubeless - 2.75 x 18 size" },
  { label: "Rear Tyre", value: "Tubeless - 3.00 x 18 size" },
];

const transSpec = [
  { label: "No. of Gears", value: "5" },
  { label: "Fuel System", value: "FI" },
  { label: "Clutch Type", value: "Assist & Slipper clutch" },
];

const asSpec = [
  { label: "USD", value: "Black / Bright Gold" },
  { label: "Headlamp Rim", value: "Black" },
  { label: "Fender Mounting Bracket", value: "Matt Black" },
  { label: "Muffler End Cap", value: "Matt Black" },
  { label: "Seat", value: "Black" },
];

const galleryImages = [
  "/img/PRODUCTS/MC/RADEON/Gallery/1.webp",
  "/img/PRODUCTS/MC/RADEON/Gallery/2.webp",
  "/img/PRODUCTS/MC/RADEON/Gallery/3.webp",
  "/img/PRODUCTS/MC/RADEON/Gallery/4.webp",
];

const stylingHighlights = [
  "Sharp LED headlamp with DRLs",
  "Twin exhaust outlets",
  "Premium split-seat layout",
  "Lightweight alloy wheels with red accents",
];

const tabItems = ["Features", "Specifications"];

export default function ApacheRTXPage() {
  const [activeTab, setActiveTab] = useState("Features");
  const [activeColorTab, setActiveColorTab] = useState(colorGroups[0].name);
  const [activeColor, setActiveColor] = useState(colorGroups[0].options[0].name);

  const activeColorGroup = useMemo(
    () => colorGroups.find((group) => group.name === activeColorTab) ?? colorGroups[0],
    [activeColorTab]
  );

  const selectedColor = useMemo(
    () => activeColorGroup.options.find((color) => color.name === activeColor) ?? activeColorGroup.options[0],
    [activeColor, activeColorGroup]
  );

  const handleTabClick = (tab: string) => {
    const sectionId = tab.toLowerCase();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveTab(tab);
  };

  

  const selectedColorImage = colorImageMap[selectedColor.name] ?? "/img/PRODUCTS/MC/RTX/Apache-RTX.webp";

  return (
    <div className="bg-slate-100 text-slate-900">
      <Navigation />

      <main className="pt-18">
        <section className="relative">
          <img src="/img/HERO/13.webp" alt="TVS Apache RTX hero" className="h-[calc(100vh-96px)] w-full object-cover" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                TVS Radeon
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Radeon
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  A blend of modern tech and retro style, designed to never blend in.
                </p>
              </div>

              {/* <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Top Speed</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">160 km/h</p>
                </div>
                <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Mileage</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">28 km/l</p>
                </div>
              </div> */}

              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Varient</p>
                      <div className="flex flex-wrap gap-2 rounded-3xl bg-slate-100 p-2 mt-4">
                        {colorGroups.map((group) => (
                          <button
                            key={group.name}
                            type="button"
                            onClick={() => {
                              setActiveColorTab(group.name);
                              setActiveColor(group.options[0].name);
                            }}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                              activeColorTab === group.name
                                ? "bg-[#183883] text-white"
                                : "bg-white text-slate-700 hover:bg-slate-200"
                            }`}
                          >
                            {group.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {activeColorGroup.options.map((color) => (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => setActiveColor(color.name)}
                          className={`flex flex-col items-center gap-2 rounded-3xl border px-3 py-3 text-center transition ${
                            activeColor === color.name
                              ? "border-[#183883] bg-[#F0F4FF]"
                              : "border-slate-200 bg-white hover:border-slate-300"
                          }`}
                        >
                          <span className="h-9 w-9 rounded-full border border-slate-200" style={{ backgroundColor: color.value }} />
                          <span className="text-xs font-medium text-slate-800">{color.name}</span>
                        </button>
                      ))}
                    </div>

                    {/* <div className="rounded-[32px] border border-slate-200 bg-white p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Selected color</p>
                      <div className="mt-4 flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 rounded-full border border-slate-200" style={{ backgroundColor: selectedColor.value }} />
                        <div>
                          <p className="text-base font-semibold text-slate-900">{selectedColor.name}</p>
                          <p className="text-sm text-slate-600">Premium color finish available</p>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Preview</p>
                      <div className="mt-5 overflow-hidden rounded-[28px] bg-[#fff] shadow-lg">
                        <img src={selectedColorImage} alt={`Apache RTX ${selectedColor.name}`} className="h-100 w-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-[70px] z-30 bg-white/95 backdrop-blur-xl shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
            {tabItems.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabClick(tab)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab ? "bg-[#183883] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">TVS Radeon details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Radeon stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              {/* <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/MC/RAIDER/Gallery/1.webp" alt="Styling 1" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RAIDER/Gallery/2.webp" alt="Styling 2" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RAIDER/Gallery/3.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RAIDER/Gallery/8.webp" alt="Styling 4" className="w-full h-56 object-cover rounded-md" />
              </div> */}

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/MC/RADEON/Features/1.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/2.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/3.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/4.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/5.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/6.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/7.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/8.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/9.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/10.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/11.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/12.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/13.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/14.webp",
                      "/img/PRODUCTS/MC/RADEON/Features/15.webp",
                    ];

                    const imgSrc = images[idx % images.length];
                    const isEven = idx % 2 === 0;

                    return (
                      <div key={feature.title} className="grid gap-6 items-center lg:grid-cols-2">
                        {isEven ? (
                          <>
                            <img src={imgSrc} alt={feature.title} className="w-full h-90 object-cover rounded-md" />
                            <div>
                              <h3 className="text-2xl font-semibold text-slate-900">{feature.title}</h3>
                              <p className="mt-3 text-slate-600">{feature.description}</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <h3 className="text-2xl font-semibold text-slate-900">{feature.title}</h3>
                              <p className="mt-3 text-slate-600">{feature.description}</p>
                            </div>
                            <img src={imgSrc} alt={feature.title} className="w-full h-90 object-cover rounded-md" />
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div id="specifications" className="scroll-mt-[120px] rounded-[32px] border border-slate-200 bg-slate-50 p-8">
                
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DC4226]">Specifications</p>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Engine</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {engineSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Chassis</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {chassisSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Dimensions</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {dimentionSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                
               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Type, Wheel & Brakes</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {brakesSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">Gallery</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">TVS Radeon in motion</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                  <img src={src} alt={`TVS Raider gallery ${index + 1}`} className="h-56 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestRideForm />
        <Footer />
      </main>
    </div>
  );
}
