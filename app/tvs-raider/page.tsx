"use client";

import Navigation from "../components/Navigation";
import TestRideForm from "../components/TestRideForm";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";

const colorGroups = [
  {
    name: "SSE",
    options: [
      { name: "Doomsday", value: "#1e5d34" },
      { name: "Deadpool", value: "#ba0f27" },
      { name: "Wolverine", value: "#dac71c" },
      { name: "Black Panther", value: "#222222" },
      { name: "Iron Man", value: "#ff1446" },
    ],
  },
  {
    name: "TFT DD",
    options: [
      { name: "Nitro Green", value: "#a8ae1d" },
      { name: "Striking Red", value: "#fd1923" },
      { name: "Metallic Blue", value: "#00418f" },
    ],
  },
  {
    name: "SXC DD",
    options: [
      { name: "Nitro Green", value: "#a8ae1d" },
      { name: "Striking Red", value: "#fd1923" },
      { name: "Metallic Blue", value: "#00418f" },
    ],
  },
  {
    name: "IGO",
    options: [
      { name: "Wicked Black", value: "#050505" },
      { name: "Nardo Grey", value: "#9da6b3" },
    ],
  },
  {
    name: "SPLIT SEAT",
    options: [
      { name: "Wicked Black split", value: "#050505" },
      { name: "Striking Red split", value: "#fd1923" },
      { name: "Blazing Blue split", value: "#251d56" },
    ],
  },
  {
    name: "SINGLE SEAT",
    options: [
      { name: "Mercury Grey single", value: "#668099" },
      { name: "Wicked Black single", value: "#050505" },
      { name: "Striking Red single", value: "#fd1923" },
    ],
  },
  {
    name: "DRUM",
    options: [
      { name: "Mercury Grey Drum", value: "#668099" },
      { name: "Wicked Black Drum", value: "#050505" },
      { name: "Striking Red Drum", value: "#fd1923" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Doomsday": "/img/PRODUCTS/MC/RAIDER/sse-doomsday.avif",
    "Deadpool": "/img/PRODUCTS/MC/RAIDER/sse-deadpool.avif",
    "Wolverine": "/img/PRODUCTS/MC/RAIDER/sse-wolverine.avif",
    "Black Panther": "/img/PRODUCTS/MC/RAIDER/sse-blackpanther.avif",
    "Iron Man": "/img/PRODUCTS/MC/RAIDER/sse-ironman.avif",
    "Nitro Green": "/img/PRODUCTS/MC/RAIDER/tft-nitro.avif",
    "Striking Red": "/img/PRODUCTS/MC/RAIDER/tft-red.avif",
    "Metallic Blue": "/img/PRODUCTS/MC/RAIDER/tft-blue.avif",
    "Wicked Black": "/img/PRODUCTS/MC/RAIDER/igo-black.avif",
    "Nardo Grey": "/img/PRODUCTS/MC/RAIDER/igo-grey.avif",
    "Wicked Black split": "/img/PRODUCTS/MC/RAIDER/split-black.avif",
    "Striking Red split": "/img/PRODUCTS/MC/RAIDER/split-red.avif",
    "Blazing Blue split": "/img/PRODUCTS/MC/RAIDER/split-blue.avif",
    "Mercury Grey single": "/img/PRODUCTS/MC/RAIDER/single-grey.avif",
    "Wicked Black single": "/img/PRODUCTS/MC/RAIDER/single-black.avif",
    "Striking Red single": "/img/PRODUCTS/MC/RAIDER/single-red.avif",
    "Mercury Grey Drum": "/img/PRODUCTS/MC/RAIDER/drum-grey.avif",
    "Wicked Black Drum": "/img/PRODUCTS/MC/RAIDER/drum-black.avif",
    "Striking Red Drum": "/img/PRODUCTS/MC/RAIDER/drum-red.avif",
};

const features = [
  {
    title: "Comfortable ride stance",
    description: "Enhance your wicked style with ease of riding.",
  },
  {
    title: "Sporty fuel tank",
    description: "Sleek fuel tank with a sporty quotient.",
  },
  {
    title: "Split seat with premium rexin",
    description: "Enjoy the all-new wicked split seat with comfort.",
  },
  {
    title: "Body-colored engine guard",
    description: "An addition to the wicked aesthetic.",
  },
  {
    title: "Rotopetal disc brake",
    description: "For top-tier safety and style.",
  },
  {
    title: "Sporty half chain case",
    description: "Complement your perfect wicked ride.",
  },
  {
    title: "Sporty-toe gear shift",
    description: "To get you in the right gear.",
  },
  {
    title: "Wide handlebars, Al handlebar holder",
    description: "A relaxed riding stance on your wicked ride.",
  },
  {
    title: "Aluminum Pillion Handle",
    description: "For supreme safety and style.",
  },
  {
    title: "TFT Display",
    description: "TFT Display with 99+ Connected Features.",
  },
  {
    title: "NAVIGATION",
    description: "Turn-by-turn Navigation with on-screen and voice prompts along with Auto-Navigation assist to nearest fuel pump on low fuel",
  },
  {
    title : "HMI",
    description: "Wicked just got wickeder with Human Machine Interface buttons. Now activate navigation or access critical information, all with a single touch",
  },
  {
    title : "CALL MANAGEMENT",
    description: "ON-THE-GO call management & single touch button operation .",
  },
  {
    title : "SCORE AND WEATHER FEATURES",
    description: "Always be updated, even on the go. With TVS Raider’s auditory features like live match scores and weather updates, now miss nothing.",
  },
  {
    title : "RIDE REPORTS",
    description: "Get Socially Wicked. Share more than just words with ride reports sharing.",
  },
  {
    title : "UNBEATABLE Mileage",
    description: "INTELLIGENT stop-start technology.",
  },
  {
    title : "GTT (Glide through Technology )",
    description: "Effortless slow speed riding in traffic conditions.",
  },
  {
    title : "Wider Split seat high-density seat foam",
    description: "Go further comfortably, with Raider.",
  },
  {
    title :"Easy ground reach",
    description: "Lower seat height @ 780mm for easy and firm ground reach, so you are grounded as ever.",
  },
  {
    title: "Wider Tyres",
    description: "For better safety, no matter the terrain",
  },
  {
    title: "Wider swing arm",
    description: "Increased stability and maneuverability.",
  },
  {
    title: "Pillion Handle",
    description: "Safety and style intact."
  },
  {
    title: "Roto Petal Dual Disc Brakes with ABS",
    description: "First In segment- Dual disc with Single channel ABS – Safety at your finger tips with enhanced braking control in all scenarios.",
  },
  {
    title: "Helmet attention indication",
    description: "Helmet? Check!",
  },
  {
    title: "Side stand indicator with engine cut-off",
    description: "Your safety is never compromised with Raider.",
  },
  {
    title: "Tubeless tyres",
    description: "Keep moving.",
  },
  {
    title: "180 mm Ground Clearance",
    description: "Now terrain will be the last thing on your mind.",
  },
  {
    title: "Engine guard",
    description: "Added protection for chassis and engine.",
  },
];

const engineSpec = [
  { label: "Capacity", value: "124.8 cc" },
  { label: "Type", value: "Air & Oil cooled single cylinder, SI" },
  { label: "Max Power", value: "8.37kW @ 7500 rpm" },
  { label: "Max Torque", value: "11.2Nm @ 6000 rpm 11.75Nm @ 6000 rpm (iGO Assist)" },
  { label: "Bore x Stroke", value: "53.5 x 55.5 mm" },
  { label: "Cooling system", value: "Oil cooled" },
  { label: "Fuel Tank Capacity", value: "12 L" },
  { label: "Engine oil grade", value: "TVS TRU4, 4T oil (10W30)" },
  { label: "Engine oil quantity, ml", value: "1000" },
];

const electricalSpec = [
  { label: "Headlamp", value: "LED" },
  { label: "Tail lamp", value: "LED" },
  { label: "Battery", value: "MF battery, 12V 5 Ah (iGO Assist)" },
];

const dimentionSpec = [
  { label: "Height", value: "1028 mm" },
  { label: "Length", value: "2070 mm" },
  { label: "Width", value: "785 mm" },
  { label: "Wheelbase", value: "1326 mm" },
  { label: "Ground Clearance", value: "180 mm" },
  { label: "Saddle Height", value: "795 mm" },
  { label: "Kerb Weight", value: "Kerb weght - 123 KG (SSE , iGO, Split) 124 KG (Single Seat , Drum )125 KG (TFT DD , SXC DD)" },
  { label: "Fuel Tank Capacity", value: "14 L" },
];

const chassisSpec = [
  { label: "Front Suspension", value: "Telescopic" },
  { label: "Rear Suspension", value: "Monoshock, 5 step adj, Gas charged" },
];

const brakesSpec = [
  { label: "Tyre Size & Type (Front)", value: "90/90-17 Tubeless, 49 P (TFT DD and SXC DD) 80/100- 17 Tubeless , 46 P" },
  { label: "Tyre Size & Type (Rear)", value: "110/80-17 Tubeless ,57 P (TFT DD and SXC DD) 100/90-17 Tubeless, 55P" },
  { label: "Brake Type & Size (Front)", value: "Disc -240 with ABS (TFT DD and SXC DD) Disc -240 (SSE, iGO ,Split Seat and Disc) Drum-130" },
  { label: "Brake Type & Size (Rear)", value: "Disc- 200 (TFT DD and SXC DD) Drum-130 Synchro SBT" },
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
  "/img/PRODUCTS/MC/RAIDER/Gallery/1.webp",
  "/img/PRODUCTS/MC/RAIDER/Gallery/2.webp",
  "/img/PRODUCTS/MC/RAIDER/Gallery/3.webp",
  "/img/PRODUCTS/MC/RAIDER/Gallery/8.webp",
];

const stylingHighlights = [
  "Sharp LED headlamp with DRLs",
  "Twin exhaust outlets",
  "Premium split-seat layout",
  "Lightweight alloy wheels with red accents",
];

const tabItems = ["Styling", "Features", "Specifications"];

export default function ApacheRTXPage() {
  const [activeTab, setActiveTab] = useState("Styling");
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
          <img src="/img/HERO/8.webp" alt="TVS Apache RTX hero" className="h-[calc(100vh-96px)] w-full object-cover" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                TVS Raider
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Raider
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">TVS Raider details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Raider stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/MC/RAIDER/Gallery/1.webp" alt="Styling 1" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RAIDER/Gallery/2.webp" alt="Styling 2" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RAIDER/Gallery/3.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RAIDER/Gallery/8.webp" alt="Styling 4" className="w-full h-56 object-cover rounded-md" />
              </div>

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/MC/RAIDER/Features/1.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/2.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/3.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/4.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/5.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/6.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/7.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/8.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/9.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/10.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/11.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/12.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/13.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/14.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/15.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/16.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/17.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/18.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/19.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/20.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/21.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/22.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/23.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/24.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/25.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/26.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/27.webp",
                      "/img/PRODUCTS/MC/RAIDER/Features/28.webp",
                    ];

                    const imgSrc = images[idx % images.length];
                    const isEven = idx % 2 === 0;

                    return (
                      <div key={feature.title} className="grid gap-6 items-center lg:grid-cols-2">
                        {isEven ? (
                          <>
                            <img src={imgSrc} alt={feature.title} className="w-full h-64 object-cover rounded-md" />
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
                            <img src={imgSrc} alt={feature.title} className="w-full h-64 object-cover rounded-md" />
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Electrical</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {electricalSpec.map((spec) => (
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Chassis and Suspension</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {chassisSpec.map((spec) => (
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">TVS Raider in motion</h2>
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
