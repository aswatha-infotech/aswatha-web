"use client";

import Navigation from "../components/Navigation";
import TestRideForm from "../components/TestRideForm";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";

const colorGroups = [
  {
    name: "Drum",
    options: [
      { name: "Black Green", value: "#008000" },
      { name: "Black Red", value: "#bb2f44" },
      { name: "Grey Black", value: "#706f71" },
      { name: "Black Blue", value: "#0066ba" },
    ],
  },
  {
    name: "Disk",
    options: [
      { name: "Black Green Disk", value: "#008000" },
      { name: "Black Red Disk", value: "#bb2f44" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Black Green": "/img/PRODUCTS/MC/STAR/drum-green.avif",
    "Black Red": "/img/PRODUCTS/MC/STAR/drum-red.avif",
    "Grey Black": "/img/PRODUCTS/MC/STAR/drum-grey.avif",
    "Black Blue": "/img/PRODUCTS/MC/STAR/drum-blue.avif",
    "Black Green Disk": "/img/PRODUCTS/MC/STAR/disk-green.avif",
    "Black Red Disk": "/img/PRODUCTS/MC/STAR/disk-red.avif",
};

const features = [
  {
    title: "ETFi Technology",
    description: "TVS Star City Plus BS6 comes equipped with ETFi technology which delivers enhanced overall performance across startability, rideability, power & mileage",
  },
  {
    title: "Eco Thrust Engine",
    description: "Time tested 110 cc 'Eco thrust' engine makes TVS Star City Plus one of the best mileage bikes in the segment while delivering a powerful performance",
  },
  {
    title: "15% Higher Mileage",
    description: "ETFi technology in TVS Star City Plus delivers 15% more mileage making it one of the Best mileage bikes in the 110 cc segment",
  },
  {
    title: "LED Headlamp",
    description: "TVS Star City Plus is the only bike in the 110cc segment to have LED Tech Headlamp. It comes with a metallic bezel which enhances your style quotient and is energy efficient (3x more brightness with 67% less power consumption)",
  },
  {
    title: "Sporty Dual Tone Muffler",
    description: "Dual Tone Muffler guard with Eco Thrust logo adds to the premium looks of Star City Plus",
  },
  {
    title: "Dual Tone Mirrors",
    description: "Stylish Dual Tone Mirrors compliment the dual tone colour theme on the TVS Star City Plus which makes it one of the most stylish motorcycle in the segment",
  },
  {
    title: "3D Premium Logo",
    description: "Premium 3D Logo on the tank and on the side panels enhances the style of the TVS Star City Plus",
  },
  {
    title: "Human Centric Design",
    description: "Closer handle bars, sculpted fuel tank and an optimized seat profile ensures a comfortable seating posture in the city rides and also on long highway rides",
  },
  {
    title: "Premium Dual Tone Seat",
    description: "The ‘Dual tone’ seat with premium rexin in TVS Star City Plus enhances the style & comfort quotient",
  },
  {
    title: "5 Step Adjustable Shock Absorber",
    description: "TVS Star City Plus ensures a comfortable ride in all road conditions with its 5 Step Adjustable hydraulic rear shock absorbers",
  },
  {
    title: "Multi Function Console (With Econometer & Service Reminder)",
    description: "Multi – Function Speedometer console with Econometer, Service Reminder & Malfunction Indicator",
  },
  {
    title : "USB Mobile Charger",
    description: "Now, charge your phone while on the move!",
  },
  {
    title : "MF Battery",
    description: "Hassle free Maintenance with MF Battery",
  },
  {
    title : "Roto Petal Disc Brake",
    description: "The 240 mm front disc brake with its unique roto petal design offers supreme braking control",
  },
  {
    title : "Dura Grip Tires",
    description: "High performance dura grip tyres provides superior road grip and longer life",
  },
  {
    title: "SBT",
    description: "Both brakes are applied simultaneously, leading to safe & effective braking (Shorter braking distance)",
  },
];

const engineSpec = [
  { label: "Capacity", value: "109.7 CC" },
  { label: "Type", value: "4 Stroke Duralife Engine" },
  { label: "Max Power", value: "6.03 kW (8.08 bhp) @7350 rpm" },
  { label: "Max Torque", value: "8.7 Nm @ 4500 rpm" },
  { label: "Bore x Stroke", value: "53.5 mm x 48.8 mm" },
  { label: "Compression Ratio", value: "10.0 : 1" },
  { label: "EFI system", value: "ET - FI Eco Thrust Fuel Injection Technology"},
  { label: "Emission compliance", value: "BS VI" },
  { label: "Air Filter", value: "Paper Filter Element" },
  { label: "Starting", value: "Self start & Kick start" },
  { label: "Transmission", value: "4 speed constant mesh" },
  { label: "Clutch", value: "Wet multi-plate" },
  { label: "Fuel Tank (Litres)", value: "10" },
  { label: "Engine oil (litres)", value: "1" },
];

const electricalSpec = [
  { label: "Headlamp", value: "LED, 11W" },
  { label: "Tail Lamp / Stop Lamp (W)", value: "5 / 10" },
  { label: "Battery", value: "12V 4Ah MF" },
  { label: "Horn Type / No", value: "12V DC / 1" },
  { label: "Ignition Type", value: "ECU" },
];

const dimentionSpec = [
  { label: "Height", value: "1080 mm" },
  { label: "Length", value: "1984 mm" },
  { label: "Width", value: "750 mm" },
  { label: "Wheelbase", value: "1260 mm" },
  { label: "Ground Clearance", value: "172 mm" },
  { label: "Kerb Weight", value: "115 (Drum), 116 (Disc)" },
];

const chassisSpec = [
  { label: "Front Suspension", value: "Telescopic (Oil damped)" },
  { label: "Rear Suspension", value: "5 step adjustable Hydraulic Shock Absorber" },
];

const brakesSpec = [
  { label: "Front Tyre", value: "Drum: 130 | Disc: 240" },
  { label: "Rear Tyre", value: "Drum: 110 (Synchro)" },
  { label: "Front", value: "2.75 X 17 41P 4PR, Tubeless"},
  { label: "Rear", value: "3.0 X 17 50P 6PR, Tubeless" },
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
  "/img/PRODUCTS/MC/STAR/Gallery/1.webp",
  "/img/PRODUCTS/MC/STAR/Gallery/2.webp",
  "/img/PRODUCTS/MC/STAR/Gallery/1.webp",
  "/img/PRODUCTS/MC/STAR/Gallery/2.webp",
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
          <img src="/img/HERO/19.webp" alt="TVS Apache RTX hero" className="h-[calc(100vh-96px)] w-full object-cover" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                TVS Star City+
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Star City+
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">TVS Star City Plus details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Star City Plus stand apart?</h2>
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
                      "/img/PRODUCTS/MC/STAR/Features/1.jpg",
                      "/img/PRODUCTS/MC/STAR/Features/2.jpg",
                      "/img/PRODUCTS/MC/STAR/Features/3.jpg",
                      "/img/PRODUCTS/MC/STAR/Features/4.webp",
                      "/img/PRODUCTS/MC/STAR/Features/5.webp",
                      "/img/PRODUCTS/MC/STAR/Features/6.webp",
                      "/img/PRODUCTS/MC/STAR/Features/7.webp",
                      "/img/PRODUCTS/MC/STAR/Features/8.webp",
                      "/img/PRODUCTS/MC/STAR/Features/9.webp",
                      "/img/PRODUCTS/MC/STAR/Features/10.webp",
                      "/img/PRODUCTS/MC/STAR/Features/11.jpg",
                      "/img/PRODUCTS/MC/STAR/Features/12.webp",
                      "/img/PRODUCTS/MC/STAR/Features/13.webp",
                      "/img/PRODUCTS/MC/STAR/Features/14.webp",
                      "/img/PRODUCTS/MC/STAR/Features/15.webp",
                      "/img/PRODUCTS/MC/STAR/Features/16.webp",
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#DC4226]">Gallery</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-1000 sm:text-4xl">TVS Star City Plus in motion</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                  <img src={src} alt={`TVS Star City Plus gallery ${index + 1}`} className="h-56 w-full object-cover" />
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
