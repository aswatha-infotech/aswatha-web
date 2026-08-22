import Navigation from "../components/Navigation";
import Location from "../components/Location";
import TestRideForm from "../components/TestRideForm";
import Footer from "../components/Footer";

export default function ContactUsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-slate-50 pt-[88px]">
        <section className="bg-[radial-gradient(circle_at_top,#244b85_0%,#10264d_42%,#081328_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff5a3d]">Contact Aswatha TVS</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">Let&apos;s get you moving.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Visit our showroom, call our team, or send a test ride request. We&apos;ll help you find the TVS that fits your journey.
            </p>
          </div>
        </section>
        <TestRideForm />
        <Location />
      </main>
      <Footer />
    </>
  );
}
