"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold text-white">Aswatha TVS</h4>
            <p className="mt-3 text-sm text-slate-400">Authorised Main Dealer of TVS Motor Company</p>
            <p className="mt-4 text-sm text-slate-400">1274 Trichy Road, Sungam, Coimbatore - 641 018</p>
            <p className="mt-1 text-sm text-slate-400">Phone: +91 82700 15000</p>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-white">Quick Links</h5>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="text-slate-400 hover:text-white" href="#">Home</a></li>
              <li><a className="text-slate-400 hover:text-white" href="#vehicle-listings">Vehicles</a></li>
              <li><a className="text-slate-400 hover:text-white" href="/offers">Offers</a></li>
              <li><a className="text-slate-400 hover:text-white" href="#test-ride-form">Book Test Ride</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-white">Opening Hours</h5>
            <p className="mt-4 text-sm text-slate-400">Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p className="text-sm text-slate-400">Sun: 10:00 AM - 8:00 PM</p>
            <div className="mt-6">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-[#183883] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0f2a5a]"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Aswatha TVS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
