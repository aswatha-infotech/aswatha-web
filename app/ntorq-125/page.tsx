"use client";

import Navigation from "../components/Navigation";
import TestRideForm from "../components/TestRideForm";
import Footer from "../components/Footer";
import { useEffect, useMemo, useRef, useState } from "react";

const colorGroups = [
  {
    name: "Disk",
    options: [
      { name: "Nardo Grey", value: "#899faf" },
      { name: "Spiti White", value: "#dadde1" },
      { name: "Midnight Black", value: "#3a3f43" },
    ],
  },
  {
    name: "Race XP",
    options: [
      { name: "Blaze Blue", value: "#4a4457" },
      { name: "Dark Black", value: "#000000" },
      { name: "Race Red Black", value: "#c72025" },
    ],
  },
  {
    name: "Race Edition",
    options: [
      { name: "Rush Green", value: "#d9df60" },
      { name: "Drift Blue", value: "#58568b" },
      { name: "Inferno Red", value: "#ec3744" },
    ],
  },
  {
    name: "Super Squad",
    options: [
      { name: "Super Soldier", value: "#235f32" },
      { name: "Lightning Gray", value: "#bebebe" },
      { name: "Amazing Red", value: "#973648" },
      { name: "Stealth Black", value: "#1a1a1a" },
    ],
  },
  {
    name: "XT",
    options: [
        { name: "Neon", value: "#e9ec74"},
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Nardo Grey": "/img/PRODUCTS/SCOOTER/NTORQ125/disk-grey.avif",
    "Spiti White": "/img/PRODUCTS/SCOOTER/NTORQ125/disk-white.avif",
    "Midnight Black": "/img/PRODUCTS/SCOOTER/NTORQ125/disk-black.avif",
    "Blaze Blue": "/img/PRODUCTS/SCOOTER/NTORQ125/xp-blue.avif",
    "Dark Black": "/img/PRODUCTS/SCOOTER/NTORQ125/xp-black.avif",
    "Race Red Black": "/img/PRODUCTS/SCOOTER/NTORQ125/xp-red.avif",
    "Rush Green": "/img/PRODUCTS/SCOOTER/NTORQ125/race-green.avif",
    "Drift Blue": "/img/PRODUCTS/SCOOTER/NTORQ125/race-blue.avif",
    "Inferno Red": "/img/PRODUCTS/SCOOTER/NTORQ125/race-red.avif",
    "Super Soldier": "/img/PRODUCTS/SCOOTER/NTORQ125/ss-soldier.avif",
    "Lightning Gray": "/img/PRODUCTS/SCOOTER/NTORQ125/ss-grey.avif",
    "Amazing Red": "/img/PRODUCTS/SCOOTER/NTORQ125/ss-red.avif",
    "Stealth Black": "/img/PRODUCTS/SCOOTER/NTORQ125/ss-black.avif",
    "Neon": "/img/PRODUCTS/SCOOTER/NTORQ125/xt.avif",
};

const features = [
  {
    title: "Stealth Aircraft Styling",
    description: "Aerodynamically designed to cruise through traffic",
  },
  {
    title: "Race Inspired Decals",
    description: "For the Racer in you.",
  },
  {
    title: "Sporty Red Alloy Wheels",
    description: "Elevate your style quotient with a touch of red.",
  },
  {
    title: "Signature 'T' Rear Lamp",
    description: "A signature 'T' rear lamp that's a class apart.",
  },
  {
    title: "Sporty Stubby Muffler",
    description: "Signature Muffler Sound for a sporty ride.",
  },
  {
    title: "Sporty Split Grab Rail",
    description: "Stealth aircraft inspired grab rails for a sporty look.",
  },
  {
    title: "Signature LED Headlamp",
    description: "Light up the streets with a bold signature headlamps",
  },
  {
    title: "3 Valve 125cc CVTI - Revv Engine",
    description: "Inspired by 40 years of TVS Racing to outperform the world",
  },
  {
    title: "Dual Riding Modes Street/Race Mode",
    description: "Command your ride with race and street mode",
  },
  {
    title: "Race Inspired Performance",
    description: "Feel the power surge with every twist of the throttle",
  },
  {
    title: "Top Speed",
    description: "Hit high speeds at the twist of your throttle",
  },
  {
    title : "0 to 60 in 7.9 Seconds",
    description: "Leave the world behind at unmatched speeds",
  },
  {
    title : "In-Built Lap Timer",
    description: "Track your best runs and then hit the laps again!",
  },
  {
    title : "iGO Assist",
    description: "On-demand torque with iGO Assist Boost mode",
  },
  {
    title : "Multi Mode Display - Street, Sport & Ride Stats",
    description: "Keep track of your ride with a multi-mode display",
  },
  {
    title : "Ride Stats - Best and Last Lap",
    description: "Flex your best lap and beat it all over again",
  },
  {
    title : "Incoming Call & Text alert",
    description: "Never miss an important call or text while riding",
  },
  {
    title : "Turn by Turn Navigation",
    description: "Navigate with ease",
  },
  {
    title :"Hazard Lamp",
    description: "Send safety signals any situation",
  },
  {
    title: "Parking Brake",
    description: "Grip that keeps you safe when you park and play",
  },
  {
    title: "220 mm Rotopetal Disc",
    description: "Quick response brakes for ultimate control and safety",
  },
  {
    title: "High Speed Alert",
    description: "A gentle reminder when you’re riding a little too fast"
  },
  {
    title: "Front Telescopic Suspension",
    description: "Conquer rough patches with smooth, steady rides",
  },
  {
    title: "Coil Spring Suspension with Hydralic Dampers",
    description: "For a cushioned ride that conquers every road",  
  },
  {
    title: "Race-Tuned Comfortable Seat",
    description: "Ride with the comfort and posture of a pro racer",
  },
  {
    title: "ISS (On / OFF) Switch",
    description: "A tech that auto switches on/off engine and saves fuel",
  },
  {
    title: "Pass by Switch",
    description: "For easy takeovers and signalling.",
  },
  {
    title: "USB Charging Port",
    description: "Power up on the go with a USB charging port.",
  },
  {
    title: "Low Fuel Alert",
    description: "Get a heads-up before your tank runs dry.",
  },
];

const engineSpec = [
  { label: "Engine Type", value: "Single Cylinder, 4 - Stroke, SI, Air Cooled, Fuel Injected" },
  { label: "Displacement", value: "124.8 cc" },
  { label: "No. of Valves", value: "3" },
  { label: "Max Power", value: "7 kW @ 7000 RPM" },
  { label: "Max Torque", value: "10.6 Nm @ 5500 RPM" },
  { label: "Clutch", value: "Automatic Centrifugal Clutch" },
  { label: "Air Filter Type", value: "Dry Paper + Foam Filter" },
  { label: "Acceleration", value: "0 to 60 in 8.9 seconds" },
  { label: "Dual Riding Modes", value: "Street & Sport Mode" },
  { label: "Top Speed", value: "94 km/h" },
];

const electricalSpec = [
  { label: "Battery", value: "12V, 4 Ah MF" },
  { label: "Head Lamp", value: "LED lamp" },
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
  { label: "Frame", value: "High Rigidity Under Bone Tubular Type" },
  { label: "Dimensions", value: "1861 x 710 x 1164 mm" },
  { label: "Wheelbase", value: "1285 mm" },
  { label: "Ground Clearance", value: "155 mm" },
  { label: "Kerb Weight", value: "109 Kg" },
  { label: "Fuel Tank Capacity", value: "5.8 litre" },
];

const brakesSpec = [
  { label: "Front Suspension", value: "Telescopic Suspension with Hydraulic Dampers" },
  { label: "Rear Suspension", value: "Coil spring with Hydraulic Dampers" },
  { label: "Front Tyre", value: "Tubeless 100/80-12" },
  { label: "Rear Tyre", value: "Tubeless 110/80-12" },
  { label: "Front Brake", value: "220 mm Disc" },
  { label: "Rear Brake", value: "130 mm Drum" },
];

const galleryImages = [
  "/img/PRODUCTS/SCOOTER/NTORQ125/Styling/1.webp",
  "/img/PRODUCTS/SCOOTER/NTORQ125/Styling/2.webp",
  "/img/PRODUCTS/SCOOTER/NTORQ125/Styling/3.webp",
  "/img/PRODUCTS/SCOOTER/NTORQ125/Styling/4.webp",
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
          <img src="/img/HERO/21.webp" alt="TVS Apache RTX hero" className="h-auto w-full object-contain" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                TVS Ntorq 125
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Ntorq 125
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">TVS Ntorq 125 details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Ntorq 125 stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/SCOOTER/NTORQ125/Styling/1.webp" alt="Styling 1" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/NTORQ125/Styling/2.webp" alt="Styling 2" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/NTORQ125/Styling/3.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/NTORQ125/Styling/4.webp" alt="Styling 4" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
              </div>

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/1.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/2.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/3.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/4.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/5.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/6.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/7.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/8.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/9.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/10.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/11.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/12.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/14.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/15.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/16.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/17.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/18.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/19.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/20.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/21.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/22.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/23.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/24.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/25.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/26.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/27.webp",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/28.webm",
                      "/img/PRODUCTS/SCOOTER/NTORQ125/Features/29.webm",
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">TVS Ntorq 125 in motion</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                  <img src={src} alt={`TVS Ntorq 125 gallery ${index + 1}`} className="h-56 w-full object-cover" />
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
