"use client";

import Navigation from "../../components/Navigation";
import TestRideForm from "../../components/TestRideForm";
import Footer from "../../components/Footer";
import { useMemo, useState } from "react";

const colorGroups = [
  {
    name: "Colors",
    options: [
      { name: "Marine Blue", value: "blue" },
      { name: "Racing Red", value: "red" },
      { name: "Matte Black", value: "black" },
      { name: "Granite Grey", value: "grey" },
      { name: "Pearl White", value: "white" },
      { name: "Glossy Black", value: "black" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Marine Blue": "/img/PRODUCTS/MC/APACHE/160-4v-blue.avif",
    "Racing Red": "/img/PRODUCTS/MC/APACHE/160-4v-red.avif",
    "Matte Black": "/img/PRODUCTS/MC/APACHE/160-4v-matte.avif",
    "Granite Grey": "/img/PRODUCTS/MC/APACHE/160-4v-grey.avif",
    "Pearl White": "/img/PRODUCTS/MC/APACHE/160-4v-white.avif",
    "Glossy Black": "/img/PRODUCTS/MC/APACHE/160-4v-glossy.avif",
    
};

const features = [
  {
    title: "TVS SmartXonnect",
    description: "A cutting-edge Bluetooth system delivering race analytics, telemetry review, and navigation. Designed for seamless connectivity and control, it enhances every ride experience, be on the track or the streets.",
  },
  {
    title: "Race Derived O3C Engine",
    description: "The 159.7cc, 4-valve O3C engine delivers 17.55 PS of power, with RT-Fi technology ensuring sharper throttle response, efficient combustion, and consistent performance across conditions.",
  },
  {
    title: "Ride Modes",
    description: "Switch between Sport, Urban, and Rain modes at the press of a button. Each mode uniquely primes the engine and ABS response, providing unmatched performance in any race condition.",
  },
  {
    title: "Upside Down Suspension",
    description: "The 37 mm Upside Down suspension offers sharper handling in the corners, while providing superior stability in the straights, designed for racers chasing precision.",
  },
  {
    title: "Dual Channel ABS With RLP Control",
    description: "Developed on the track, the dual-channel ABS lets you brake later, corner sharper, and stop with pinpoint accuracy for total race control. The Rear wheel Lift-off Protection ensures enhanced stability by preventing rear-wheel lift during hard braking.",
  },
  {
    title: "Adjustable Levers",
    description: "Three-step adjustable brake and clutch levers gives precise control and optimal comfort providing effortless adjustability without the use of tools.",
  },
  {
    title: "Race Tuned Slipper Clutch",
    description: "Engineered for precision, it ensures smooth downshifts, prevents rear-wheel hop during aggressive braking, enhances cornering control, and delivers seamless performance, giving riders confidence on the track and streets alike.",
  },
  {
    title: "Racing Tyres",
    description: "Rear radial tyres deliver race-spec grip, stability, and durability giving you the confidence to attack corners and dominate every ride with precision.",
  },
  {
    title: "Class-D Projector Headlamps",
    description: "Engineered for unmatched illumination. The all-new Class-D projector headlamps deliver a wider, brighter beam for superior night visibility. Flanked by signature LED light blades, they don’t just light the streets — they command it.",
  },
  {
    title: "Hydroformed Handlebar",
    description: "Engineered for precision, the hydroformed handlebar keeps you locked in control. Its race-bred ergonomics cut fatigue and sharpen confidence through every corner.",
  },
  {
    title: "Double Cradle SynchroStiff Chassis",
    description: "Patented double cradle chassis, engineered with Multi-Body Dynamics, boosts stability by 25% setting the benchmark for razor-sharp handling and unmatched riding dynamics.",
  },
  {
    title : "Racing Bullpup Exhaust",
    description: "The Racing bullpup exhaust reduces weight and delivers the iconic Apache note, a race-bred sound that adds thrills to every ride.",
  },
  {
    title : "Race-Inspired Graphics",
    description: "Aggressive race graphics, gold-finished front forks, and coloured alloy wheels amplify its dynamic stance - a bold presence that mirrors the machine’s performance.",
  },
  {
    title : "Advanced 5” TFT Cluster",
    description: "All the information you need, right when you need it. The intuitive 5” TFT cluster offers race telemetry, turn-by-turn navigation, ride analytics, and smartphone connectivity, putting control, customization, and clarity at your fingertips — whether on the track or the street.",
  },
  {
    title : "LED Turn Signal Lamps",
    description: "Sharper, sleeker and clear. The LED turn indicators ensure crystal-clear visibility while perfectly complementing Apache’s aggressive stance.",
  },
  {
    title : "Traction Control System",
    description: "Unleash performance with precision. The advanced traction control system regulates torque to prevent wheel spin, giving you confidence in every condition.",
  },
  {
    title : "Glide Through Technology (GTT)",
    description: "The Glide Through Technology sets your Apache in motion with a slow clutch release, requiring no throttle input to keep it from stalling. Ideal for heavy traffic conditions.",
  },
];

const engineSpec = [
  { label: "Displacement", value: "159.7 cm3" },
  { label: "Type", value: "SI, 4 stroke, Oil cooled, SOHC, Fuel Injection" },
  { label: "Max Power", value: "Sport: 12.91 kW (17.55 PS) @ 9250 rpm Urban / Rain: 11.50 kW (15.64 PS) @ 8650 rpm" },
  { label: "Max Torque", value: "Sport: 14.73 Nm @ 7500 rpm Urban / Rain: 14.14 Nm @ 7250 rpm" },
  { label: "Fuel supply system", value: "Fuel Injection: Bosch- Closed loop" },
  { label: "Number of Valves", value: "4 Valves" },
  { label: "Muffler", value: "Bullpup exhaust design" },
  { label: "Starting", value: "Electric start" },
  { label: "Power to Weight Ratio", value: "0.09 kW/kg" },
  { label: "Clutch", value: "Wet multi plate clutch" },
  { label: "Cooling System", value: "Oil cooled with Ram Air Assist" },
  { label: "Gear box", value: "5 speed gear box" },
  { label: "Max speed", value: "Sport : 114 km/h. Urban/ Rain : 103 km/h" },
];

const chassisSpec = [
  { label: "Frame", value: "Double cradle Split Synchro Stiff Frame" },
  { label: "Front Suspension", value: "Telescopic Fork (Single Channel ABS Variant) ; 37mm Upside Down Suspension(Dual Channel ABS with USD variant and TFT variant)" },
  { label: "Rear Suspension", value: "Mono Shock" },
  { label: "Battery", value: "12V, 6Ah MF" },
  { label: "Headlamp", value: "Class-D Projector Headlamp with Signature DRLs" },
  { label: "Tail Lamp", value: "LED" },
];

const brakesSpec = [
  { label: "Rim (front)", value: "1.85x17" },
  { label: "Rim (rear)", value: "Disc - 3.5x17" },
  { label: "Tyre Size (Front)", value: "90/90-17 49P Tubeless" },
  { label: "Tyre Size (Rear)", value: "130/70 R17 M/C 62P Tubeless (Radial tyre)" },
  { label: "Front", value: "270mm dia Petal Disc" },
  { label: "Rear", value: "240 mm dia Petal Disc" },
  { label: "ABS", value: "Dual Channel ABS with RLP (DC ABS with USD variant and TFT variant)" },
  { label: "Brake Fluid", value: "DOT 3 / DOT 4" },
];

const dimentionSpec = [
  { label: "Height", value: "1050 mm (without Visor); 1111 mm (with Visor)" },
  { label: "Length", value: "2035 mm" },
  { label: "Width", value: "790 mm" },
  { label: "Wheelbase", value: "1357 mm" },
  { label: "Ground Clearance", value: "180 mm" },
  { label: "Saddle Height", value: "800 mm" },
  { label: "Kerb Weight", value: "143 kg (Single Channel ABS variant), 146 kg (Dual Channel ABS with USD variant and TFT variant)" },
  { label: "Max payload", value: "130 kg" },
  { label: "Fuel Tank Capacity", value: "12 L" },
  { label: "Fuel injection", value: "Bosch - Closed loop"},
];

const electricalSpec = [
  { label: "Headlight", value: "Twin Class D Symmetric LED Headlight with Signature DRL" },
  { label: "Tail Light", value: "LED, Dynamic Braking Light" },
  { label: "Turn Signal Lamp", value: "LED" },
  { label: "Speedometer", value: "5 Inch TFT Cluster with TVS SmartXonnect" },
  { label: "Battery Type", value: "12V, 8Ah, VRLA" },
];

const electronicSpec = [
  { label: "Ride Mode", value: "4 Mode (Urban, Rain, Tour, Rally)" },
  { label: "Connectivity", value: "TVS SmartXonnect with Map Mirroring*" },
  { label: "Automatic Headlamp Control", value: "Only available in Top & BTO variant" },
  { label: "Dynamic Headlamp", value: "Only available in Top & BTO variant" },
  { label: "Switchable ABS", value: "Only available in Top & BTO variant" },
  { label: "Bi-Directional Quickshifter", value: "Only available in Top & BTO variant" },
  { label: "Multi Level Traction Control System", value: "Only available in Top & BTO variant" },
  { label: "Cruise Control", value: "Only available in Top & BTO variant" },
];

const galleryImages = [
  "/img/PRODUCTS/MC/APACHE/160-4v/Gallery/1.webp",
  "/img/PRODUCTS/MC/APACHE/160-4v/Gallery/2.webp",
  "/img/PRODUCTS/MC/APACHE/160-4v/Gallery/1.webp",
  "/img/PRODUCTS/MC/APACHE/160-4v/Gallery/2.webp",
];

const stylingHighlights = [
  "Sharp LED headlamp with DRLs",
  "Twin exhaust outlets",
  "Premium split-seat layout",
  "Lightweight alloy wheels with red accents",
];

const tabItems = ["Features", "Specifications"];

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
          <img src="/img/HERO/5.webp" alt="TVS Apache RTX hero" className="h-[calc(100vh-96px)] w-full object-cover" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                Apache RTR 160 4V
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Apache RTR 160 4V - Born to Dominate
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Born from track DNA and built for domination, it is the perfect balance of aggression and agility.
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
                      <div className="mt-5 overflow-hidden rounded-[28px] bg-slate-900 shadow-lg">
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">RTR 160 4V details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Apache RTR 160 4V stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              {/* <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/MC/RTR/Styling/1037x573-Adaptive-Cyber-Headlamp.webp" alt="Styling 1" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RTR/Styling/Streetfighter_Styling_1037x573_design_philosphy.webp" alt="Styling 2" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RTR/Styling/Streetfighter Styling_373x552 Knuckle Guards.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RTR/Styling/Streetfighter_Styling_1037x573_Transparent_clutch_cover.webp" alt="Styling 4" className="w-full h-56 object-cover rounded-md" />
              </div> */}

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/1.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/2.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/3.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/4.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/5.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/6.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/7.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/8.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/9.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/10.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/11.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/12.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/13.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/14.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/15.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/16.webp",
                      "/img/PRODUCTS/MC/APACHE/160-4v/Features/17.webp",
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Engine & Performance</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {engineSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Chassis, Suspension & Electrical</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {chassisSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Wheel, Tyre & Brake</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {brakesSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Dimensions, Weight & Fuel Tank Capacity</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {dimentionSpec.map((spec) => (
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Apache RTR 160 4V in motion</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-[32px] bg-white shadow-sm">
                  <img src={src} alt={`Apache RTR 200 4V gallery ${index + 1}`} className="h-56 w-full object-cover" />
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
