"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";

const slides = [
  {
    name: "Aswatha TVS",
    tagline: "TVS Dealer in Sungam, COimbatore",
    badge: "Racing DNA",
    range: "310cc",
    topSpeed: "160 km/h",
    image: "/img/HERO/0.webp",
  },
  {
    name: "Apache RR310",
    tagline: "A bold streetfighter crafted for riders who seek power, precision and presence.",
    badge: "Racing DNA",
    range: "310cc",
    topSpeed: "160 km/h",
    image: "/img/HERO/1.webp",
  },
  {
    name: "Jupiter",
    tagline: "Comfort-first mobility with smooth performance for everyday adventures.",
    badge: "Smart Commute",
    range: "110cc",
    topSpeed: "90 km/h",
    image: "/img/HERO/2.webp",
  },
  {
    name: "ntorq",
    tagline: "A sporty scooter with striking design and effortless urban agility.",
    badge: "Urban Style",
    range: "125cc",
    topSpeed: "100 km/h",
    image: "/img/HERO/3.webp",
  },
  {
    name: "apache",
    tagline: "A sporty scooter with striking design and effortless urban agility.",
    badge: "Urban Style",
    range: "125cc",
    topSpeed: "100 km/h",
    image: "/img/HERO/4.webp",
  },
  {
    name: "apache4v",
    tagline: "A sporty scooter with striking design and effortless urban agility.",
    badge: "Urban Style",
    range: "125cc",
    topSpeed: "100 km/h",
    image: "/img/HERO/5.webp",
  },
  {
    name: "RTX",
    tagline: "A sporty scooter with striking design and effortless urban agility.",
    badge: "Urban Style",
    range: "125cc",
    topSpeed: "100 km/h",
    image: "/img/HERO/6.webp",
  },
  {
    name: "sport",
    tagline: "A sporty scooter with striking design and effortless urban agility.",
    badge: "Urban Style",
    range: "125cc",
    topSpeed: "100 km/h",
    image: "/img/HERO/7.webp",
  },
  {
    name: "Raider",
    tagline: "A sporty scooter with striking design and effortless urban agility.",
    badge: "Urban Style",
    range: "125cc",
    topSpeed: "100 km/h",
    image: "/img/HERO/8.webp",
  },
  {
    name: "iqube",
    tagline: "A sporty scooter with striking design and effortless urban agility.",
    badge: "Urban Style",
    range: "125cc",
    topSpeed: "100 km/h",
    image: "/img/HERO/9.webp",
  },
  {
    name: "ronin",
    tagline: "A sporty scooter with striking design and effortless urban agility.",
    badge: "Urban Style",
    range: "125cc",
    topSpeed: "100 km/h",
    image: "/img/HERO/14.webp",
  },
  {
    name: "rtr",
    tagline: "A sporty scooter with striking design and effortless urban agility.",
    badge: "Urban Style",
    range: "125cc",
    topSpeed: "100 km/h",
    image: "/img/HERO/15.webp",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      <Navigation />
      <section className="relative mt-14 h-[70vh] overflow-hidden bg-white sm:mt-20 sm:h-[80vh] lg:mt-18 lg:h-[80vh]">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.name}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <img src={slide.image} alt={slide.name} className="w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-5 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#DC4226] w-10" : "bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
