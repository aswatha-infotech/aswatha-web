"use client";

import Navigation from "../components/Navigation";
import TestRideForm from "../components/TestRideForm";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";

const colorGroups = [
  {
    name: "Self Start(ES)",
    options: [
      { name: "Starlight Blue", value: "#3a83ba" },
      { name: "All Red", value: "#b50000" },
      { name: "All Grey", value: "#98999f" },
      { name: "All Black", value: "#020202" },
    ],
  },
  {
    name: "Self Start(ES+)",
    options: [
      { name: "Grey Red", value: "#ff0000" },
      { name: "Black Neon", value: "#0000ff" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Starlight Blue": "/img/PRODUCTS/MC/SPORT/base-blue.avif",
    "All Red": "/img/PRODUCTS/MC/SPORT/base-red.avif",
    "All Grey": "/img/PRODUCTS/MC/SPORT/base-grey.avif",
    "All Black": "/img/PRODUCTS/MC/SPORT/base-black.avif",
    "Grey Red": "/img/PRODUCTS/MC/SPORT/top-red.avif",
    "Black Neon": "/img/PRODUCTS/MC/SPORT/top-neon.avif",
};

const features = [
  {
    title: "15% more Mileage",
    description: "Get Extra Miles out of every litre. The patented ET-Fi technology is designed to deliver enhanced performance and optimum fuel efficiency by utilising every drop of fuel.",
  },
  {
    title: "Econometer",
    description: "Patented advanced technology enables you get “Best in Class MileageThe Econometer glows when the rider maintains the recommended speed, thus putting less stress on the engine. It also helps alter the riding style to attain optimum fuel efficiency.",
  },
  {
    title: "USB Charger",
    description: "Stay powered on the go! The new USB charger lets you charge your devices anytime, making every ride more convenient.",
  },
  {
    title: "Telescopic Oil Damped Shock Absorber",
    description: "The twin telescopic forks ensure bumps and rough patches are absorbed efficiently. Tuned for comfort, the suspension setup offers ample cushioning for you to ride longer without fatigue.",
  },
  {
    title: "5 Step Adjustable Hydraulic Shock Absorber (Rear)",
    description: "The option of adjustable rear suspension enables a more personalized riding experience. They can be adjusted as per the road conditions for a pleasant overall riding experience.",
  },
  {
    title: "Extra Long Seat",
    description: "There's more room on the seat now - cover greater distances without fatigue. The Extra Long Seat come with adequate cushioning, ensuring rider and pillion sit comfortably even on long rides.",
  },
  {
    title: "All Gear Electric Start",
    description: "This system lets you start the bike in any gear. Now experience hassle-free starts no matter which gear your bike is in.",
  },
  {
    title: "Aluminum Grab Rail",
    description: "The Strong and easy-to-handle aluminium grab rail adds to the convenience of the pillion rider in terms of safety. It can also be used to hook additional luggage with a bungee cord, enhancing the overall practicality of the bike.",
  },
  {
    title: "Powered by ETFi technology",
    description: "It delivers enhanced overall performance in terms of drivability, smoothness and fuel economy.ET-FI technology uses fuel injectors and sensors to deliver the precise air-fuel ratio needed and eliminates any wastage of fuel that occurs due to lean or rich air-fuel ratio.",
  },
  {
    title: "Long-life Duralife 110 cc engine",
    description: "This advanced engine operates with reduced friction to ensure engine smoothness which increases the engine life.The chrome-plated piston rings and roller cam follower reduce friction loss and stress on moving parts, minimising wearing and tear and enhancing the long-term reliability of the engine.",
  },
  {
    title: "Digital Ignition",
    description: "ECU – Electronic Control Unit.The precisely calibrated Digital Ignition offers the perfect air-fuel ratio that leads to complete combustion and optimum utilization of fuel, resulting in enhanced fuel efficiency.",
  },
  {
    title : "Stylish Decals",
    description: "Turn heads with bold new graphics. TVS Sport now comes with stylish sticker decals that add a fresh, sporty look to your everyday ride.",
  },
  {
    title : "Automatic Headlight On for Enhanced Safety",
    description: "AHO enhances safety on the road, increasing the visibility of your vehicle from a distance. It is also helpful during low visibility conditions.",
  },
  {
    title : "Sporty Headlamp",
    description: "AHO enhances safety on the road, increasing the visibility of your vehicle from a distance. It is also helpful during low visibility conditions.",
  },
  {
    title : "Premium 3D Logo",
    description: "The chrome finish Premium 3D Emblem adds to the bike’s style quotient while representing durability and reliability.",
  },
  {
    title: "All-New Graphics and Sporty Design",
    description: "Flowing graphics give the bike a modern urban look. Offered in multiple colour options, TVS Sport has a colour that suits everyone.",
  },
  {
    title: "New Self Start With Bold Looks",
    description: "The sleek design with a blacked-out engine and alloy wheels offers a bold road presence. The electric-start system now allows the bike to be started even when engaged in any one of the gears.",
  },
];

const engineSpec = [
  { label: "Capacity", value: "109.7 CC" },
  { label: "Type", value: "Single Cylinder, 4 Stroke, Fuel Injection, Air Cooled Spark Ignition Engine" },
  { label: "Max Power", value: "6.03 kW @ 7350 rpm" },
  { label: "Max Torque", value: "8.7 Nm @ 4500 rpm" },
  { label: "Bore x Stroke", value: "53.5 mm x 48.8 mm" },
  { label: "Compression Ratio", value: "10.0 : 1" },
  { label: "EFI System", value: "ETFi Eco Thrust Fuel Injection Technology" },
  { label: "Emission Compliance", value: "BS VI" },
  { label: "Air Filter", value: "Paper Filter Element" },
  { label: "Transmission", value: "4 Speed Constant Mesh" },
  { label: "Gear Shift Pattern", value: "All Up" },
  { label: "Clutch", value: "Wet Multi-Plate Type" },
  { label: "Primary Transmission", value: "Spur Gears" },
  { label: "Secondary Transmission", value: "Chain & Sprockets" },
  { label: "Max Speed", value: "90 km/h" },
];

const electricalSpec = [
  { label: "Battery", value: "12V, 4 Ah" },
  { label: "Headlamp", value: "12V, HS1 35/35W x 1" },
  { label: "Horn", value: "12V, DC x 1" },
  { label: "Ignition System", value: "ECU - Electronic Control Unit" },
  { label: "Position / DRL Lamps", value: "12V, LED 4W" },
  { label: "Tail Lamp / Stop Lamp", value: "12V, 5/21W x 1" },
];

const dimentionSpec = [
  { label: "Length", value: "1950 mm" },
  { label: "Width", value: "705 mm" },
  { label: "Height", value: "1080 mm" },
  { label: "Wheelbase", value: "1236 mm" },
  { label: "Ground Clearance", value: "175 mm" },
  { label: "Kerb Weight", value: "112 kg" },
];

const chassisSpec = [
  { label: "Front Suspension", value: "Telescopic oil damped" },
  { label: "Rear Suspension", value: "5 Step adjustable Hydraulic Shock Absorber" },
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
  "/img/PRODUCTS/MC/SPORT/Gallery/1.webp",
  "/img/PRODUCTS/MC/SPORT/Gallery/2.webp",
  "/img/PRODUCTS/MC/SPORT/Gallery/3.webp",
  "/img/PRODUCTS/MC/SPORT/Gallery/1.webp",
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
          <img src="/img/HERO/7.webp" alt="TVS Apache RTX hero" className="h-auto w-full object-contain" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                TVS Sport
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Sport
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">TVS Sport details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes TVS Sport stand apart?</h2>
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
                      "/img/PRODUCTS/MC/SPORT/Features/1.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/2.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/3.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/4.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/5.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/6.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/7.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/8.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/9.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/10.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/11.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/12.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/13.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/14.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/15.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/16.webp",
                      "/img/PRODUCTS/MC/SPORT/Features/17.webp",
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
                
               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Electrical</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {electricalSpec.map((spec) => (
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
              <h2 className="mt-4 text-3xl font-bold text-slate-1000 sm:text-4xl">TVS Sport in motion</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                  <img src={src} alt={`TVS Sport gallery ${index + 1}`} className="h-56 w-full object-cover" />
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
