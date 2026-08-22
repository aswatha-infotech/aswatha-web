import Link from "next/link";
import Navigation from "../components/Navigation";
import WhyAswatha from "../components/WhyAswatha";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-slate-950 pt-[88px]">
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,#244b85_0%,#10264d_42%,#081328_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff5a3d]">About Aswatha TVS</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">Your trusted partner for every ride.</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                We bring the complete TVS experience together, from choosing the right vehicle to enjoying dependable support long after delivery.
              </p>
              <Link href="/#vehicle-listings" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#DC4226] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c13b22]">
                Explore our vehicles
              </Link>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/15 bg-slate-900/60 shadow-2xl shadow-black/30">
              <img src="/img/HERO/4.webp" alt="TVS vehicle at Aswatha TVS" className="block h-auto w-full" />
            </div>
          </div>
        </section>
        <WhyAswatha />
      </main>
      <Footer />
    </>
  );
}
