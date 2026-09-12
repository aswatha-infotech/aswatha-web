import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { posts } from "./data";

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="bg-slate-100 pt-[88px]">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24 mt-[-20px]">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff8a63]">Aswatha blog</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Ride stories, buying tips, and useful updates.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Explore helpful guidance on choosing, maintaining, and enjoying your next TVS ride.
            </p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                    <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#DC4226]">
                      <span>{post.category}</span>
                      <span className="text-slate-400">{post.readTime}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-slate-950">{post.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between gap-4 text-xs text-slate-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center justify-center rounded-full bg-[#183883] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102d69]">
                      Read article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
