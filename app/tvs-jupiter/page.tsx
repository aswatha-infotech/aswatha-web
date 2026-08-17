"use client";

import Navigation from "../components/Navigation";
import TestRideForm from "../components/TestRideForm";
import Footer from "../components/Footer";
import { useEffect, useMemo, useRef, useState } from "react";

const colorGroups = [
  {
    name: "Drum",
    options: [
      { name: "Starlight Blue Gloss", value: "#2e5171" },
      { name: "Stardust Black", value: "#161616" },
      { name: "Titanium Grey Matte", value: "#8d8d8e" },
      { name: "Lunar White Gloss", value: "#fff" },
    ],
  },
  {
    name: "Drum Alloy",
    options: [
      { name: "Starlight Blue Gloss Alloy", value: "#2e5171" },
      { name: "Titanium Grey Matte Alloy", value: "#8d8d8e" },
      { name: "Meteor Red Gloss Alloy", value: "#db3b31" },
      { name: "Lunar White Gloss Alloy", value: "#fff" },
    ],
  },
  {
    name: "SmartXonnect Drum",
    options: [
      { name: "Starlight Blue Gloss Disc SX", value: "#2c4c6a" },
      { name: "Galactic Copper Matte SX", value: "#b9a39d" },
      { name: "Dawn Blue Matte SX", value: "#119fca" },
    ],
  },
  {
    name: "SmartXonnect Disk",
    options: [
      { name: "Starlight Blue Gloss Disc SXi", value: "#2c4c6a" },
      { name: "Galactic Copper Matte SXi", value: "#b9a39d" },
      { name: "Dawn Blue Matte SXi", value: "#119fca" },
    ],
  },
  {
    name: "Special Edition",
    options: [
      { name: "Stardust Black Special", value: "#161616" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Starlight Blue Gloss": "/img/PRODUCTS/SCOOTER/JUPITER/drum-blue.avif",
    "Stardust Black": "/img/PRODUCTS/SCOOTER/JUPITER/drum-black.avif",
    "Titanium Grey Matte": "/img/PRODUCTS/SCOOTER/JUPITER/drum-grey.avif",
    "Lunar White Gloss": "/img/PRODUCTS/SCOOTER/JUPITER/drum-white.avif",
    "Starlight Blue Gloss Alloy": "/img/PRODUCTS/SCOOTER/JUPITER/dalloy-blue.avif",
    "Titanium Grey Matte Alloy": "/img/PRODUCTS/SCOOTER/JUPITER/dalloy-grey.avif",
    "Lunar White Gloss Alloy": "/img/PRODUCTS/SCOOTER/JUPITER/dalloy-white.avif",
    "Meteor Red Gloss Alloy": "/img/PRODUCTS/SCOOTER/JUPITER/dalloy-red.avif",
    "Starlight Blue Gloss Disc SX": "/img/PRODUCTS/SCOOTER/JUPITER/XD-blue.avif",
    "Galactic Copper Matte SX": "/img/PRODUCTS/SCOOTER/JUPITER/XD-copper.avif",
    "Dawn Blue Matte SX": "/img/PRODUCTS/SCOOTER/JUPITER/XD-dawn.avif",
    "Starlight Blue Gloss Disc SXi": "/img/PRODUCTS/SCOOTER/JUPITER/XDi-blue.avif",
    "Galactic Copper Matte SXi": "/img/PRODUCTS/SCOOTER/JUPITER/XDi-copper.avif",
    "Dawn Blue Matte SXi": "/img/PRODUCTS/SCOOTER/JUPITER/XDi-dawn.avif",
    "Stardust Black Special": "/img/PRODUCTS/SCOOTER/JUPITER/special-black.avif",
};

const features = [
  {
    title: "First in segment - Follow Me Headlamp",
    description: "Your scooter's got your back! Lights up your path for a safe exit even after switching off your scooter.",
  },
  {
    title: "Disc Brake Along with SBT",
    description: "Brake with confidence! The disc brake with synchronous braking system ensures ultimate safety in all riding conditions.",
  },
  {
    title: "First in segment - Emergency Brake Warning",
    description: "Sudden braking? No worries! The tail lights flash to signal those behind you and ensure safety of both you and others on the road.",
  },
  {
    title: "First in segment - Turn Signal Lamp Reset",
    description: "Forgot to turn off the indicator? Never again. Now enjoy worry-free turns.",
  },
  {
    title: "Side Stand Indicator & Engine Inhibitor",
    description: "The visual and sound alert reminds you to check the stand, while the engine inhibitor prevents accidental starts with the stand down.",
  },
  {
    title: "First in segment - Hazard Lamps",
    description: "Let others know you're there, even when visibility is low. Use it during emergencies, breakdowns or when navigating in low visibility conditions.",
  },
  {
    title: "Pass By Switch",
    description: "A layer of safety for those quick overtakes. Easily indicate other passersby while overtaking and ensure everyones safety.",
  },
  {
    title: "Parking Brake",
    description: "Uphill or downhill, parking is no more a worry as the parking brake holds your TVS Jupiter steady.",
  },
  {
    title: "MetalMAXX",
    description: "Metal Body: Crafted for durability, ensuring a secure and resilient ride.",
  },
  {
    title: "First in segment - Largest underseat storage",
    description: "More storage & more safety. Built to accommodate all your family's essentials and also room for two helmets",
  },
  {
    title: "Large front leg space",
    description: "Spacious leg room gives you room to stretch and enjoy comfortable ride",
  },
  {
    title : "Front 2 L glove box",
    description: "Your go-to spot for your water bottle, mobile phone and all the essentials",
  },
  {
    title : "Navigation with voice assist",
    description: "Use Voice assisted navigation for stress-free riding experience",
  },
  {
    title : "Call & SMS Alerts",
    description: "Stay connected on the move and never miss a call or message from your loved ones",
  },
  {
    title : "Find my vehicle",
    description: "Say goodbye to the hassle of searching your scooter! Now locate your Jupiter in busy parking lots effortlessly",
  },
  {
    title : "First in segment - Distance to Empty",
    description: "Never worry on running empty again! Stay informed about your range and plan your rides effortlessly",
  },
  {
    title : "First in segment - Average Fuel Economy",
    description: "Stay in control of your fuel efficiency! Get real-time mileage updates on your cluster and optimise your performance and savings",
  },
  {
    title : "Industry First Speckled Panel",
    description: "Brings a distinctive, premium look that sets your Jupiter apart with a unique visual texture.",
  },
  {
    title :"Gold Brushed 3D Emblem",
    description: "Adds a touch of elegance and exclusivity that makes your ride stand out on the road.",
  },
  {
    title: "First in segment - Infinity Light Bar",
    description: "Light up your ride, light up your style! Elevate your ride from ordinary to extraordinary with the Signature Infinity Light Bars",
  },
  {
    title: "First in segment - Infinity Tail Light Bar",
    description: "Leave a lasting impression! More than just functional it is a statement piece that makes heads turn wherever you go",
  },
  {
    title: "First in segment - LED Head Lamp",
    description: "Bright as day, even on the darkest nights! The cutting-edge LED head lamp is designed for optimal visibility"
  },
  {
    title: "Piano Black Finish",
    description: "A touch of class. The premium piano black finish will ensure your ride always stand out from the crowd",
  },
  {
    title: "Premium 3D Emblem",
    description: "The premium 3D emblem symbolizes elegance",  
  },
  {
    title: "Alloy Wheels",
    description: "Ride in style! Experience the perfect blend of comfort, stability and style",
  },
  {
    title: "Integrated Start Stop",
    description: "Stop-and-go made easy! TVS iGO Assist auto stops the engine at red lights and brief pauses, reducing fuel consumption. Simply apply the brake and revv to go – it's that easy!",
  },
  {
    title: "Intelligent Mileage Indicators",
    description: "Optimize your journey and maximize your fuel savings with real-time average fuel economy, distance to empty and Eco/Power modes",
  },
  {
    title: "Longest seat",
    description: "Designed for ultimate comfort! TVS Jupiter's longest seat caters to riders of all heights and builds, offering exceptional comfort in every journey",
  },
  {
    title: "Best in Class Ergonomics",
    description: "Perfectly positioned controls, seat and footpegs provide the ultimate comfort for both rider and pillion",
  },
  {
    title: "Easy Ground Reach",
    description: "The optimum height ensures an easy ground reach to any kind of rider",
  },
  {
    title: "Front Telescopic Suspension",
    description: "No more jerks, no matter the road. Cushion every ride for a smooth and comfortable journey ahead!",
  },
  {
    title: "3 Step Adjustable Rear Shocks",
    description: "Not only cushions your ride but also lets you customize your ride",
  },
  {
    title: "Large 12 inch Alloy Wheels",
    description: "Experience superior comfort and stability",
  },
  {
    title: "Body Balance Technology",
    description: "The balanced weight distribution of TVS Jupiter ensures perfect stability and superior vehicle handling",
  },
  {
    title: "First in segment - External Front Fuel Fill",
    description: "Effortless Refueling: No more stepping out or straining your neck. Fuel up with ease!",
  },
  {
    title: "Patented E-Z Center Stand",
    description: "Parking's now a piece of cake, even in those tight spots",
  },
  {
    title: "USB Mobile Charging port",
    description: "Because you're always in charge. Charge on the go and never worry about low battery again",
  },
  {
    title: "Low Fuel Alert",
    description: "Timely notifications to keep your journey smooth and worry-free",
  },
  {
    title: "All in One Lock",
    description: "Unlock convenience with a single twist: One lock for ignition, fuel, handle and storage",
  },
  {
    title: "First in segment - TVS iGO Assist",
    description: "Performance meets mileage. Get 10% more mileage with performance, just when you need that extra acceleration",
  },
  {
    title: "Silent Start",
    description: "Effortless mornings, smooth journeys. The all-new TVS Jupiter with i-Touch start offers silent and reliable starts",
  },
  {
    title: "All new 110 cc engine",
    description: "Presenting the all-new 110cc engine! Smooth, it reliable with maximum mileage makes it a perfect companion for your everyday journeys",
  },
];

const engineSpec = [
  { label: "Displacement", value: "113.3 cc" },
  { label: "Engine Type", value: "Single cylinder, 4 stroke" },
  { label: "Max Power", value: "5.9 kW @ 6500 rpm" },
  { label: "Max Torque", value: "9.8 Nm @ 5000 rpm (with Assist), 9.2 Nm @ 5000 rpm (without Assist)" },
  { label: "No. of Valves", value: "2" },
  { label: "Air Filter Type", value: "Paper Filter" },
  { label: "Transmission Type", value: "CVT Automatic" },
];

const electricalSpec = [
  { label: "Battery", value: "MF 12 V, 5 AH" },
  { label: "Headlamp", value: "LED" },
  { label: "Taillamp", value: "LED" },
  { label: "Starting System", value: "Electric Silent Start" },
];

const dimentionSpec = [
  { label: "Vehicle Size", value: "1848 x 665 x 1158 mm" },
  { label: "Wheel Base", value: "1275 mm" },
  { label: "Ground Clearance", value: "163 mm" },
  { label: "Ground Reach", value: "770 mm" },
  { label: "Seat Length", value: "756 mm" },
  { label: "Front Leg Space", value: "380 mm" },
  { label: "Kerb Weight", value: "105 Kg" },
];

const chassisSpec = [
  { label: "Suspension Front", value: "Telescopic Hydraulic" },
  { label: "Suspension Rear", value: "Twin tube emulsion type shock absorber with 3 step adjustment" },
];

const brakesSpec = [
  { label: "Front Braking", value: "220 mm disc" },
  { label: "Rear Braking", value: "130 mm drum" },
  { label: "Tyre Size (Tubeless tyres)", value: "90/90 -12 - 54 J (Front & Rear)" },
];

const galleryImages = [
  "/img/PRODUCTS/SCOOTER/JUPITER/Gallery/1.avif",
  "/img/PRODUCTS/SCOOTER/JUPITER/Gallery/2.avif",
  "/img/PRODUCTS/SCOOTER/JUPITER/Gallery/3.avif",
  "/img/PRODUCTS/SCOOTER/JUPITER/Gallery/1.avif",
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
          <img src="/img/HERO/2.webp" alt="TVS Apache RTX hero" className="h-[calc(100vh-96px)] w-full object-cover" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                TVS Jupiter
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Jupiter
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">TVS Jupiter details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Jupiter stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/SCOOTER/JUPITER/Style/1.webp" alt="Styling 1" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/JUPITER/Style/2.webp" alt="Styling 2" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/JUPITER/Style/3.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
                <img src="/img/PRODUCTS/SCOOTER/JUPITER/Style/4.webp" alt="Styling 4" className="w-full h-56 object-cover rounded-md bg-[#F0F4FF]" />
              </div>

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/1.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/2.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/3.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/4.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/5.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/6.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/7.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/8.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/9.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/10.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/11.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/12.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/14.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/15.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/16.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/17.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/18.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/19.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/20.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/21.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/22.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/23.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/24.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/25.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/26.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/27.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/28.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/29.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/30.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/31.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/32.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/33.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/34.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/35.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/36.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/37.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/38.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/39.webp",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/40.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/41.mp4",
                      "/img/PRODUCTS/SCOOTER/JUPITER/Features/42.mp4",
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">TVS Jupiter in motion</h2>
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
