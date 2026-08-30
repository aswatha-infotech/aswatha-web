import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TestRideForm from "../components/TestRideForm";

const offerImage = "/img/OFFERS/ASWATHA%20COMING%20SOON%20INSTA.png";
const offerPreviewImage = "/img/OFFERS/gold_coin_offer.webp";

export default function OffersPage() {
  return (
    <>
      <Navigation />
      <main className="bg-slate-950 pt-[88px]">
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,#244b85_0%,#10264d_42%,#081328_100%)] px-4 py-14 sm:px-6 lg:px-8 lg:py-18 mt-[-20px]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff5a3d]">Aswatha TVS offers</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">Make your next ride more rewarding.</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Explore the latest pre-booking opportunity from Aswatha TVS and be among the first to enjoy our exclusive customer benefits.
              </p>
            </div>

            {/* <div className="overflow-hidden rounded-[28px] border border-white/15 bg-slate-900/60 shadow-2xl shadow-black/30">
              <img src={offerImage} alt="Aswatha TVS gold coin pre-booking offer" className="block h-auto w-full" />
            </div> */}
          </div>
        </section>

        <section className="bg-slate-100 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-300/30">
              <img src={offerPreviewImage} alt="Gold coin offer artwork from Aswatha TVS" className="block h-auto w-full" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DC4226]">Limited availability</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Pre-book now and get a gold coin.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                This exclusive offer is available for a limited number of pre-booking customers. Speak with our team to confirm eligibility, availability, and offer terms.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#test-ride-form" className="inline-flex items-center justify-center rounded-full bg-[#DC4226] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c13b22]">
                  Book Test Ride
                </a>
                {/* <Link href="/" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500">
                  Explore vehicles
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <TestRideForm />
      <Footer />
    </>
  );
}
