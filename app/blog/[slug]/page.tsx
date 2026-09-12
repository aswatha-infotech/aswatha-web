import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { notFound } from "next/navigation";
import { posts } from "../data";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="bg-slate-100 pt-[88px]">
        <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-[#183883] hover:text-[#0f2a5a]">
            ← Back to blog
          </Link>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
            <img src={post.coverImage} alt={post.title} className="h-[280px] w-full object-cover sm:h-[420px]" />
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#DC4226]">
              <span>{post.category}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">{post.readTime}</span>
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">{post.title}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
