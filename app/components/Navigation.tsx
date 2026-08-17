"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#offers", label: "Offers" },
  { href: "#accessories", label: "Accessories" },
  { href: "#events", label: "Events" },
  { href: "#aboutus", label: "Aboutus" },
  { href: "#contactus", label: "Contactus" },
];

const productCategories = ["Motorcycles", "Scooters", "Electric", "Mopeds"];

const productMenuItems = [
  {
    name: "Apache RTX",
    category: "Motorcycles",
    image: "/img/PRODUCTS/MC/RTX/Apache-RTX.webp",
    href: "/tvs-apache/apache-rtx",
  },
  { name: "Apache RR 310", category: "Motorcycles", image: "/img/PRODUCTS/MC/RR/RR-310.webp", href: "/tvs-apache/rr-310" },
  { name: "Apache RTR 310", category: "Motorcycles", image: "/img/PRODUCTS/MC/RTR/RTR-310.webp", href: "/tvs-apache/rtr-310" },
  { name: "TVS Ronin", category: "Motorcycles", image: "/img/PRODUCTS/MC/RONIN/TVS-Ronin.webp", href: "/tvs-ronin" },
  { name: "Apache RTR 200 4V", category: "Motorcycles", image: "/img/PRODUCTS/MC/APACHE/Apache-RTR-200.webp", href: "/tvs-apache/rtr-200-4v" },
  { name: "Apache RTR 180", category: "Motorcycles", image: "/img/PRODUCTS/MC/APACHE/Apache-RTR-180.webp", href: "/tvs-apache/rtr-180" },
  { name: "Apache RTR 160 4V", category: "Motorcycles", image: "/img/PRODUCTS/MC/APACHE/Apache-RTR-160-4V.webp", href: "/tvs-apache/rtr-160-4v" },
  { name: "Apache RTR 160", category: "Motorcycles", image: "/img/PRODUCTS/MC/APACHE/Apache-RTR-160-2V.webp", href: "/tvs-apache/rtr-160" },
  { name: "TVS Raider", category: "Motorcycles", image: "/img/PRODUCTS/MC/RAIDER/TVS-Raider.webp", href: "/tvs-raider" },
  { name: "TVS Radeon", category: "Motorcycles", image: "/img/PRODUCTS/MC/RADEON/TVS-Radeon.webp", href: "/tvs-radeon" },
  { name: "TVS Star City+", category: "Motorcycles", image: "/img/PRODUCTS/MC/STAR/TVS-STAR-City.webp", href: "/tvs-star-city-plus" },
  { name: "TVS Sport", category: "Motorcycles", image: "/img/PRODUCTS/MC/SPORT/TVS-sport.webp", href: "/tvs-sport" },
  { name: "TVS Jupiter", category: "Scooters", image: "/img/PRODUCTS/SCOOTER/JUPITER/jupiter.webp", href: "/tvs-jupiter" },
  { name: "TVS Jupiter 125", category: "Scooters", image: "/img/PRODUCTS/SCOOTER/JUPITER125/jupiter-125.webp", href: "/tvs-jupiter-125" },
  { name: "TVS NTorq 125", category: "Scooters", image: "/img/PRODUCTS/SCOOTER/NTORQ125/Ntorq.webp", href: "/ntorq-125" },
  { name: "TVS NTorq 150", category: "Scooters", image: "/img/PRODUCTS/SCOOTER/NTORQ150/Ntorq-150.webp", href: "#vehicles" },
  { name: "TVS Zest 110", category: "Scooters", image: "/img/PRODUCTS/SCOOTER/ZEST/zest.webp", href: "#vehicles" },
  { name: "iQube", category: "Electric", image: "/img/PRODUCTS/EV/IQUBE/Tvs-iqube.webp", href: "#vehicles" },
  { name: "Orbiter", category: "Electric", image: "/img/PRODUCTS/EV/ORBITER/TVS-Orbiter.webp", href: "#vehicles" },
  { name: "TVS XL", category: "Mopeds", image: "/img/PRODUCTS/MOPED/XL/TVS-xl-100.webp", href: "#vehicles" },
];

export default function Navigation() {
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(productCategories[0]);
  const closeTimeoutRef = useRef<number | null>(null);

  const visibleProducts = productMenuItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const openProductsMenu = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setProductsMenuOpen(true);
  };

  const scheduleCloseProductsMenu = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setProductsMenuOpen(false);
      closeTimeoutRef.current = null;
    }, 150);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-3">
          <img src="/img/LOGO/aswatha-logo.png" alt="Aswatha TVS Logo" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="#home" className="transition hover:text-slate-950">
            Home
          </Link>

          <div onMouseEnter={openProductsMenu} onMouseLeave={scheduleCloseProductsMenu}>
            <button type="button" className="flex items-center gap-1 text-slate-700 transition hover:text-slate-950" onClick={openProductsMenu}>
              Products <span aria-hidden="true">▾</span>
            </button>

            {productsMenuOpen && (
              <div
                className="absolute left-1/2 top-full z-50 mt-3 w-[80vw] max-w-[1200px] -translate-x-1/2 rounded-[32px] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/40"
                onMouseEnter={openProductsMenu}
                onMouseLeave={scheduleCloseProductsMenu}
              >
                <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                  <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">Products</p>
                    <div className="space-y-2">
                      {productCategories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setActiveCategory(category)}
                          className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                            activeCategory === category
                              ? "bg-white text-slate-900 shadow-sm"
                              : "text-slate-600 hover:bg-white hover:text-slate-900"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                    <Link href="#vehicles" className="inline-flex w-full items-center justify-center rounded-full bg-[#183883] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#142f68]">
                      Explore All Vehicles
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {visibleProducts.map((item) => (
                      <Link key={item.name} href={item.href} className="rounded-[24px] border border-slate-200 bg-white p-3 text-left transition hover:border-[#DC4226] hover:shadow-lg">
                        <div className="mb-2 h-25 overflow-hidden rounded-2xl bg-slate-100">
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        </div>
                        <p className="text-sm font-semibold text-slate-900 text-center">{item.name}</p>
                        {/* <p className="mt-1 text-xs text-slate-500">{item.category}</p> */}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#book-ride" className="rounded-full bg-[#183883] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#142f68]">
          Book Test Ride Now
        </Link>
      </div>
    </header>
  );
}
