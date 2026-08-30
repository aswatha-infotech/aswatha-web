import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TestRideForm from "../components/TestRideForm";

const events = [
  {
    date: "Every weekend",
    title: "Weekend Test Ride Days",
    description: "Take your favourite TVS motorcycle or scooter out for a guided test ride with our product specialists.",
    image: "/img/HERO/0.webp",
    alt: "TVS vehicle featured by Aswatha TVS",
  },
  {
    date: "By appointment",
    title: "Personalised Vehicle Consultations",
    description: "Compare models, colours, features, and finance options in a one-to-one session at our showroom.",
    image: "/img/HERO/1.webp",
    alt: "TVS vehicle showroom feature",
  },
  {
    date: "Coming soon",
    title: "Aswatha Community Rides",
    description: "Join fellow TVS riders for memorable routes, practical riding conversations, and community meetups.",
    image: "/img/HERO/2.webp",
    alt: "TVS vehicle ready for a community ride",
  },
];

export default function EventsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-slate-950 pt-[88px]">
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,#244b85_0%,#10264d_42%,#081328_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24  mt-[-20px]">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff5a3d]">Aswatha TVS events</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">More reasons to ride together.</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Discover test ride days, showroom experiences, and rider gatherings happening at Aswatha TVS.
              </p>
              <Link href="#test-ride-form" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#DC4226] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c13b22]">
                Book Test Ride
              </Link>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/15 bg-slate-900/60 shadow-2xl shadow-black/30">
              <img src="/img/HERO/3.webp" alt="TVS vehicle at Aswatha TVS" className="block h-auto w-full" />
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DC4226]">What&apos;s happening</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Find your next Aswatha moment.</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {events.map((event) => (
                <article key={event.title} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-lg shadow-slate-300/25">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                    <img src={event.image} alt={event.alt} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">{event.date}</p>
                    <h3 className="mt-3 text-xl font-bold text-slate-950">{event.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{event.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <TestRideForm />
      <Footer />
    </>
  );
}
