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
      { name: "Fiery Red", value: "#a10309" },
    ],
  },
  {
    name: "Build to Order",
    options: [
      { name: "Arsenal Black", value: "#222" },
      { name: "Sepang Blue", value: "#1c2e70" },
      { name: "Fiery Red", value: "#a10309" },
      { name: "Fury Yellow", value: "#fae232" },
      { name: "Black Champagne Gold Livery", value: "#ab8070" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Sepang Blue": "/img/PRODUCTS/MC/RTR/sepang_blue.webp",
    "Arsenal Black": "/img/PRODUCTS/MC/RTR/Arsenal_black.avif",
    "Fiery Red": "/img/PRODUCTS/MC/RTR/Fiery_red.avif",
    "Fury Yellow": "/img/PRODUCTS/MC/RTR/fury_yellow.avif",
    "Bomber Grey": "/img/PRODUCTS/MC/RTR/grey.avif",
    "Black Champagne Gold Livery": "/img/PRODUCTS/MC/RTR/gold.avif",
};

const features = [
  {
    title: "Design Philosophy",
    description: "Fluid lines meet sharp, angular contours. Inspired by the cyborg aesthetic, its aggressive stance—marked by a raked tail and forward-biased mass—gives it a distinctly menacing presence.",
  },
  {
    title: "Knuckle Guards",
    description: "Form meets function. Designed to deflect the wind and turn up the style, these sculpted guards add muscle to the The ALL NEW TVS APACHE RTR 310's aggressive stance.",
  },
  {
    title: "Transparent Clutch Cover",
    description: "The Transparent Anti-fog Clutch Cover gives the #Freestyler an unmissable presence on the road, and you, ample street cred.",
  },
  {
    title: "Adaptive Bi-LED Cyborg Headlamp with sequential TSL",
    description: "Cyborg-inspired split headlamp with intelligent beam control adapts to speed and ambient light for optimal visibility. New 5-LED sequential TSL adds a bionic edge and sharper turn signal clarity — all wrapped in a premium look.",
  },
  {
    title: "Unique Reverse Inclined DOHC Engine",
    description: "At the heart of the Apache The ALL NEW TVS APACHE RTR 310 is a 312.2 cc engine with a compact layout for optimal mass centralization. Forged aluminium pistons — 5% lighter — contribute to a best-in-class power-to-weight ratio, with tuning that delivers higher peak torque across the rev range.",
  },
  {
    title: "Race Tuned Linear Stability Control - Cruise Control",
    description: "The Apache The ALL NEW TVS APACHE RTR 310's Cruise Control lets you settle into the ride. Maintain a steady speed without throttle or clutch input, so you can cover more miles with less effort.",
  },
  {
    title: "6-Speed Gearbox with Bidirectional Quickshifter",
    description: "Precision shifts and rapid launches are effortless, thanks to the bottom-mounted shift lever and negative back-rack angle machined in all gears lug to lug. Take the thrill of racing up a gear, reducing shift times to the millisecond.",
  },
  {
    title: "Race Tuned Slipper Clutch",
    description: "The slipper clutch on the Apache The ALL NEW TVS APACHE RTR 310 enables aggressive downshifts without rear wheel hop—letting you brake later and corner with precision. The assist function boosts torque-handling while reducing clutch effort for smoother control.",
  },
  {
    title: "Throttle-By-Wire",
    description: "Pinpoint precision in the grip of your palm. The ALL NEW TVS APACHE RTR 310 features an advanced intelligent throttle body with a turbulence system and a sharper throttle grip with reverse blip, delivering instant power with every twist.",
  },
  {
    title: "Engine Coolant Jacket Optimization",
    description: "The ALL NEW TVS APACHE RTR 310's cylinder head is engineered for best-in-class heat dissipation, keeping engine temperatures low. The result: greater performance, higher revs.",
  },
  {
    title: "GTT-Glide Through Technology",
    description: "The ALL NEW TVS APACHE RTR 310's Glide Through Technology gets you moving with just a slow release of the clutch — no throttle needed. It eliminates the need to coordinate clutch and throttle inputs, making low-speed riding smooth and stall-free.",
  },
  {
    title : "Liquid-Cooled Oil-Coolant Technology",
    description: "The ALL NEW TVS APACHE RTR 310 features a 23-row radiator for optimized cooling, keeping the high-revving engine at ideal temperatures to deliver peak performance.",
  },
  {
    title : "The Freestyler Frame",
    description: "The Hyper-Spec trellis frame with a lightweight aluminium sub-frame forms the core of the freestyler, giving the The ALL NEW TVS APACHE RTR 310 dynamic response at high speeds and agile handling.",
  },
  {
    title : "Race-tuned Linear Stability Control - Linear Traction Control",
    description: "A segment-first feature that controls the torque to ensure optimised delivery of power on to the road for maximum grip, preventing rear wheel spin during acceleration on slippery surfaces.",
  },
  {
    title : "Responsive KYB Suspension",
    description: "Tuned by experts at KYB, the monoshock with monotube floating piston technology delivers precise damping and smooth dynamic response — enabling best-in-class lateral acceleration and cornering performance.",
  },
  {
    title : "Sporty Steel Tapered Handlebars",
    description: "Engineered for performance-focused riding, the tapered handlebars offer precise control and enhanced rider feedback.",
  },
  {
    title : "Multi-Information Race Computer",
    description: "The digital command centre of the freestyler. The 5 Inch horizontal TFT race computer puts you in control—letting you adjust traction control, cruise control, headlamp brightness, and even manage music via Bluetooth.",
  },
  {
    title : "Ride Modes",
    description: "With 5 ride modes on offer, the The ALL NEW TVS APACHE RTR 310 enables you to adapt seamlessly and deliver uncompromised performance across a variety of conditions.",
  },
  {
    title : "TVS SmartXonnect",
    description: "Seek a deeper connection with your Freestyler: Once paired with your smartphone, the The ALL NEW TVS APACHE RTR 310 delivers advanced telemetry — including post-ride analytics like gear shift points, ride pattern analysis and more — transforming every ride into intelligent data.",
  },
];

const engineSpec = [
  { label: "Capacity", value: "312.12 cc" },
  { label: "Type", value: "Single Cylinder, 4 Stroke, Fuel Injected, Liquid Cooled, Spark Ignited Engine" },
  { label: "Max Power", value: "Sport, Track and SuperMoto mode- 35.6 PS @ 9700 rpm" },
  { label: "Max Torque", value: "Sport, Track and SuperMoto mode- 28.7 Nm @6650 rpm" },
  { label: "Bore x Stroke", value: "80 mm x 62.1 mm" },
  { label: "Fuel injection", value: "Closed loop EFI System" },
  { label: "Throttle control", value: "Electronic throttle control (ETC)" },
  { label: "Bore to stroke ratio", value: "1.29" },
  { label: "Starting", value: "Electric start" },
  { label: "Idle speed", value: "1600 ± 200rpm" },
  { label: "Ignition", value: "Dynamically controlled - high energy integrated ignition system" },
  { label: "Power to weight Ratio", value: "0.15 kW/kg" },
  { label: "Compression ratio", value: "12.17 ± 0.35:1" },
  { label: "Air filter", value: "Dry Paper filter" },
  { label: "Cooling system", value: "Liquid cooled" },
  { label: "Muffler", value: "Single pipe and single body design" },
  { label: "Clutch", value: "Wet multi plate - 7 plate design, RT slipper clutch" },
  { label: "Gear box", value: "6 speed" },
  { label: "Max speed", value: "150 km/h" },
  { label: "Acceleration 0-2sec (Speed in Km/h)", value: "45.6Km/h" },
  { label: "0-60km/h (time in sec)", value: "2.81 s" },
  { label: "0-100km/h (time in sec)", value: "7.19 s" },
];

const chassisSpec = [
  { label: "Frame", value: "Hybrid with Trellis and cast frames, split chassis" },
  { label: "Front Suspension", value: "USD fork 43 mm diameter" },
  { label: "Rear Suspension", value: "Solid Die cast Aluminium swing arm directly hinged monoshox, pre-load adjustable" },
  { label: "Battery", value: "12V, 8AH MF Lead Acid" },
  { label: "Headlamp", value: "12V, LED Head Lamp" },
  { label: "Tail Lamp", value: "LED 4W" },
  { label: "Instrument cluster", value: "5 inch TFT" },
];

const brakesSpec = [
  { label: "Rim Size (Front)", value: "MT 3.0x17" },
  { label: "Rim Size (Rear)", value: "MT 4.0x17" },
  { label: "Tyre Size (Front)", value: "110/70-R17 Tubeless" },
  { label: "Tyre Size (Rear)", value: "150/60-R17" },
  { label: "Front", value: "300mm Disc" },
  { label: "Rear", value: "240mm Disc" },
  { label: "ABS", value: "Dual Channel" },
  { label: "Brake Fluid", value: "DOT 4" },
];

const dimentionSpec = [
  { label: "Height", value: "1154 ± 10 mm" },
  { label: "Length", value: "1991 ± 20 mm" },
  { label: "Width", value: "831 ± 5 mm" },
  { label: "Wheelbase", value: "1358 ± 12 mm" },
  { label: "Ground Clearance", value: "180 ± 5 mm (Unladen)" },
  { label: "Saddle Height", value: "800 ± 10 mm" },
  { label: "Kerb Weight", value: "169 kg" },
  { label: "Max payload", value: "130 kg" },
  { label: "Fuel Tank Capacity", value: "11 ± 0.5 L" },
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
  "/img/PRODUCTS/MC/RTR/Styling/1037x573-Adaptive-Cyber-Headlamp.webp",
  "/img/PRODUCTS/MC/RTR/Styling/Streetfighter Styling_373x552 Knuckle Guards.webp",
  "/img/PRODUCTS/MC/RTR/Styling/Streetfighter_Styling_1037x573_design_philosphy.webp",
  "/img/PRODUCTS/MC/RTR/Styling/Streetfighter_Styling_1037x573_Transparent_clutch_cover.webp",
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
          <img src="/img/HERO/15.webp" alt="TVS Apache RTX hero" className="h-auto w-full object-contain" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                Apache RTR 310
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Apache RTR 310
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">RTR 310 details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Apache RTR 310 stand apart?</h2>
            </div>

            <div id="styling" className="scroll-mt-[120px]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Styling</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <img src="/img/PRODUCTS/MC/RTR/Styling/1037x573-Adaptive-Cyber-Headlamp.webp" alt="Styling 1" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RTR/Styling/Streetfighter_Styling_1037x573_design_philosphy.webp" alt="Styling 2" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RTR/Styling/Streetfighter Styling_373x552 Knuckle Guards.webp" alt="Styling 3" className="w-full h-56 object-cover rounded-md" />
                <img src="/img/PRODUCTS/MC/RTR/Styling/Streetfighter_Styling_1037x573_Transparent_clutch_cover.webp" alt="Styling 4" className="w-full h-56 object-cover rounded-md" />
              </div>

              <div id="features" className="scroll-mt-[120px] space-y-8 mb-30">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mt-15">Features</p>
                <div className="space-y-8">
                  {/* images mapped to features, alternating left/right */}
                  {features.map((feature, idx) => {
                    const images = [
                      "/img/PRODUCTS/MC/RTR/Features/1.webp",
                      "/img/PRODUCTS/MC/RTR/Features/2.webp",
                      "/img/PRODUCTS/MC/RTR/Features/3.webp",
                      "/img/PRODUCTS/MC/RTR/Features/4.webp",
                      "/img/PRODUCTS/MC/RTR/Features/5.webp",
                      "/img/PRODUCTS/MC/RTR/Features/6.webp",
                      "/img/PRODUCTS/MC/RTR/Features/7.webp",
                      "/img/PRODUCTS/MC/RTR/Features/8.webp",
                      "/img/PRODUCTS/MC/RTR/Features/9.webp",
                      "/img/PRODUCTS/MC/RTR/Features/10.png",
                      "/img/PRODUCTS/MC/RTR/Features/11.webp",
                      "/img/PRODUCTS/MC/RTR/Features/12.png",
                      "/img/PRODUCTS/MC/RTR/Features/13.webp",
                      "/img/PRODUCTS/MC/RTR/Features/14.webp",
                      "/img/PRODUCTS/MC/RTR/Features/15.webp",
                      "/img/PRODUCTS/MC/RTR/Features/16.webp",
                      "/img/PRODUCTS/MC/RTR/Features/17.webp",
                      "/img/PRODUCTS/MC/RTR/Features/18.webp",
                      "/img/PRODUCTS/MC/RTR/Features/19.png",
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Apache RTR 310 in motion</h2>
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
