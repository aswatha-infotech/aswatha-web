"use client";

export default function Location() {
  return (
    <section id="location" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">Location</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Visit Our Showroom</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Find us at the showroom for a personalized test ride and assistance.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 items-start">
          <div className="w-full overflow-hidden rounded-[20px] shadow-sm">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                title="Aswatha Showroom Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3419999999997!2d77.59199999999999!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQ2LjAiTiA3N8KwMzUnMDguMCJF!5e0!3m2!1sen!2sin!4v0000000000000"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="rounded-[16px] bg-slate-50 p-6">
              <h4 className="text-lg font-semibold text-slate-900">Aswatha TVS</h4>
              <p className="mt-2 text-sm text-slate-600">1273 Trichy Road, Nadar Colony, Sungam, Coimbatore - 641018</p>
              <p className="mt-2 text-sm text-slate-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p className="mt-1 text-sm text-slate-600">Sun: 10:00 AM - 8:00 PM</p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[#183883] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0f2a5a]"
                >
                  Get directions
                </a>
                <a
                  href="tel:+911234567890"
                  className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  Call showroom
                </a>
              </div>
            </div>

            <div className="text-sm text-slate-500">
              <p>Parking available on-site. Wheelchair accessible entrance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
