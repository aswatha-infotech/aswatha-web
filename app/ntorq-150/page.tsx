"use client";

import Navigation from "../components/Navigation";
import TestRideForm from "../components/TestRideForm";
import Footer from "../components/Footer";
import { useEffect, useMemo, useRef, useState } from "react";

const colorGroups = [
  {
    name: "Ntorq 150",
    options: [
      { name: "Stealth Silver", value: "#c0c4c7" },
      { name: "Racing Red", value: "#df2326" },
      { name: "Turbo Blue", value: "#319d9c" },
    ],
  },
  {
    name: "Ntorq 150 TFT",
    options: [
      { name: "Nitro Green TFT", value: "#ede92d" },
      { name: "Racing Red TFT", value: "#df2326" },
      { name: "Turbo Blue TFT", value: "#319d9c" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Stealth Silver": "/img/PRODUCTS/SCOOTER/NTORQ150/silver.avif",
    "Racing Red": "/img/PRODUCTS/SCOOTER/NTORQ150/red.avif",
    "Turbo Blue": "/img/PRODUCTS/SCOOTER/NTORQ150/blue.avif",
    "Nitro Green TFT": "/img/PRODUCTS/SCOOTER/NTORQ150/green.avif",
    "Racing Red TFT": "/img/PRODUCTS/SCOOTER/NTORQ150/redtft.avif",
    "Turbo Blue TFT": "/img/PRODUCTS/SCOOTER/NTORQ150/bluetft.avif",
};

const features = [
  {
    title: "Multipoint Projector headlamps",
    description: "Bold looks, fierce stance, and lights that rule the night",
  },
  {
    title: "Stealth Aircraft Inspired Design",
    description: "Turn heads with design that looks fast even when parked",
  },
  {
    title: "Sporty Tail Lamps",
    description: "Make a statement with T-shaped rear lamps",
  },
  {
    title: "Naked Handle Bar",
    description: "Command with better control, quicker moves, bold stance",
  },
  {
    title: "Stylish Front Combination Lamp",
    description: "Own the road with a bold new look",
  },
  {
    title: "Aerodynamic Winglets",
    description: "Aircraft-inspired winglets designed for high-speed stability",
  },
  {
    title: "Sporty Muffler",
    description: "Roars before you arrive, Echoes after you're gone",
  },
  {
    title: "Sporty Coloured Alloy Wheels",
    description: "Turn heads with sporty alloy wheels in 4 colors",
  },
  {
    title: "Powerful 3V 150cc Engine",
    description: "Packs a powerful 150cc, 3-valve Engine with unique O3C tech",
  },
  {
    title: "Quickest Acceleration",
    description: "Segment-best 0-60 km/h sprint in 6.3 seconds",
  },
  {
    title: "Top Speed 104 km/h",
    description: "Break all limits with segment best 104 km/h",
  },
  {
    title : "iGO Assist - Boost Mode",
    description: "On demand power just when you need it",
  },
  {
    title : "Integrated Start Stop",
    description: "ISG ensures quiet starts and ISS enables smooth smart stops",
  },
  {
    title : "Dual Ride Modes Race & Street",
    description: "Glides through traffic, flies on open roads",
  },
  {
    title : "Fully Digital TFT Cluster",
    description: "Stay connected with 50+ features on an easy-to-read cluster",
  },
  {
    title : "Navigation Assist",
    description: "Ride past the traffic with ease and confidence",
  },
  {
    title : "Alexa Integration",
    description: "Hook your ride into your smart home setup",
  },
  {
    title : "Smart Watch Integration",
    description: "Track, control, and get alerts",
  },
  {
    title :"Music Control",
    description: "Ride to your rhythm with music control right from dash",
  },
  {
    title: "Last Parked Location",
    description: "Find your ride instantly no matter where you left it last",
  },
  {
    title: "Accept/Reject Call",
    description: "Control calls on the dash with a Premium 4 Way Navigation Switches",
  },
  {
    title: "Vehicle Live Tracking",
    description: "Live tracking keeps your scooter safe and ahead of trouble"
  },
  {
    title: "Over The Air - Service Updates",
    description: "Every update makes your ride smarter, sharper, and smoother",
  },
  {
    title: "ABS",
    description: "Enhanced safety during sudden braking and better control",  
  },
  {
    title: "Traction Control System",
    description: "Handles rain, wet areas with confidence and control",
  },
  {
    title: "Hazard Lamps",
    description: "Enhanced safety steps up in rain, fog, and emergencies",
  },
  {
    title: "Follow Me Headlamps",
    description: "Lights guide you safely out of dark parking areas",
  },
  {
    title: "Crash Alert",
    description: "Built-in backup when things go south",
  },
  {
    title: "High Speed Alert",
    description: "Built to keep you safe on every ride",
  },
  {
    title: "Emergency Brake Warning",
    description: "Signal the streets when you stop",
  },
  {
    title: "220mm Disc Brakes",
    description: "Precision braking at your command",
  },
  {
    title: "Premium 4 Way Navigation Switches",
    description: "Your command hub for every twist, turn, and ride.",
  },
  {
    title: "Brake Lever Adjuster",
    description: "Ride easy with adjustable brakes that match your grip.",
  },
  {
    title: "Underseat USB Charging Port",
    description: "Keeps your devices charged while you rule the streets.",
  },
  {
    title: "All in One Lock",
    description: "One twist locks ignition, fuel, handle, and storage.",
  },
  {
    title: "Integrated Engine Kill Switch",
    description: "Instantly stops scooter without affecting the engine.",
  },
  {
    title: "Front Telescopic Suspension",
    description: "Tame every terrain without breaking a sweat",
  },
  {
    title: "Rear Suspension with Hydraulic Dampers",
    description: "Rear shocks tuned to keep your co-pilot's flight smooth",
  },
  {
    title: "Race Tuned Seat",
    description: "Long rides with zero strain, just smooth sailing",
  },
  {
    title: "Front 2L Glove Box",
    description: "Your go-to storage for all things essential to your hustle",
  },
];

const engineSpec = [
  { label: "Engine Type", value: "3V, Single Cylinder, O3C Tech" },
  { label: "Displacement", value: "149.7 cc" },
  { label: "Max Power", value: "9.7 kW (13.2 PS) @ 7000 rpm" },
  { label: "Max Torque", value: "14.2 Nm @ 5500 rpm" },
  { label: "Fuel System", value: "Fuel Injection" },
  { label: "Starting Method", value: "Self - ISG" },
  { label: "Acceleration (0-60 Km/h)", value: "6.3 sec" },
  { label: "Top Speed", value: "104 km/h" },
];

const electricalSpec = [
  { label: "Battery Capacity", value: "12V - 5Ah MF" },
  { label: "Headlamp", value: "Projector LED" },
  { label: "Tail Lamp", value: "LED" },
  { label: "Turn Signal Lamp", value: "LED" },
  { label: "Bluetooth Connectivity", value: "Yes" },
];

const dimentionSpec = [
  { label: "Vehicle Size", value: "1852 x 691 x 1168 mm" },
  { label: "Wheel Base", value: "1275 mm" },
  { label: "Ground Clearance", value: "163 mm" },
  { label: "Ground Reach", value: "765 mm" },
  { label: "Seat Length", value: "790 mm" },
  { label: "Front Leg Space", value: "380 mm" },
  { label: "Kerb Weight", value: "108 kgs" },
];

const chassisSpec = [
  { label: "Dimensions: LxBxH", value: "1861 x 740 x 1120 mm" },
  { label: "Wheelbase", value: "1285 mm" },
  { label: "Ground Clearance", value: "155 mm" },
  { label: "Seat Length", value: "765 mm" },
  { label: "Seat Height", value: "770 mm" },
  { label: "Kerb Weight", value: "115 kg" },
  { label: "Fuel Tank Capacity", value: "5.8 L" },
];

const brakesSpec = [
  { label: "Front Suspension", value: "Telescopic Suspension with Hydraulic Dampers" },
  { label: "Rear Suspension", value: "Coil spring with Hydraulic Dampers" },
  { label: "Front Brake Type", value: "220 mm Disc" },
  { label: "Rear Brake Type", value: "130 mm Drum" },
  { label: "Front Tyre", value: "Tubeless 100 / 80-12" },
  { label: "Rear Tyre", value: "Tubeless 110 / 80-12" },
];

const galleryImages = [
  "/img/PRODUCTS/SCOOTER/NTORQ150/Styling/1.webp",
  "/img/PRODUCTS/SCOOTER/NTORQ150/Styling/2.webp",
  "/img/PRODUCTS/SCOOTER/NTORQ150/Styling/3.webp",
  "/img/PRODUCTS/SCOOTER/NTORQ150/Styling/4.webp",
];

const stylingHighlights = [
  "Sharp LED headlamp with DRLs",
  "Twin exhaust outlets",
  "Premium split-seat layout",
  "Lightweight alloy wheels with red accents",
];

const tabItems = ["Styling", "Features", "Specifications"];

type FeatureMediaProps = {
  src: string;
  alt: string;
};

function FeatureMedia({ src, alt }: FeatureMediaProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = mediaRef.current;
    if (!node || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const isVideo = /\.(mp4|webm)$/i.test(src);

  if (!isVideo) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-64 w-full rounded-md object-cover bg-slate-100"
      />
    );
  }

  return (
    <div ref={mediaRef} className="relative h-64 w-full overflow-hidden rounded-md bg-slate-100">
      {!shouldLoad ? (
        <div className="flex h-full items-center justify-center text-sm text-slate-400">
          Loading video…
        </div>
      ) : (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

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
          <img src="/img/HERO/18.webp" alt="TVS Apache RTX hero" className="h-auto w-full object-contain" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                TVS Ntorq 150
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Ntorq 150
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

              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
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

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
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
                        <img src={selectedColorImage} alt={`Apache RTX ${selectedColor.name}`} className="h-64 w-full object-contain sm:h-80 lg:h-100" />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">TVS Ntorq 150 details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Ntorq 150 stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/SCOOTER/NTORQ150/Styling/1.avif" alt="Styling 1" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/NTORQ150/Styling/2.avif" alt="Styling 2" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/NTORQ150/Styling/3.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/NTORQ150/Styling/4.avif" alt="Styling 4" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
              </div>

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/1.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/2.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/3.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/4.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/5.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/6.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/7.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/8.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/9.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/10.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/11.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/12.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/14.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/15.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/16.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/17.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/18.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/19.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/20.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/21.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/22.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/23.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/24.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/25.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/26.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/27.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/28.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/29.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/30.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/31.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/32.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/33.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/34.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/35.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/36.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/37.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/38.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/39.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ150/Features/40.webm",
                    ];

                    const imgSrc = images[idx % images.length];
                    const isEven = idx % 2 === 0;

                    return (
                      <div key={feature.title} className="grid gap-6 items-center lg:grid-cols-2">
                        {isEven ? (
                          <>
                            <FeatureMedia src={imgSrc} alt={feature.title} />
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
                            <FeatureMedia src={imgSrc} alt={feature.title} />
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
                    <div key={`${spec.label}-${spec.value}`} className="rounded-[20px] border border-slate-200 bg-white p-4">
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">TVS Ntorq 150 in motion</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                  <img src={src} alt={`TVS Ntorq 150 gallery ${index + 1}`} className="h-56 w-full object-cover" />
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
