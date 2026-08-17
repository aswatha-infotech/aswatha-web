"use client";

import { ChevronLeftIcon, ChevronRightIcon, PlayCircleIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

const REVIEWS = [
  {
    name: "Anita Sharma",
    location: "Bengaluru",
    rating: 5,
    quote: "The team helped me choose the perfect bike and the test ride process was quick and seamless.",
  },
  {
    name: "Rohit Verma",
    location: "Chennai",
    rating: 5,
    quote: "Great after-sales support and honest financing advice. I felt confident from day one.",
  },
  {
    name: "Priya Menon",
    location: "Kochi",
    rating: 5,
    quote: "Loved the showroom experience and the customer care follow-up after booking my test ride.",
  },
  {
    name: "Karan Mehta",
    location: "Hyderabad",
    rating: 5,
    quote: "The showroom staff was friendly and the checkout experience was very smooth.",
  },
  {
    name: "Sneha Reddy",
    location: "Pune",
    rating: 5,
    quote: "Excellent guidance on financing options and a no-pressure test ride booking.",
  },
  {
    name: "Vikram Singh",
    location: "Ahmedabad",
    rating: 5,
    quote: "I loved the real customer stories and the vehicle demo helped me finalize my choice.",
  },
];

const VIDEO_TESTIMONIALS = [
  {
    title: "Apache RTR 310 Customer Review",
    src: "/video/HOME/TVS-Apache.mp4",
  },
  {
    title: "TVS Test Ride Experience",
    src: "/video/HOME/TVS-Apache.mp4",
  },
  {
    title: "Electric Scooter Journey",
    src: "/video/HOME/TVS-Apache.mp4",
  },
  {
    title: "Adventure Ride Feedback",
    src: "/video/HOME/TVS-Apache.mp4",
  },
  {
    title: "Urban Commuter Story",
    src: "/video/HOME/TVS-Apache.mp4",
  },
];

export default function Testimonials() {
  const reviewSliderRef = useRef<HTMLDivElement>(null);
  const videoSliderRef = useRef<HTMLDivElement>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const scrollSection = (ref: HTMLDivElement | null, direction: "left" | "right") => {
    if (!ref) return;
    const offset = direction === "left" ? -340 : 340;
    ref.scrollBy({ left: offset, behavior: "smooth" });
  };

  const openVideo = (index: number) => setActiveVideoIndex(index);
  const closeVideo = () => setActiveVideoIndex(null);

  const activeVideo = activeVideoIndex !== null ? VIDEO_TESTIMONIALS[activeVideoIndex] : null;

  return (
    <section id="testimonials" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">Testimonials</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Customer Reviews & Video Stories</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Hear from our riders and see real customer experiences with the latest TVS models.
          </p>
        </div>

        <div className="mb-10 rounded-[32px] p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Customer Reviews</p>
              <h4 className="mt-1 text-xl font-semibold text-slate-900">What our riders are saying</h4>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollSection(reviewSliderRef.current, "left")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
                aria-label="Scroll reviews left"
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollSection(reviewSliderRef.current, "right")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
                aria-label="Scroll reviews right"
              >
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={reviewSliderRef}
            className="flex gap-5 overflow-x-auto pb-3 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {REVIEWS.map((review) => (
              <div key={review.name} className="min-w-[320px] max-w-[340px] shrink-0 rounded-[28px] bg-slate-100 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.location}</p>
                  </div>
                </div>
                <div className="mb-4 flex items-center gap-1 text-amber-500">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <StarIcon key={index} className="h-4 w-4" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-600">“{review.quote}”</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Our Happy Customers</p>
              <h4 className="mt-1 text-xl font-semibold text-slate-900">Just Hear What Our Customers Say</h4>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollSection(videoSliderRef.current, "left")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
                aria-label="Scroll videos left"
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollSection(videoSliderRef.current, "right")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
                aria-label="Scroll videos right"
              >
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={videoSliderRef}
            className="flex gap-5 overflow-x-auto pb-3 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {VIDEO_TESTIMONIALS.map((video, index) => (
              <button
                key={video.title}
                type="button"
                onClick={() => openVideo(index)}
                className="group min-w-[280px] max-w-[320px] shrink-0 rounded-[28px] overflow-hidden bg-slate-100 text-left"
              >
                <div className="relative aspect-[9/16] bg-slate-900">
                  <video src={video.src} muted className="h-full w-full object-cover" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 transition group-hover:bg-slate-950/30">
                    <PlayCircleIcon className="h-14 w-14 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="text-base font-semibold text-slate-900">{video.title}</h5>
                  <p className="mt-2 text-sm text-slate-500">Short testimonial reel from a satisfied TVS rider.</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[32px] bg-slate-900 shadow-2xl">
            <button
              type="button"
              onClick={closeVideo}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-200 shadow-sm transition hover:bg-slate-700"
              aria-label="Close video"
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <video
              src={activeVideo.src}
              controls
              autoPlay
              className="h-[60vh] w-full object-cover sm:h-[70vh]"
            />
            <div className="p-5 text-white">
              <h5 className="text-xl font-semibold">{activeVideo.title}</h5>
              {/* <p className="mt-2 text-sm text-slate-300">Only one testimonial plays at a time in the popup.</p> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
