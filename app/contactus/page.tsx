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

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff5a3d]">Careers</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Join the Aswatha TVS team</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                We are looking for motivated individuals who are passionate about customer service, sales, and after-sales excellence.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Sales Manager",
                "Sales Executive",
                "Receptionist",
                "Service Manager",
                "Service Advisor",
                "Accounts Manager",
                "Accounts Executive",
                "Back Office Executive",
                "Cashier",
                "Technician",
              ].map((position) => (
                <div
                  key={position}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition duration-200 hover:border-[#ff5a3d]/40 hover:bg-[#fff7f5]"
                >
                  <span className="font-medium text-slate-800">{position}</span>
                  <span className="rounded-full bg-[#ff5a3d]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ff5a3d]">
                    Open
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb09a]">Apply Now</p>
              <div className="mt-4 flex flex-col gap-3 text-sm sm:text-base md:flex-row md:items-center md:justify-between">
                <a href="mailto:hr@aswathatvs.com" className="font-medium text-white transition hover:text-[#ffb09a]">
                  hr@aswathatvs.com
                </a>
                <a href="tel:+918124411200" className="font-medium text-white transition hover:text-[#ffb09a]">
                  8124411200
                </a>
              </div>
            </div>
          </div>
        </section>

        <TestRideForm />
        <Location />
      </main>
      <Footer />
    </>
  );
}
