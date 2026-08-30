"use client";

import { FormEvent, useState } from "react";

// Time slots from 10 AM to 5 PM
const TIME_SLOTS = [
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
];

const getSlotDisplay = (slot: string): string => {
  const [start, end] = slot.split("-");
  const startHour = parseInt(start.split(":")[0]);
  const endHour = parseInt(end.split(":")[0]);
  const startPeriod = startHour >= 12 ? "PM" : "AM";
  const endPeriod = endHour >= 12 ? "PM" : "AM";
  const displayStart = startHour > 12 ? startHour - 12 : startHour;
  const displayEnd = endHour > 12 ? endHour - 12 : endHour;
  return `${displayStart}:00 ${startPeriod} to ${displayEnd}:00 ${endPeriod}`;
};

export default function TestRideForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    model: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Validation functions
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ""));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateDate = (dateStr: string): boolean => {
    if (!dateStr) return false;
    const selectedDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  };

  const getAvailableSlots = (dateStr: string): string[] => {
    if (!dateStr) return TIME_SLOTS;
    
    const selectedDate = new Date(dateStr + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // If not today, all slots are available
    if (selectedDate.getTime() > today.getTime()) {
      return TIME_SLOTS;
    }
    
    // If it's today, filter out past slots
    if (selectedDate.getTime() === today.getTime()) {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();
      
      return TIME_SLOTS.filter(slot => {
        const [start] = slot.split("-");
        const [slotHour] = start.split(":").map(Number);
        // Show slot if it starts after current time
        return slotHour > currentHour || (slotHour === currentHour && 0 > currentMinutes);
      });
    }
    
    return [];
  };

  const validateTime = (dateStr: string, timeStr: string): boolean => {
    if (!dateStr || !timeStr) return false;
    const availableSlots = getAvailableSlots(dateStr);
    return availableSlots.includes(timeStr);
  };

  const handleChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    
    // Real-time validation
    let fieldError = "";
    if (field === "phone" && value && !validatePhone(value)) {
      fieldError = "Phone number must be 10 digits";
    }
    if (field === "email" && value && !validateEmail(value)) {
      fieldError = "Please enter a valid email address";
    }
    if (field === "preferredDate" && value && !validateDate(value)) {
      fieldError = "Please select a future date";
    }
    if (field === "preferredTime" && value && form.preferredDate && !validateTime(form.preferredDate, value)) {
      fieldError = "Please select a future time";
    }

    setErrors((current) => {
      const updated = { ...current };
      if (fieldError) {
        updated[field] = fieldError;
      } else {
        delete updated[field];
      }
      return updated;
    });
  };

  const isFormValid = (): boolean => {
    return (
      form.name.trim() !== "" &&
      form.phone.trim() !== "" &&
      form.email.trim() !== "" &&
      form.model !== "" &&
      form.preferredDate !== "" &&
      form.preferredTime !== "" &&
      validatePhone(form.phone) &&
      validateEmail(form.email) &&
      validateDate(form.preferredDate) &&
      validateTime(form.preferredDate, form.preferredTime) &&
      Object.keys(errors).length === 0
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validate all fields and show errors
    const newErrors: Record<string, string> = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(form.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!form.model) {
      newErrors.model = "Please select a model";
    }
    
    if (!form.preferredDate) {
      newErrors.preferredDate = "Please select a date";
    } else if (!validateDate(form.preferredDate)) {
      newErrors.preferredDate = "Please select a future date";
    }
    
    if (!form.preferredTime) {
      newErrors.preferredTime = "Please select a time";
    } else if (!validateTime(form.preferredDate, form.preferredTime)) {
      newErrors.preferredTime = "Please select a future time";
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      // Scroll to the top of the form to show errors
      const formElement = event.currentTarget;
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

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
      setErrors({});
      setSubmissionStatus("success");
      setTimeout(() => setSubmissionStatus("idle"), 5000);
    } catch {
      setSubmissionStatus("error");
      setTimeout(() => setSubmissionStatus("idle"), 5000);
    }
  };

  const today = new Date().toISOString().split("T")[0];

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

          {Object.keys(errors).length > 0 && (
            <div className="mb-6 rounded-2xl border border-red-300 bg-red-50/20 p-4">
              <p className="text-sm font-semibold text-red-300">Please fill in all required fields correctly to submit the form.</p>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sky-100">
              Full Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`mt-2 w-full rounded-3xl border px-4 py-3 text-slate-900 outline-none placeholder:text-slate-500 focus:bg-white/80 focus:border-sky-300 ${
                  errors.name ? "border-red-400 bg-red-50/50" : "border-white/20 bg-white/50"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
            </label>
            <label className="block text-sm font-medium text-sky-100">
              Phone Number
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                maxLength={10}
                className={`mt-2 w-full rounded-3xl border px-4 py-3 text-slate-900 outline-none placeholder:text-slate-500 focus:bg-white/80 focus:border-sky-300 ${
                  errors.phone ? "border-red-400 bg-red-50/50" : "border-white/20 bg-white/50"
                }`}
                placeholder="Enter 10-digit phone number"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
            </label>
            <label className="block text-sm font-medium text-sky-100">
              Email Address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`mt-2 w-full rounded-3xl border px-4 py-3 text-slate-900 outline-none placeholder:text-slate-500 focus:bg-white/80 focus:border-sky-300 ${
                  errors.email ? "border-red-400 bg-red-50/50" : "border-white/20 bg-white/50"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
            </label>
            <label className="block text-sm font-medium text-sky-100">
              Preferred TVS Model
              <select
                name="model"
                value={form.model}
                onChange={(e) => handleChange("model", e.target.value)}
                className={`mt-2 w-full rounded-3xl border px-4 py-3 text-slate-900 outline-none focus:bg-white/80 focus:border-sky-300 focus:ring-0 ${
                  errors.model ? "border-red-400 bg-red-50/50" : "border-white/20 bg-white/50"
                }`}
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
              {errors.model && <p className="mt-1 text-xs text-red-300">{errors.model}</p>}
            </label>
            <label className="block text-sm font-medium text-sky-100">
              Preferred Date
              <input
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={(e) => handleChange("preferredDate", e.target.value)}
                min={today}
                className={`mt-2 w-full rounded-3xl border px-4 py-3 text-slate-900 outline-none focus:bg-white/80 focus:border-sky-300 ${
                  errors.preferredDate ? "border-red-400 bg-red-50/50" : "border-white/20 bg-white/50"
                }`}
              />
              {errors.preferredDate && <p className="mt-1 text-xs text-red-300">{errors.preferredDate}</p>}
            </label>
            <label className="block text-sm font-medium text-sky-100">
              Preferred Time Slot
              <select
                name="preferredTime"
                value={form.preferredTime}
                onChange={(e) => handleChange("preferredTime", e.target.value)}
                className={`mt-2 w-full rounded-3xl border px-4 py-3 text-slate-900 outline-none focus:bg-white/80 focus:border-sky-300 focus:ring-0 ${
                  errors.preferredTime ? "border-red-400 bg-red-50/50" : "border-white/20 bg-white/50"
                }`}
              >
                <option value="" disabled className="text-slate-500">
                  {form.preferredDate ? "Select your preferred time slot" : "Select a date first"}
                </option>
                {form.preferredDate && getAvailableSlots(form.preferredDate).length > 0 ? (
                  getAvailableSlots(form.preferredDate).map((slot) => (
                    <option key={slot} value={slot}>
                      {getSlotDisplay(slot)}
                    </option>
                  ))
                ) : (
                  <option disabled className="text-slate-500">
                    {form.preferredDate ? "No available slots for this date" : ""}
                  </option>
                )}
              </select>
              {errors.preferredTime && <p className="mt-1 text-xs text-red-300">{errors.preferredTime}</p>}
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-sky-100">Need help choosing a model? Our experts are here to assist.</p>
            </div>
            <button
              type="submit"
              disabled={!isFormValid() || submissionStatus === "submitting"}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
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
