"use client";

import Navigation from "../components/Navigation";
import TestRideForm from "../components/TestRideForm";
import Footer from "../components/Footer";
import { useEffect, useMemo, useRef, useState } from "react";

const colorGroups = [
  {
    name: "Drum Alloy",
    options: [
      { name: "IndiBlue Drum", value: "#42376e" },
      { name: "Titanium Grey Drum", value: "#dfdfdf" },
      { name: "White Drum", value: "#fff" },
    ],
  },
  {
    name: "Disc",
    options: [
      { name: "Sparkling Black", value: "#181818" },
      { name: "White", value: "#fff" },
      { name: "Titanium Grey", value: "#7b7c7e" },
      { name: "IndiBlue", value: "#42376e"},
    ],
  },
  {
    name: "DT SXC",
    options: [
      { name: "Ivory Matte Copper Bronze", value: "#714a4e" },
      { name: "Ivory Elite Green", value: "#575f4a" },
      { name: "Ivory Grey", value: "#4d6576" },
      { name: "Ivory Brown", value: "#7b593e"},
    ],
  },
  {
    name: "SmartXonnect",
    options: [
      { name: "Elite Green", value: "#828574" },
      { name: "Matte Copper Bronze", value: "#7e5c5e" },
      { name: "Elegant Red", value: "#973648" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "IndiBlue Drum": "/img/PRODUCTS/SCOOTER/JUPITER125/drum-blue.avif",
    "Titanium Grey Drum": "/img/PRODUCTS/SCOOTER/JUPITER125/drum-grey.avif",
    "White Drum": "/img/PRODUCTS/SCOOTER/JUPITER125/drum-white.avif",
    "Sparkling Black": "/img/PRODUCTS/SCOOTER/JUPITER125/disk-black.avif",
    "White": "/img/PRODUCTS/SCOOTER/JUPITER125/disk-white.avif",
    "Titanium Grey": "/img/PRODUCTS/SCOOTER/JUPITER125/disk-grey.avif",
    "IndiBlue": "/img/PRODUCTS/SCOOTER/JUPITER125/disk-blue.avif",
    "Ivory Matte Copper Bronze": "/img/PRODUCTS/SCOOTER/JUPITER125/dt-copper.avif",
    "Ivory Elite Green": "/img/PRODUCTS/SCOOTER/JUPITER125/dt-green.avif",
    "Ivory Grey": "/img/PRODUCTS/SCOOTER/JUPITER125/dt-grey.avif",
    "Ivory Brown": "/img/PRODUCTS/SCOOTER/JUPITER125/dt-brown.avif",
    "Elite Green": "/img/PRODUCTS/SCOOTER/JUPITER125/sp-green.avif",
    "Matte Copper Bronze": "/img/PRODUCTS/SCOOTER/JUPITER125/sp-copper.avif",
    "Elegant Red": "/img/PRODUCTS/SCOOTER/JUPITER125/sp-red.avif",
};

const features = [
  {
    title: "Navigation with Voice Assist",
    description: "Now never miss a turn!",
  },
  {
    title: "Call & Social Media Alerts",
    description: "Stay connected wherever you go.",
  },
  {
    title: "Distance to Empty",
    description: "Know how far you can go before refuelling.",
  },
  {
    title: "Average Fuel Economy",
    description: "Track your fuel consumption in real-time.",
  },
  {
    title: "Live Sports Updates",
    description: "Game on, even on the go.",
  },
  {
    title: "News Updates",
    description: "Live news updates at your fingertips.",
  },
  {
    title: "Weather Updates",
    description: "Prepare for whatever the weather has in store for you.",
  },
  {
    title: "Longest Seat",
    description: "With segment longest seat of 790mm, get more space for more adventures.",
  },
  {
    title: "Cushioned Pillion Backrest",
    description: "Share the ride and the comfort.",
  },
  {
    title: "Body Balance Technology",
    description: "Better balance and stability in all riding conditions.",
  },
  {
    title: "Front Telescopic Suspension",
    description: "Enjoy smooth rides even on bumpy roads.",
  },
  {
    title : "Adjustable Rear Shocks",
    description: "3-step adjustable shockers to conquer all road conditions.",
  },
  {
    title : "Best in Class Ergonomics",
    description: "The perfect riding angle for relaxed rides.",
  },
  {
    title : "Easy Ground Reach",
    description: "Comfort for all, big or small.",
  },
  {
    title : "Best in Class Under seat storage",
    description: "Room for two, and everything else too.",
  },
  {
    title : "Large Front Leg space",
    description: "Extra space for your legs & more.",
  },
  {
    title : "Front 2L Glove Box",
    description: "Keep all your essentials within reach.",
  },
  {
    title : "Seat base with cushioning",
    description: "Storage that adjusts to your needs.",
  },
  {
    title :"Diamond Cut Alloy Wheels",
    description: "Turn heads with every turn.",
  },
  {
    title: "Progressive Neo Masculine Styling",
    description: "Bold by design.",
  },
  {
    title: "Signature Front Light Guides",
    description: "Making a striking entrance with the signature LED lights.",
  },
  {
    title: "Premium 3D Emblem",
    description: "A standout emblem for a standout scooter."
  },
  {
    title: "Premium dual coloured inner panels",
    description: "Two-toned panels for a touch of personality.",
  },
  {
    title: "Chrome Highlights",
    description: "Make a statement with chrome accents.",  
  },
  {
    title: "Elegant tail lamp with grabrail reflector",
    description: "Draw attention, day or night!",
  },
  {
    title: "Body color grab rails",
    description: "Add a touch of class to your everyday commute.",
  },
  {
    title: "Stylish Headlamp with Visor",
    description: "Cutting-edge design, from head(light) to tail(light).",
  },
  {
    title: "Follow Me Headlamp",
    description: "Lights up your way as you walk away.",
  },
  {
    title: "Hazard Lamps",
    description: "With car-like safety, enhance your visibility in foggy & rainy conditions.",
  },
  {
    title: "Disc Brake with SBT",
    description: "Sync Braking Technology for superior braking power",
  },
  {
    title: "Side Stand Indicator & Engine Inhibitor",
    description: "Every ride starts with safety.",
  },
  {
    title: "MetalMAXX",
    description: "Durable body that’s tough enough for anything",
  },
  {
    title: "Pass By Switch",
    description: "For quick and easy signalling.",
  },
  {
    title: "Tail Lamp with Reflector",
    description: "Higher visibility for night-time riding.",
  },
  {
    title: "External Front Fuel Fill",
    description: "Convenient front fuelling for shorter stops.",
  },
  {
    title: "Patented E-Z Center Stand",
    description: "Parking your scooter is now E-Z breezy.",
  },
  {
    title: "Mobile Charger in Front",
    description: "Charge your phone while you charge ahead.",
  },
  {
    title: "One touch collapsible bag hook",
    description: "Hook to keep your belongings hooked safely.",
  },
  {
    title: "All in One Lock",
    description: "Unlock your seat, handle and fuel tank with a single lock.",
  },
  {
    title: "New Powerful 125 cc Engine",
    description: "Elevated rides with powerful performance",
  },
  {
    title: "TVS iGO Assist",
    description: "Get more pickup and mileage with TVS iGO Assist Technology.",
  },
  {
    title: "Silent & reliable start",
    description: "Instant ignition without the noise.",
  },
  {
    title: "Auto Start Stop",
    description: "Intelligent automatic start-stop technology that helps you get more mileage",
  },
  {
    title: "Best in Class Mileage",
    description: "Get more mileage with TVS iGO Assist, perfect blend of performance and fuel efficiency",
  },
];

const engineSpec = [
  { label: "Displacement", value: "124.8 cc" },
  { label: "Engine Type", value: "Single cylinder, 4 stroke, Air cooled" },
  { label: "Bore x Stroke", value: "53.5 x 55.5 mm" },
  { label: "Max Power", value: "6.0 kW @ 6500 rpm (without Assist), 6.3 kW @ 6500 rpm (with Assist)" },
  { label: "Max Torque", value: "10.5 Nm @ 4500 rpm (without Assist), 11.1 Nm @ 4500 rpm (with Assist)" },
  { label: "No. of Valves", value: "2" },
  { label: "Air Filter Type", value: "Paper Filter" },
  { label: "Transmission Type", value: "CVT Automatic" },
];

const electricalSpec = [
  { label: "Battery", value: "MF 12 V, 4 AH" },
  { label: "Headlamp", value: "LED - Clear lens with MFR" },
  { label: "Taillamp", value: "Bulb with LED light guide" },
  { label: "Starting System", value: "Electric Silent Start" },
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
  { label: "Suspension Front", value: "Telescopic Hydraulic" },
  { label: "Suspension Rear", value: "Twin tube emulsion type shock absorber with 3 step adjustment" },
  { label: "Under Seat Storage", value: "33 Ltrs" },
  { label: "Glove Box in Front (open type)", value: "2 Ltrs" },
  { label: "Fuel Tank Capacity", value: "5.1 Ltrs" },
];

const brakesSpec = [
  { label: "Front Braking", value: "220 mm disc" },
  { label: "Rear Braking", value: "130 mm drum" },
  { label: "Tyre Size (Tubeless tyres)", value: "90/90 -12 - 54 J (Front & Rear)" },
];

const galleryImages = [
  "/img/PRODUCTS/SCOOTER/JUPITER125/Styling/1.webp",
  "/img/PRODUCTS/SCOOTER/JUPITER125/Styling/2.avif",
  "/img/PRODUCTS/SCOOTER/JUPITER125/Styling/3.webp",
  "/img/PRODUCTS/SCOOTER/JUPITER125/Styling/4.avif",
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
          <img src="/img/HERO/11.webp" alt="TVS Apache RTX hero" className="h-[calc(100vh-96px)] w-full object-cover" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                TVS Jupiter 125
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Jupiter 125
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">TVS Jupiter 125 details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Jupiter 125 stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/SCOOTER/JUPITER125/Styling/1.webp" alt="Styling 1" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/JUPITER125/Styling/2.avif" alt="Styling 2" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/JUPITER125/Styling/3.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/JUPITER125/Styling/4.avif" alt="Styling 4" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
              </div>

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/1.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/2.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/3.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/4.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/5.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/6.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/7.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/8.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/9.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/10.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/11.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/12.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/14.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/15.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/16.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/17.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/18.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/19.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/20.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/21.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/22.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/23.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/24.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/25.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/26.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/27.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/28.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/29.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/30.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/31.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/32.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/33.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/34.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/35.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/36.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/37.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/38.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/39.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/40.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/41.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/42.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/43.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER125/Features/44.mp4",
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">TVS Jupiter 125 in motion</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                  <img src={src} alt={`TVS Jupiter gallery ${index + 1}`} className="h-56 w-full object-cover" />
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
