"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "/offers", label: "Offers" },
  { href: "/events", label: "Events" },
  { href: "/aboutus", label: "Aboutus" },
  { href: "/contactus", label: "Contactus" },
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
  { name: "TVS Star City+", category: "Motorcycles", image: "/img/PRODUCTS/MC/STAR/TVS-STAR-CIty.webp", href: "/tvs-star-city-plus" },
  { name: "TVS Sport", category: "Motorcycles", image: "/img/PRODUCTS/MC/SPORT/TVS-Sport.webp", href: "/tvs-sport" },
  { name: "TVS Jupiter", category: "Scooters", image: "/img/PRODUCTS/SCOOTER/JUPITER/jupiter.webp", href: "/tvs-jupiter" },
  { name: "TVS Jupiter 125", category: "Scooters", image: "/img/PRODUCTS/SCOOTER/JUPITER125/jupiter-125.webp", href: "/tvs-jupiter-125" },
  { name: "TVS NTorq 125", category: "Scooters", image: "/img/PRODUCTS/SCOOTER/NTORQ125/Ntorq.webp", href: "/ntorq-125" },
  { name: "TVS NTorq 150", category: "Scooters", image: "/img/PRODUCTS/SCOOTER/NTORQ150/Ntorq-150.webp", href: "/ntorq-150" },
  { name: "TVS Zest 110", category: "Scooters", image: "/img/PRODUCTS/SCOOTER/ZEST/zest.webp", href: "#vehicles" },
  { name: "iQube", category: "Electric", image: "/img/PRODUCTS/EV/IQUBE/Tvs-iqube.webp", href: "#vehicles" },
  { name: "Orbiter", category: "Electric", image: "/img/PRODUCTS/EV/ORBITER/TVS-Orbiter.webp", href: "#vehicles" },
  { name: "TVS XL", category: "Mopeds", image: "/img/PRODUCTS/MOPED/XL/TVS-xl-100.webp", href: "#vehicles" },
];

export default function Navigation() {
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeMobileMenu}>
          <img src="/img/LOGO/aswatha-logo.png" alt="Aswatha TVS Logo" className="h-9 w-auto max-w-[180px] object-contain sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/" className="transition hover:text-slate-950">
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

        <Link href="#book-ride" className="hidden rounded-full bg-[#183883] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#142f68] md:inline-flex">
          Book Test Ride Now
        </Link>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:border-slate-400 md:hidden"
        >
          <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-6 pt-3 shadow-xl md:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 text-base font-medium text-slate-800" aria-label="Mobile navigation">
            <Link href="/" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 hover:bg-slate-50">
              Home
            </Link>
            <button
              type="button"
              aria-expanded={mobileProductsOpen}
              onClick={() => setMobileProductsOpen((current) => !current)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-slate-50"
            >
              Products <span aria-hidden="true">{mobileProductsOpen ? "−" : "+"}</span>
            </button>

            {mobileProductsOpen && (
              <div className="space-y-3 rounded-2xl bg-slate-50 p-3">
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {productCategories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold ${
                        activeCategory === category ? "bg-[#183883] text-white" : "bg-white text-slate-600"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {visibleProducts.map((item) => (
                    <Link key={item.name} href={item.href} onClick={closeMobileMenu} className="rounded-xl bg-white p-2 text-center text-xs font-semibold text-slate-800">
                      <img src={item.image} alt={item.name} className="mb-2 h-20 w-full rounded-lg object-contain" />
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link href="#vehicles" onClick={closeMobileMenu} className="block rounded-full bg-[#183883] px-4 py-3 text-center text-sm font-semibold text-white">
                  Explore All Vehicles
                </Link>
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 hover:bg-slate-50">
                {link.label}
              </Link>
            ))}
            <Link href="#book-ride" onClick={closeMobileMenu} className="mt-3 block rounded-full bg-[#183883] px-4 py-3 text-center text-sm font-semibold text-white">
              Book Test Ride Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
