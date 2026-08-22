"use client";

import Navigation from "../../components/Navigation";
import TestRideForm from "../../components/TestRideForm";
import Footer from "../../components/Footer";
import { useMemo, useState } from "react";

const colorGroups = [
  {
    name: "Base",
    options: [
      { name: "Gloss Black", value: "#030202" },
      { name: "Pearl White", value: "#919394" },
    ],
  },
];

const colorImageMap: Record<string, string> = {
    "Gloss Black": "/img/PRODUCTS/MC/APACHE/180-black.avif",
    "Pearl White": "/img/PRODUCTS/MC/APACHE/180-white.avif",
};

const features = [
  {
    title: "SmartXonnect",
    description: "The TVS SmartXonnect app is enabled with Bluetooth connectivity and Voice assist . The navigation system displays directions on the console and the system is pre-programmed with essential stops such as fuel stations, hospitals and restaurants. The fuel warning system, senses when your fuel is low and redirects you to the nearest fuel station. The system also provides specific riding telemetry that the rider can easily analyse. It also features call and SMS alert, so that you don’t miss a thing. While the crash alert feature notifies your selected contacts in the event of a crash.",
  },
  {
    title: "RTR OVER SQUARE ENGINE WITH RT - FI TECHNOLOGY",
    description: "The all-new TVS Apache RTR 180 is powered by the BS-VI Race Tuned Fuel Injection (RT-Fi) technology with an improved power to 17.03PS The intelligent system has optimized the engine, so that racers can experience the ultimate performance from the engine in any race condition. The race derived engine is developed with a short stroke set up for lightning fast acceleration. The engine delivers intense torque and the high revving nature at the top end translates to greater racing speeds.",
  },
  {
    title: "GLIDE THROUGH TECHNOLOGY",
    description: "This first-in-segment feature which allows to start moving the vehicle with the slow release of the clutch, with no throttle operation. The maximum speed with GTT:In 1st gear is up to 7 km/hIn 2nd Gear is up to 12 km/hIn 3rd Gear is up to 17 km/h",
  },
  {
    title: "SYNCHRONIZED STIFF CHASSIS",
    description: "The Synchro Stiff Chassis provides the perfect balance of stiffness for optimised straight-line performance, while delivering flex for aggressive cornering. This gives the racer the confidence to push the limits on the track.",
  },
  {
    title: "MIG SUSPENSION",
    description: "The rear monotube inverted gas filled 5 step adjustable shocks with a rectangular swingarm, enables the perfect synergy of cornering aggression and agility.",
  },
  {
    title: "RACE ERGONOMICS",
    description: "The racer is now in complete control, with split clip on handle bars, a brake pedal and gear lever. The ergonomics are designed to make the racer feel like one with the track machine.",
  },
  {
    title: "INTELLIGENT AERODYNAMICS",
    description: "Intelligent aerodynamics of the tank cowl aids performance and reduces engine heat by 10℃.",
  },
  {
    title: "Ride Modes",
    description: "The TVS Apache RTR 180 series features three unique ride modes that enable your race machine to adapt to any condition with the press of a button. Be it the Elements or variable conditions, your race machine's ABS and engine prime themselves to deliver optimum performance in every mode.i. URBAN MODE - The urban mode delivers smooth and controlled movement, enabling you to cut through the urban jungle with ease.ii. Rain Mode - Power through any storm with this mode, which ensures a sharp ABS response with a strong lever pulsation feel.iii. Sport Mode - This mode unleashes the full power of your race machine, to take on the track.",
  },
  {
    title: "RACE GRAPHICS",
    description: "Bold and unmistakable, the race-inspired graphics make a statement on the track.",
  },
  {
    title: "Digital Speedometer",
    description: "The console features a lap timer, top speed indicator and displays other essential information that a rider would look for. It is white backlit for visiblity in any condition and features a stylish racing stripe.",
  },
  {
    title: "HANDLEBAR END-WEIGHTS",
    description: "The newly designed forged handlebar end weights on RTR 180 gives better handling on road than before.",
  },
  {
    title : "LED TAIL LAMPS",
    description: "The LED tail lamp has an imposing design, engineered to intimidate as you take the lead on the race track.",
  },
  {
    title : "ALCANTARA RACING SEAT",
    description: "The meticulously crafted racing seat is designed to provide the ultimate comfort over long race distances.",
  },
  {
    title : "TANK SCOOPS",
    description: "In the heat of the race, the TVS Apache RTR is kept cool with the help of tank scoops. These are designed to channel cool air to the engine and circulate the warm air out",
  },
  {
    title : "MUSCLED ENGINE COWL",
    description: "The engine cowl is sculpted to be sharp, and angular to slice through the air while making a statement on the track",
  },
  {
    title : "MUSCLED TAIL COWL",
    description: "The sculpted line of the tail cowl compliment the imposing design of the TVS Apache RTR 180 . The design gives the tail a distinct and dynamic look.",
  },
  {
    title : "SINGLE CHANNEL SUPER-MOTO ABS",
    description: "The single channel Super Moto ABS offers precise control and sharp feedback. This enables razor sharp cornering.",
  },
  {
    title : "BEAST-INSPIRED LED HEADLAMPS",
    description: "The LED light guide in the headlamp panel coalesces with the pilot lamps and produces an intense, raw, animalistic gaze, being Apache's signature. This throws a far reaching beam on the road and makes for a very comfortable night-riding experience.",
  },
  {
    title : "REMORA TYRES",
    description: "Grip the track like never before, the new wider rear tyre which sticks to the asphalt with unyielding grip. The tyre offer superior acceleration and improved braking.",
  },
  {
    title : "ROTOPETAL DISC BRAKE",
    description: "Brake late into every corner with confidence. The unique Roto Petal design is as stunning as effective.",
  },
];

const engineSpec = [
  { label: "Displacement", value: "177.4 cm3" },
  { label: "Type", value: "SI, 4 stroke, Oil cooled, Fuel injected" },
  { label: "Max. Engine output (kW @ rpm)", value: "12.52 kW @ 9000 rpm (17.02 PS @9000 rpm)"},
  { label: "Max Power", value: "Sport : 12.52 kW @ 9000 rpm (17.02 PS @9000 rpm), Urban/ Rain : 10.7 kW @ 8200 rpm (14.54 PS @ 8200 rpm)" },
  { label: "Max Torque", value: "Sport : 15.5 Nm @ 7000 rpm, Urban/ Rain : 14.2 Nm @ 6000 rpm" },
  { label: "Fuel supply system", value: "Fuel Injection" },
  { label: "Number of Valves", value: "2 valves" },
  { label: "Muffler", value: "Conventional design" },
  { label: "Starting", value: "Electric start" },
  { label: "Power to Weight Ratio", value: "0.0894 kW/kg" },
  { label: "Clutch", value: "Wet multi plate clutch" },
  { label: "Cooling System", value: "Oil cooled" },
  { label: "Gear box", value: "5 speed gear box" },
  { label: "Max speed", value: "113 km/h" },
];

const chassisSpec = [
  { label: "Frame", value: "Double cradle Synchro Stiff" },
  { label: "Front Suspension", value: "Telescopic forks" },
  { label: "Rear Suspension", value: "Monotube Inverted Gas filled shox (MIG) with spring aid" },
  { label: "Battery", value: "12V, 6Ah MF" },
  { label: "Headlamp", value: "AHO LED Headlamp with all time ON LED position lamp" },
  { label: "Tail Lamp", value: "LED" },
];

const brakesSpec = [
  { label: "Tyre Size (Front)", value: "90/90-17 Tubeless" },
  { label: "Tyre Size (Rear)", value: "120/70-17 Tubeless" },
  { label: "Front", value: "270mm dia Petal Disc" },
  { label: "Rear", value: "200mm dia Petal Disc" },
  { label: "ABS", value: "Single Channel Super-Moto ABS" },
  { label: "Brake Fluid", value: "DOT 3 / DOT 4" },
];

const dimentionSpec = [
  { label: "Height", value: "1105 mm" },
  { label: "Length", value: "2085 mm" },
  { label: "Width", value: "730 mm" },
  { label: "Wheelbase", value: "1326 mm" },
  { label: "Ground Clearance", value: "180 mm" },
  { label: "Saddle Height", value: "790 mm" },
  { label: "Kerb Weight", value: "140 kg" },
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
  "/img/PRODUCTS/MC/APACHE/180/Gallery/1.webp",
  "/img/PRODUCTS/MC/APACHE/180/Gallery/2.webp",
  "/img/PRODUCTS/MC/APACHE/180/Gallery/1.webp",
  "/img/PRODUCTS/MC/APACHE/180/Gallery/2.webp",
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
          <img src="/img/HERO/4.webp" alt="TVS Apache RTX hero" className="h-auto w-full object-contain" />
        </section>

        <section className="relative -mt-22 mb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-white/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-[#F7F9FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#183883]">
                Apache RTR 180
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  TVS Apache RTR 180
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">RTR 180 details</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What makes Apache RTR 180 stand apart?</h2>
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
                      "/img/PRODUCTS/MC/APACHE/180/Features/1.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/2.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/3.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/4.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/5.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/6.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/7.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/8.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/9.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/10.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/11.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/12.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/13.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/14.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/15.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/16.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/17.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/18.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/19.webp",
                      "/img/PRODUCTS/MC/APACHE/180/Features/20.webp",
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
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Apache RTR 180 in motion</h2>
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
