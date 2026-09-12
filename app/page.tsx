import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import VideoSection from "./components/VideoSection";
import VehicleSection from "./components/VehicleSection";
import SpecialOffers from "./components/SpecialOffers";
import SpecialFeatures from "./components/SpecialFeatures";
import FinanceOffers from "./components/FinanceOffers";
import Testimonials from "./components/Testimonials";
import TestRideForm from "./components/TestRideForm";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhyAswatha from "./components/WhyAswatha";
import { posts } from "./blog/data";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <VehicleSection />
      <SpecialOffers />
      <WhyAswatha />
      <VideoSection src="/video/HOME/TVS-Apache.mp4" />
      <SpecialFeatures />
      <FinanceOffers />
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DC4226]">Latest blog</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Rider insights and updates</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-100">
              View all posts
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article key={post.slug} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-md shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                  <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#DC4226]">
                    <span>{post.category}</span>
                    <span className="text-slate-400">{post.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-950">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center text-sm font-semibold text-[#183883] hover:text-[#0f2a5a]">
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TestRideForm />
      <Testimonials />
      <Location />
      <Footer />
    </>
  );
}
