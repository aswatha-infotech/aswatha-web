"use client";

import { FormEvent, useState } from "react";

export default function TestRideForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    model: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/infotech@aswathatvs.com", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setForm({ name: "", phone: "", email: "", model: "", preferredDate: "", preferredTime: "" });
      setSubmissionStatus("success");
    } catch {
      setSubmissionStatus("error");
    }
  };

  return (
    <section id="test-ride-form" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">Test ride form</p>
          <h3 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Book Your Test Ride Today</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Share your details and preferred schedule, and our team will get in touch to confirm your TVS test ride.
          </p>
        </div>

        <form action="https://formsubmit.co/ajax/infotech@aswathatvs.com" method="POST" onSubmit={handleSubmit} className="rounded-[32px] bg-[#183883] p-6 shadow-xl shadow-sky-900/20 ring-1 ring-sky-300/30 backdrop-blur-sm sm:p-10">
          <input type="hidden" name="_subject" value="New Test Ride Request - Aswatha TVS" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sky-100">
              Full Name
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="mt-2 w-full rounded-3xl border border-white/20 bg-white/50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-500 focus:border-sky-300 focus:bg-white/80"
                placeholder="Enter your name"
              />
            </label>
            <label className="block text-sm font-medium text-sky-100">
              Phone Number
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="mt-2 w-full rounded-3xl border border-white/20 bg-white/50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-500 focus:border-sky-300 focus:bg-white/80"
                placeholder="Enter your phone"
              />
            </label>
            <label className="block text-sm font-medium text-sky-100">
              Email Address
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="mt-2 w-full rounded-3xl border border-white/20 bg-white/50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-500 focus:border-sky-300 focus:bg-white/80"
                placeholder="Enter your email"
              />
            </label>
            <label className="block text-sm font-medium text-sky-100">
              Preferred TVS Model
              <select
                name="model"
                required
                value={form.model}
                onChange={(e) => handleChange("model", e.target.value)}
                className="mt-2 w-full rounded-3xl border border-white/20 bg-white/50 px-4 py-3 text-slate-900 outline-none focus:border-sky-300 focus:bg-white/80 focus:ring-0"
              >
                <option value="" disabled className="text-slate-500">
                  Select your preferred model
                </option>
                <optgroup label="Moped">
                  <option value="TVS XL">TVS XL</option>
                </optgroup>
                <optgroup label="Scooter">
                  <option value="TVS Zest 110">TVS Zest 110</option>
                  <option value="TVS Jupiter">TVS Jupiter</option>
                  <option value="TVS Jupiter 125">TVS Jupiter 125</option>
                  <option value="TVS NTorq 125">TVS NTorq 125</option>
                  <option value="TVS NTorq 150">TVS NTorq 150</option>
                </optgroup>
                <optgroup label="Electric">
                  <option value="IQube">IQube</option>
                  <option value="Orbitor">Orbitor</option>
                </optgroup>
                <optgroup label="Motorcycle">
                  <option value="TVS Sport">TVS Sport</option>
                  <option value="TVS Star City Plus">TVS Star City Plus</option>
                  <option value="TVS Radion">TVS Radion</option>
                  <option value="TVS Raider">TVS Raider</option>
                  <option value="TVS Ronin">TVS Ronin</option>
                  <option value="TVS Apache 160 2v">TVS Apache 160 2v</option>
                  <option value="TVS Apache 160 4v">TVS Apache 160 4v</option>
                  <option value="TVS Apache 180">TVS Apache 180</option>
                  <option value="TVS Apache 200 4v">TVS Apache 200 4v</option>
                  <option value="TVS RTX">TVS RTX</option>
                  <option value="TVS RR 310">TVS RR 310</option>
                  <option value="TVS RTR 310">TVS RTR 310</option>
                </optgroup>
              </select>
            </label>
            <label className="block text-sm font-medium text-sky-100">
              Preferred Date
              <input
                type="date"
                name="preferredDate"
                required
                value={form.preferredDate}
                onChange={(e) => handleChange("preferredDate", e.target.value)}
                className="mt-2 w-full rounded-3xl border border-white/20 bg-white/50 px-4 py-3 text-slate-900 outline-none focus:border-sky-300 focus:bg-white/80"
              />
            </label>
            <label className="block text-sm font-medium text-sky-100">
              Preferred Time
              <input
                type="time"
                name="preferredTime"
                required
                value={form.preferredTime}
                onChange={(e) => handleChange("preferredTime", e.target.value)}
                className="mt-2 w-full rounded-3xl border border-white/20 bg-white/50 px-4 py-3 text-slate-900 outline-none focus:border-sky-300 focus:bg-white/80"
              />
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-sky-100">Need help choosing a model? Our experts are here to assist.</p>
            </div>
            <button type="submit" disabled={submissionStatus === "submitting"} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60">
              {submissionStatus === "submitting" ? "Sending..." : "Submit Request"}
            </button>
          </div>
        </form>

        {submissionStatus === "success" && (
          <p role="status" className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center text-sm font-medium text-emerald-800">
            Thank you. Your test ride request has been sent successfully.
          </p>
        )}
        {submissionStatus === "error" && (
          <p role="alert" className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-center text-sm font-medium text-red-800">
            We couldn&apos;t send your request. Please try again or call our showroom.
          </p>
        )}
      </div>
    </section>
  );
}
