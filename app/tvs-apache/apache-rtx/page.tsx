"use client";

import Navigation from "../../components/Navigation";
import TestRideForm from "../../components/TestRideForm";
import Footer from "../../components/Footer";
import { useMemo, useState } from "react";

const colorGroups = [
  {
    name: "Base",
    options: [
      { name: "Lightning Black", value: "#43464c" },
      { name: "Pearl White", value: "#d2cecf" },
    ],
  },
  {
    name: "Top",
    options: [
      { name: "Lightning Black Top", value: "#43464c" },
      { name: "Metallic Blue", value: "#317dbd" },
      { name: "Tarn Bronze", value: "#bda085" },
    ],
  },
  {
    name: "Build to Order",
    options: [
      { name: "Green Top", value: "#a9aa65" },
      { name: "Lightning Black Top", value: "#43464c" },
      { name: "Metallic Blue", value: "#317dbd" },
      { name: "Tarn Bronze", value: "#bda085" },
    ],
  },
];

const features = [
  {
    title: "Engine",
    description: "The 4-Valve Liquid Cooled 299.1 cc engine mated to a 6-speed gearbox produces 36 PS power and 28.5 Nm torque. Tuned to deliver torque across the rev range, 4 Dual Tech technology ensures maximum performance through challenging situations.",
  },
  {
    title: "Rally-Inspired Design",
    description: "The distinct rally-tourer design is at once both practical and striking. The styling is evolved from decades of rally-racing legacy, resulting in a dominating stance that instills confidence within, and a commanding presence on the outside.",
  },
  {
    title: "Optimized Ergonomics",
    description: "The balanced design and precise steering geometry ensure effortless handling. Whether riding standing up or on the saddle, the ergonomics perfectly sets the rider up to tackle obstacles on the trails.",
  },
  {
    title: "Class D LED Headlamp",
    description: "See clearer and further with brightest-in-segment Class D LED Headlamps with Dynamic & Automatic Headlamp Control. The Welcome & Goodbye animation on DRLs adds sophistication, while the Take Me Home feature keeps headlamps on briefly after shutdown.",
  },
  {
    title: "Bi-Directional Quickshifter",
    description: "Shift gears effortlessly without clutch or throttle input, keeping your focus on the road. It enables smooth, rapid gear changes, helping to reduce fatigue even when the situation demands frequent gear changes.",
  },
  {
    title: "Cruise Control",
    description: "Tour relaxed and fatigue-free with cruise control, maintaining steady speeds for enhanced fuel efficiency. Seamlessly change gears while cruising and override instantly for complete control on every journey.",
  },
  {
    title: "5” TFT cluster",
    description: "The new 5” TFT cluster with its advanced navigation system allows you to project maps through map mirroring via the SmartXonnect app, offering seamless real-time navigation.",
  },
  {
    title: "4 Ride Modes",
    description: "Choose between 4 ride modes: Urban mode delivers smooth, responsive power for city streets. Rain mode ensures linear acceleration on wet roads. Tour mode balances power and efficiency for all-day cruising. And when the trail gets wild, Rally mode unleashes raw performance for total control.",
  },
  {
    title: "Tall Visor",
    description: "Stay comfortable and controlled with the optimised wind deflection of the tall visor reducing the airflow hitting your helmet, minimalising wind buffeting and fatigue.",
  },
  {
    title: "Contoured Seat",
    description: "The touring-optimised contoured seats are well-padded for lasting comfort. The ample dimensions also enables you to move freely along the length and breadth to optimise positioning as various situations demand.",
  },
  {
    title: "Upside Down Front Suspension",
    description: "Smooth out even the harshest terrains with the 41 mm dia upside down front suspension. With 180 mm of travel, the front suspension offers superior ride and handling, tuned to absorb high-energy impacts with ease.",
  },
  {
    title: "Monotube Rear Suspension",
    description: "Experience superior ride over tarmac and have the confidence to tackle rugged off-road trails with the 180 mm travel monoshock floating piston rear suspension which offers precise damping and smooth dynamic response.",
  },
  {
    title: "High Ground Clearance",
    description: "With an impressive 200mm ground clearance, this machine is designed to conquer the toughest off-road trails with utmost confidence. Whether navigating rocky paths or uneven terrain, the elevated clearance ensures optimal stability, protection, and confidence.", 
  },
  {
    title: "Switchable Rear ABS",
    description: "Switchable Rear ABS gives you the freedom to conquer tough trails. Turn it off for better control on loose, uneven surfaces, allowing precise braking and confident handling during off-road adventures. Perfect for riders who demand full control in the wild.",
  },
  {
    title: "Traction Control",
    description: "From rain-slicked highways to twisting mountain passes, ride with perfect control. The advanced Traction Control system dynamically adjusts torque based on surface conditions to prevent wheel spin, ensuring optimal grip and smooth acceleration.",
  },
  {
    title: "Adventure-Oriented Tyres",
    description: "Ride comfortably in all weather conditions with the wide tread block tyres. The rounded and extended shoulder profile enhances cornering stability, while the high-grip Tri-Polymer compound ensures excellent grip providing unmatched control on any terrain.",
  }
];

const engineSpec = [
  { label: "Capacity", value: "299.1 cc" },
  { label: "Type", value: "Single Cylinder, Liquid Cooled, DOHC, 4 Valve" },
  { label: "Max Power", value: "36 PS @ 9,000 rpm" },
  { label: "Max Torque", value: "28.5 Nm @ 7,000 rpm" },
  { label: "Transmission", value: "6-Speed Manual Transmission" },
  { label: "Bore x Stroke", value: "78 mm x 62.6 mm" },
  { label: "Clutch", value: "Wet Multi-Plate Lean Segment Assist and Slipper Clutch" },
  { label: "Starting System", value: "Electric Start" },
  { label: "Throttle", value: "Electronic Throttle Body (Ride-By-Wire)" },
];

const chassisSpec = [
  { label: "Frame", value: "Steel Trellis Frame Hinged With Aluminium Cast Swingarm" },
  { label: "Front Suspension", value: "USD Forks, Ø 41mm" },
  { label: "Rear Suspension", value: "Monoshock with Floating Piston" },
  { label: "Front Suspension Travel", value: "180 mm" },
  { label: "Rear Suspension Travel", value: "180 mm" },
];

const brakesSpec = [
  { label: "Front Brake", value: "320 mm, Radial Caliper" },
  { label: "Rear Brake", value: "240 mm, Floating Caliper" },
  { label: "ABS", value: "Dual Channel, Switchable Rear" },
  { label: "Front Tyre", value: "110/80 - 19, Tubeless" },
  { label: "Rear Tyre", value: "150/70 - 17, Tubeless" },
];

const dimentionSpec = [
  { label: "Length x Breadth x Height", value: "2176 mm x 885 mm x 1400 mm" },
  { label: "Wheelbase", value: "1430 mm" },
  { label: "Kerb Weight", value: "180 kg" },
  { label: "Seat Height", value: "835 mm" },
  { label: "Ground Clearance", value: "200 mm" },
  { label: "Fuel Tank Capacity", value: "12.5 litres" },
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
  "/img/PRODUCTS/MC/RTX/Styling/TVS Apache RTX Website Image6.webp",
  "/img/PRODUCTS/MC/RTX/Styling/TVS Apache RTX Website Image7.webp",
  "/img/PRODUCTS/MC/RTX/Styling/TVS Apache RTX Website Image8.webp",
  "/img/PRODUCTS/MC/RTX/Styling/RIDER WITH BIKE-D.webp",
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

  const colorImageMap: Record<string, string> = {
    "Lightning Black": "/img/PRODUCTS/MC/RTX/TVS-Apache-RTX-Lightning-black.webp",
    "Pearl White": "/img/PRODUCTS/MC/RTX/TVS-Apache-RTX-Pearl-White.webp",
    "Lightning Black Top": "/img/PRODUCTS/MC/RTX/TVS-Apache-RTX-TOP-Lightning-Black.webp",
    "Metallic Blue": "/img/PRODUCTS/MC/RTX/TVS-Apache-RTX-TOP-Blue.webp",
    "Tarn Bronze": "/img/PRODUCTS/MC/RTX/TVS-Apache-RTX-TOP-Bronze.webp",
    "Green Top": "/img/PRODUCTS/MC/RTX/TVS-Apache-RTX-TOP-Green.webp",
  };

  const selectedColorImage = colorImageMap[selectedColor.name] ?? "/img/PRODUCTS/MC/RTX/Apache-RTX.webp";

  return (
    <div className="bg-slate-100 text-slate-900">
      <Navigation />

      <main className="pt-18">
        <section className="relative">
          <img src="/img/HERO/6.webp" alt="TVS Apache RTX hero" className="h-auto w-full object-contain" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                Apache RTX
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Apache RTX
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Built For You, Designed For Adventure
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
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Choose color</p>
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
                      <div className="mt-5 overflow-hidden rounded-[28px] bg-slate-900 shadow-lg">
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">RTX details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Apache RTX stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/MC/RTX/Styling/TVS Apache RTX Website Image6.webp" alt="Styling 1" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RTX/Styling/TVS Apache RTX Website Image7.webp" alt="Styling 2" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RTX/Styling/TVS Apache RTX Website Image8.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RTX/Styling/RIDER WITH BIKE-D.webp" alt="Styling 4" className="w-full h-56 object-cover rounded-md" />
              </div>

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/MC/RTX/Features/ENGINE-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/RALLY-INSPIRED DESIGN-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/OPTIMISED ERGONOMICS-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/CLASS D LED HEADLAMP-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/BI-DIRECTIONAL QUICKSHIFTER-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/CRUISE CONTROL-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/5 INCH TFT CLUSTER-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/4 RIDE MODES-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/TALL VISOR-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/CONTOURED SEAT-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/UPSIDE DOWN FRONT SUSPENSION-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/MONOTUBE SUSPENSION-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/HIGH GROUND CLEARANCE-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/SWITCHABLE REAR ABS-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/TRACTION CONTROL-D.webp",
                      "/img/PRODUCTS/MC/RTX/Features/ADVENTURE-ORIENTED TYRES-D.webp",
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Chassis and Suspension</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {chassisSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Brakes and Tyres</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {brakesSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Dimentions</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {dimentionSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Electricals</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {electricalSpec.map((spec) => (
                    <div key={spec.label} className="rounded-[20px] border border-slate-200 bg-white p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{spec.label}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-600">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-10">Electronic Rider Aids</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {electronicSpec.map((spec) => (
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Apache RTX in motion</h2>
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
