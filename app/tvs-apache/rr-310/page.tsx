"use client";

import Navigation from "../../components/Navigation";
import TestRideForm from "../../components/TestRideForm";
import Footer from "../../components/Footer";
import { useMemo, useState } from "react";

const colorGroups = [
  {
    name: "Base",
    options: [
      { name: "Sepang Blue", value: "#1c2e70" },
      { name: "Racing Red", value: "#a10309" },
    ],
  },
  {
    name: "Build to Order",
    options: [
      { name: "Bomber Grey", value: "#747d86" },
      { name: "Sepang Blue", value: "#1c2e70" },
      { name: "Racing Red", value: "#a10309" },
      { name: "Black Champagne Gold Livery", value: "#ab8070" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Sepang Blue": "/img/PRODUCTS/MC/RR/blue.avif",
    "Racing Red": "/img/PRODUCTS/MC/RR/red.avif",
    "Bomber Grey": "/img/PRODUCTS/MC/RR/grey.avif",
    "Black Champagne Gold Livery": "/img/PRODUCTS/MC/RR/gold.avif",
};

const features = [
  {
    title: "Multi Information Race Computer",
    description: "The TVS Apache RR310 stays ahead in the race to the finish line not just on the track, but in the race to the future as well. The race machine is equipped with a SmartXonnect enabled Multi Information Race Computer.",
  },
  {
    title: "Development",
    description: "Honed by rigorous testing and unlimited laps on the race track with key inputs and feedback by the TVS Racing Team to ensure ultimate control on the track and street. Racing heritage based expertise established since 1982, come standard with every TVS Apache RR310.",
  },
  {
    title: "Concept",
    description: "Inspired by the deadliest predator - the Shark. The Apache RR310 is conceptualized to have an aggressive and ready-to-attack silhouette which is aided by a raked-high tail and ‘Mass- Forward and Minimalist Tail‚ design. The Apache RR310, most powerful Apache till now, is based on the Akula Concept which won the ‘Best Concept Bike of Auto Expo 2016‚ at New Delhi.",
  },
  {
    title: "Bi-Led Twin Projector Headlamps",
    description: "With aggressive brow lines, the first in its class Bi-LED Twin Projector headlamps offer higher intensity at day or night enabling you to ride with confidence at higher speeds.",
  },
  {
    title: "Tail Light",
    description: "Snake Fangs inspired LED tail lights complete the high sporty rake tail by giving the Apache RR310 a unique visual signature in its class.",
  },
  {
    title: "Ride Mode - Urban",
    description: "Tame the city streets with ease, with urban mode. This mode allows for linear acceleration and deceleration during city riding, for a smooth and controlled ride",
  },
  {
    title: "Digi Docs",
    description: "An intelligent feature on the Apache RR310 to store/transfer images and documents from the TVS Connect App to Cluster. You can now store and view up to 3 documents like RC card, Driving license etc on your cluster",
  },
  {
    title: "Intelligent Cluster",
    description: "Dynamic rev limit indicator to alert the rider depending on the engine temperature and rev limit for enhancing the safety and durability of the engine. The cluster also has a gear shift indicator to help the rider shift gears at the right time for optimal performance.",
  },
  {
    title: "Dedicated Control Cubes",
    description: "The control cubes on the handlebar, allows you to instinctively switch between ride modes with the touch of a button while you are on the go. Control cubes also helps the racer to navigate through the Multi Information Race Computer giving access to a host of essential information and personalization widgets",
  },
  {
    title: "TVS SmartXonnect",
    description: "The SmartXonnect app links your smartphone and to your race machine. The cutting-edge Bluetooth connected app offers up a range of race analytics and data that allows any racer to review their racing style and constantly improve it on the track.",
  },
  {
    title: "Glide Through Technology Plus",
    description: "Tuned feature for urban and rain mode riding, GTT+ enables an extremely smooth and controlled ride. With this feature, one can put the vehicle in motion with a slow release of the clutch lever, without the throttle operation.",
  }
];

const engineSpec = [
  { label: "Capacity", value: "312.2cc" },
  { label: "Type", value: "SI, 4 stroke, 4 valve, Single cylinder, Liquid cooled, Reverse inclined" },
  { label: "Max Power", value: "Sport and Track mode - 28 kW@9800 engine rpm (38 PS@9800 engine rpm)" },
  { label: "Max Torque", value: "Sport and Track mode - 29 Nm@7900 engine rpm" },
  { label: "Bore x Stroke", value: "80 mm x 62.1 mm" },
  { label: "Fuel injection", value: "Bosch - Closed loop RT-FI" },
  { label: "Throttle control", value: "Electronic throttle control with multiple ride modes" },
  { label: "Bore to stroke ratio", value: "1.29" },
  { label: "Starting", value: "Electric start" },
  { label: "Idle speed", value: "1700 ± 200rpm" },
  { label: "Ignition", value: "Dynamically controlled integrated high energy ignition system" },
  { label: "Power to weight Ratio", value: "0.144 kW/kg" },
  { label: "Compression ratio", value: "12.17 :1" },
  { label: "Air filter", value: "Dry Paper filter" },
  { label: "Cooling system", value: "Liquid cooled" },
  { label: "Muffler", value: "Single pipe and single body design" },
  { label: "Clutch", value: "Wet multi plate - 7 plate design, RT slipper clutch" },
  { label: "Gear box", value: "6 speed" },
  { label: "Max speed", value: "164 km/h - Sport and Track mode" },
  { label: "0-60km/h (time in sec)", value: "2.82 s" },
  { label: "0-100km/h (time in sec)", value: "6.74 s" },
];

const chassisSpec = [
  { label: "Frame", value: "Trellis frame, split chassis" },
  { label: "Front Suspension", value: "Inverted cartridge telescopic Fork" },
  { label: "Rear Suspension", value: "Two arm Aluminium die-cast swingarm" },
  { label: "Battery", value: "12V, 8Ah" },
  { label: "Headlamp", value: "Bi-LED projector, 30W@13 V" },
  { label: "Tail Lamp", value: "LED 4 W" },
  { label: "Instrument cluster", value: "5 Inch TFT screen connected cluster" },
];

const brakesSpec = [
  { label: "Rim Size (Front)", value: "MT 3.0x17" },
  { label: "Rim Size (Rear)", value: "MT 4.0x17" },
  { label: "Tyre Size (Front)", value: "110/70-ZR17 M/C 54W Tubeless - Michelin ROAD5" },
  { label: "Tyre Size (Rear)", value: "150/60-ZR17 M/C 66W Tubeless - Michelin ROAD5" },
  { label: "Front", value: "Disc 300mm Petal type with ABS" },
  { label: "Rear", value: "Disc 240mm Petal type with ABS" },
  { label: "ABS", value: "With 3 ride modes" },
  { label: "Brake Fluid", value: "DOT 4" },
];

const dimentionSpec = [
  { label: "Height", value: "1135 mm" },
  { label: "Length", value: "2001 mm" },
  { label: "Width", value: "786 mm" },
  { label: "Wheelbase", value: "1365 mm" },
  { label: "Ground Clearance", value: "180 mm" },
  { label: "Saddle Height", value: "810 mm" },
  { label: "Kerb Weight", value: "174 kg" },
  { label: "Max payload", value: "130 kg" },
  { label: "Fuel Tank Capacity", value: "11 L" },
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
  "/img/PRODUCTS/MC/RR/Styling/gallery_one.webp",
  "/img/PRODUCTS/MC/RR/Styling/gallery_two.webp",
  "/img/PRODUCTS/MC/RR/Styling/gallery_three.webp",
  "/img/PRODUCTS/MC/RR/Styling/gallery_four.webp",
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
          <img src="/img/HERO/17.webp" alt="TVS Apache RTX hero" className="h-[calc(100vh-96px)] w-full object-cover" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                Apache RR 310
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Apache RR 310
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  The ultimate Apache sportbike built for high-speed track performance and everyday road confidence.
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">RR 310 details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Apache RR 310 stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/MC/RR/Styling/gallery_one.webp" alt="Styling 1" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RR/Styling/gallery_two.webp" alt="Styling 2" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RR/Styling/gallery_three.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RR/Styling/gallery_four.webp" alt="Styling 4" className="w-full h-56 object-cover rounded-md" />
              </div>

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/MC/RR/Features/impose_slider_race_computer_new.webp",
                      "/img/PRODUCTS/MC/RR/Features/impose_slider_development.webp",
                      "/img/PRODUCTS/MC/RR/Features/sura.webp",
                      "/img/PRODUCTS/MC/RR/Features/impose_slider_headlamps.webp",
                      "/img/PRODUCTS/MC/RR/Features/impose_tail_light.webp",
                      "/img/PRODUCTS/MC/RR/Features/urban-mode-day.webp",
                      "/img/PRODUCTS/MC/RR/Features/digi-docs-deskbg.webp",
                      "/img/PRODUCTS/MC/RR/Features/intelligent-cluster-deskbg.webp",
                      "/img/PRODUCTS/MC/RR/Features/Dedicated_Control_Cubes.webp",
                      "/img/PRODUCTS/MC/RR/Features/smart-connect.webp",
                      "/img/PRODUCTS/MC/RR/Features/gtt.webp",
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Apache RR 310 in motion</h2>
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
