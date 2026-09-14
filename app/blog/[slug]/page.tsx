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

  const currentIndex = posts.findIndex((item) => item.slug === slug);
  const nextPost = posts[(currentIndex + 1) % posts.length];

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
              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  const HeadingTag = (block.level === 3 ? "h3" : "h2") as "h2" | "h3";

                  return (
                    <HeadingTag
                      key={`${block.type}-${block.text}-${index}`}
                      className="mt-8 text-2xl font-bold tracking-tight text-slate-900"
                    >
                      {block.text}
                    </HeadingTag>
                  );
                }

                if (block.type === "list") {
                  const ListTag = block.ordered ? "ol" : "ul";

                  return (
                    <ListTag
                      key={`${block.type}-${index}`}
                      className={`space-y-2 pl-6 ${block.ordered ? "list-decimal" : "list-disc"} text-slate-700`}
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ListTag>
                  );
                }

                if (block.type === "paragraph") {
                  const phoneMatch = block.text.match(/(\+?\d[\d\s()-]{7,}\d)/);

                  if (phoneMatch) {
                    const phoneNumber = phoneMatch[0].replace(/\s+/g, "").replace(/[()\-]/g, "");
                    const beforeText = block.text.slice(0, block.text.indexOf(phoneMatch[0]));
                    const afterText = block.text.slice(block.text.indexOf(phoneMatch[0]) + phoneMatch[0].length);

                    return (
                      <p key={`${block.type}-${index}`} className="text-base leading-8 text-slate-700">
                        {beforeText}
                        <a href={`tel:${phoneNumber}`} className="font-semibold text-[#183883] underline underline-offset-2 hover:text-[#0f2a5a]">
                          {phoneMatch[0]}
                        </a>
                        {afterText}
                      </p>
                    );
                  }
                }

                return (
                  <p key={`${block.type}-${index}`} className="text-base leading-8 text-slate-700">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC4226]">Next blog</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">{nextPost.title}</h2>
              </div>

              <Link
                href={`/blog/${nextPost.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-[#183883] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102d69]"
              >
                Read next article →
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
