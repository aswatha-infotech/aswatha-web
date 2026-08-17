"use client";

import Navigation from "../components/Navigation";
import TestRideForm from "../components/TestRideForm";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";

const colorGroups = [
  {
    name: "Base",
    options: [
      { name: "Lightning Black", value: "#534c53" },
      { name: "Magma Red", value: "#d12430" },
      { name: "Agonda", value: "#eeece1" },
    ],
  },
  {
    name: "Mid",
    options: [
      { name: "Glacier Silver", value: "#d4d3d3" },
      { name: "Charcoal Ember", value: "#eb791b" },
    ],
  },
  {
    name: "Top",
    options: [
      { name: "Midnight Blue", value: "#98b538" },
      { name: "Nimbus Grey", value: "#636365" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Lightning Black": "/img/PRODUCTS/MC/RONIN/black.avif",
    "Magma Red": "/img/PRODUCTS/MC/RONIN/red.avif",
    "Agonda": "/img/PRODUCTS/MC/RONIN/white.avif",
    "Glacier Silver": "/img/PRODUCTS/MC/RONIN/silver.avif",
    "Charcoal Ember": "/img/PRODUCTS/MC/RONIN/ember.avif",
    "Midnight Blue": "/img/PRODUCTS/MC/RONIN/blue.avif",
    "Nimbus Grey": "/img/PRODUCTS/MC/RONIN/nimbus.avif",
};

const features = [
  {
    title: "LIGHTS",
    description: "Announce your arrival with the unique T-Face pilot lamp. Or light up any adventure using the powerful all-LED headlamp And let those LED turn signal lamps keep you safer than ever, but with style!",
  },
  {
    title: "ALL-LED TAIL LAMP",
    description: "With its sleek design and all-LED tail lamp, the TVS RONIN brings together safety and style every time you ride",
  },
  {
    title: "CUSTOM EXHAUST",
    description: "Designed to stun, the TVS Ronin’s custom black exhaust enhances your journey, adding a bold touch as you ride through your own story",
  },
  {
    title: "WHEELS AND TYRES",
    description: "Wrapped in specially commissioned wide-block tread tyres, the first-in-segment machined 9-spoke alloy wheels make a stunning first impression",
  },
  {
    title: "ASYMMETRIC SPEEDOMETER",
    description: "Off-centre so you can ride off-script, the speedometer comes with a unique placement and displays regular updates during every ride",
  },
  {
    title: "RAIN & URBAN ABS MODES",
    description: "Whether it's the rain you're battling or the tricky tarmac, the TVS RONIN's dual-channel ABS ensures superior safety while braking",
  },
  {
    title: "GLIDE THROUGH TECHNOLOGY (GTT)",
    description: "Enjoy effortless low-speed riding in traffic. Simply engage GTT by releasing the clutch in the 1st, 2nd or 3rd gear and glide through without accelerating",
  },
  {
    title: "FEATHER TOUCH ISG",
    description: "Start the engine with a light touch and minimal noise using the electric feature-touch ISG feature",
  },
  {
    title: "ENHANCED STABILITY",
    description: "The TVS RONIN's upside-down front suspension allows better control and stability while riding at various speeds",
  },
  {
    title: "SLIPPER CLUTCH",
    description: "Experience fewer jerks and less clutch use with the slipper clutch that helps in smoother transitions between gear shifts",
  },
  {
    title: "ADJUSTABLE LEVERS",
    description: "Get better handle grip, on or off the road with 3-step adjustable levers that come with custom adjustments for the clutch and front brake",
  },
  {
    title : "BLUETOOTH CONNECTIVITY",
    description: "With Bluetooth Connectivity you can stay connected to your bike through your phone. Get navigation updates and view a complete ride analysis, after each ride",
  },
  {
    title : "INSTANT CALL/SMS ALERTS",
    description: "Stay connected with alerts (via Bluetooth) every time you receive a call or text",
  },
  {
    title : "DTE - DISTANCE TO EMPTY",
    description: "It's always the right time to set out. Especially when your TVS RONIN's smart digital display reminds you when to stop, refuel, and hit the road again",
  },
  {
    title : "GEAR SHIFT INDICATOR",
    description: "With the TVS RONIN's gear shift indicator, ride better with real-time suggestions on gearing up or down at different speeds",
  },
  {
    title : "SIDE STAND ENGINE INHIBITOR",
    description: "If the side stand is down the bike won’t start and an indication will show up on the off-centre display. That’s how your TVS RONIN keeps you safe, always!",
  },
  {
    title : "AUXILIARY DASHBOARD",
    description: "With quick and easy access to the best features through a single screen, you can add/manage widgets for ease of use",
  },
  {
    title : "VOICE ASSIST",
    description: "Control your ride through Voice Assist and get real-time updates on navigation, call or SMS alerts, bike health and much more. So, talk to your bike and it’ll talk back!",
  },
  {
    title :"RIDE PLANNING TOURS",
    description: "Whether it's for five days or fifteen, now you can access or manage day-wise vehicle stats and navigate like a pro",
  },
  {
    title: "LAST PARKED LOCATION",
    description: "A feature that navigates you to your TVS RONIN's last parked location",
  },
  {
    title: "RIDE SHARE",
    description: "Post your #Unscripted ride to social media platforms directly from the app. Don't forget to add some stunning pictures!",
  },
  {
    title: "RIDE ANALYSIS",
    description: "Ride better with real-time analysis of gear usage, RPM, speed and altitude"
  },
];

const engineSpec = [
  { label: "Capacity", value: "225.9 cc" },
  { label: "Type", value: "Single Cylinder, 4 Stroke, 4 Valve, SOHC" },
  { label: "Max Power", value: "15.01 kW (20.4 PS) @ 7750 rpm" },
  { label: "Max Torque", value: "19.93 Nm @ 3750 rpm" },
  { label: "Bore x Stroke", value: "66 mm x 66 mm" },
  { label: "Cooling system", value: "Oil cooled" },
];

const electricalSpec = [
  { label: "Headlamp", value: "AHO, LED with “T” Shaped Signature Position Lamp" },
  { label: "Brake / Tail Light", value: "LED" },
  { label: "Turn Signal Lamp", value: "LED" },
  { label: "Fuel Gauge", value: "Digital" },
  { label: "Speedometer", value: "Fully Digital - Connected" },
];

const dimentionSpec = [
  { label: "Height", value: "1170 mm" },
  { label: "Length", value: "2040 mm" },
  { label: "Width", value: "805 mm" },
  { label: "Wheelbase", value: "1357 mm" },
  { label: "Ground Clearance", value: "181 mm" },
  { label: "Saddle Height", value: "795 mm" },
  { label: "Kerb Weight", value: "160 kg" },
  { label: "Fuel Tank Capacity", value: "14 L" },
];

const chassisSpec = [
  { label: "Frame", value: "Double Cradle Split Synchro Stiff Frame" },
  { label: "Front Suspension", value: "41 mm USD" },
  { label: "Rear Suspension", value: "Mono shock with 7 step adjustable preload" },
];

const brakesSpec = [
  { label: "Tyre Size & Type (Front)", value: "110/70 - 17 Tubeless" },
  { label: "Tyre Size & Type (Rear)", value: "130/70 - 17 Tubeless" },
  { label: "Wheel Type", value: "9 Spoke Alloy Wheels" },
  { label: "Brake Type & Size (Front)", value: "300mm Disc" },
  { label: "Brake Type & Size (Rear)", value: "240mm Disc" },
  { label: "Braking System", value: "Dual Channel ABS" },
  { label: "ABS Modes", value: "Rain & Urban mode" },
  { label: "Lever Type", value: "Adjustable Levers" },
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
  "/img/PRODUCTS/MC/RONIN/Styling/1.webp",
  "/img/PRODUCTS/MC/RONIN/Styling/2.webp",
  "/img/PRODUCTS/MC/RONIN/Styling/3.webp",
  "/img/PRODUCTS/MC/RONIN/Styling/4.webp",
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
          <img src="/img/HERO/14.webp" alt="TVS Apache RTX hero" className="h-[calc(100vh-96px)] w-full object-cover" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                TVS Ronin
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Ronin
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">TVS RONIN details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Ronin stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/MC/RONIN/Styling/1.webp" alt="Styling 1" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RONIN/Styling/2.webp" alt="Styling 2" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RONIN/Styling/3.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RONIN/Styling/4.webp" alt="Styling 4" className="w-full h-56 object-cover rounded-md" />
              </div>

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/MC/RONIN/Features/1.webp",
                      "/img/PRODUCTS/MC/RONIN/Features/2.webp",
                      "/img/PRODUCTS/MC/RONIN/Features/3.webp",
                      "/img/PRODUCTS/MC/RONIN/Features/4.webp",
                      "/img/PRODUCTS/MC/RONIN/Features/5.webp",
                      "/img/PRODUCTS/MC/RONIN/Features/6.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/7.webp",
                      "/img/PRODUCTS/MC/RONIN/Features/8.webp",
                      "/img/PRODUCTS/MC/RONIN/Features/9.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/10.webp",
                      "/img/PRODUCTS/MC/RONIN/Features/11.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/12.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/14.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/15.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/16.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/17.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/18.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/19.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/20.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/21.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/22.jpg",
                      "/img/PRODUCTS/MC/RONIN/Features/23.jpg",
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Transmission</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {transSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Aesthetics</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {asSpec.map((spec) => (
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">TVS Ronin in motion</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                  <img src={src} alt={`Apache RTX gallery ${index + 1}`} className="h-56 w-full object-cover" />
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
