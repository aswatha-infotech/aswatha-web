"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { wishes } from "../diwali-wishes/data";

type SharedWish = {
  from: string;
  to: string;
  wishIndex: number;
};

export default function DiwaliWishExperience() {
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [selectedWish, setSelectedWish] = useState(0);
  const [sharedWish, setSharedWish] = useState<SharedWish | null>(null);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const from = params.get("from")?.trim();
      const to = params.get("to")?.trim();
      const wishIndex = Number(params.get("wish"));

      if (from && to && Number.isInteger(wishIndex) && wishes[wishIndex]) {
        setSharedWish({ from, to, wishIndex });
      }
      setPageReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const from = senderName.trim();
    const to = recipientName.trim();
    if (!from || !to) return;

    const url = new URL(window.location.href);
    url.search = new URLSearchParams({ from, to, wish: String(selectedWish) }).toString();
    url.hash = "";
    setGeneratedUrl(url.toString());
    setCopyStatus("");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopyStatus("Link copied — send it to someone special!");
    } catch {
      setCopyStatus("Copy the link from the box above to share your wish.");
    }
  };

  const createAnotherWish = () => {
    setSharedWish(null);
    setGeneratedUrl("");
    setSenderName("");
    setRecipientName("");
    setSelectedWish(0);
    window.history.replaceState({}, "", window.location.pathname);
  };

  if (!pageReady) {
    return <section className="diwali-scene min-h-[calc(100vh-88px)]" aria-label="Loading Diwali greeting" />;
  }

  return (
    <section className="diwali-scene relative isolate overflow-hidden px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20 mt-[-15px]">
      <div className="diwali-stars pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="diwali-glow diwali-glow-left pointer-events-none absolute" aria-hidden="true" />
      <div className="diwali-glow diwali-glow-right pointer-events-none absolute" aria-hidden="true" />
      <div className="diwali-marigold diwali-marigold-left pointer-events-none absolute" aria-hidden="true">✿</div>
      <div className="diwali-marigold diwali-marigold-right pointer-events-none absolute" aria-hidden="true">✿</div>
      <div className="diwali-spark diwali-spark-one pointer-events-none absolute" aria-hidden="true">✦</div>
      <div className="diwali-spark diwali-spark-two pointer-events-none absolute" aria-hidden="true">✧</div>
      <div className="diwali-spark diwali-spark-three pointer-events-none absolute" aria-hidden="true">✦</div>
      <div className="diwali-firework diwali-firework-one pointer-events-none absolute" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => <span key={index} />)}
      </div>
      <div className="diwali-firework diwali-firework-two pointer-events-none absolute" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => <span key={index} />)}
      </div>
      <div className="diwali-firework diwali-firework-three pointer-events-none absolute" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => <span key={index} />)}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200 backdrop-blur-sm">
            <span aria-hidden="true">✦</span> A little light to share <span aria-hidden="true">✦</span>
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-amber-100 sm:text-6xl lg:text-7xl">
            {sharedWish ? "A Diwali wish for you" : "Share the light this Diwali"}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-amber-50/75 sm:text-lg">
            {sharedWish
              ? "A little festive love has travelled your way. May your home glow with joy and happiness."
              : "Choose a heartfelt message, add your names, and send a beautiful festive greeting to someone special."}
          </p>
          <div className="mt-8 flex justify-center" aria-hidden="true">
            <div className="diwali-diya"><span className="diwali-flame" /><span className="diwali-diya-bowl" /><span className="diwali-diya-base" /></div>
          </div>
        </div>

        {sharedWish ? (
          <div className="diwali-card diwali-reveal mx-auto max-w-3xl rounded-[32px] border border-amber-200/30 bg-[#fff9e9] px-6 py-10 text-center text-[#4c2146] shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-12 sm:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c27b19]">A message from {sharedWish.from}</p>
            <div className="mx-auto my-6 h-px max-w-xs bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
            <p className="font-serif text-2xl font-semibold leading-relaxed sm:text-4xl">Dear {sharedWish.to},</p>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#65465d] sm:text-xl sm:leading-9">
              {wishes[sharedWish.wishIndex].message}
            </p>
            <p className="mt-8 font-serif text-2xl font-semibold text-[#9b3b37] sm:text-3xl">With warm wishes, {sharedWish.from} <span aria-hidden="true">💛</span></p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={createAnotherWish} className="rounded-full bg-[#862b54] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#862b54]/20 transition hover:-translate-y-0.5 hover:bg-[#6e2045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#862b54]">
                Send a wish to someone else
              </button>
              <Link href="/" className="rounded-full border border-[#862b54]/20 px-7 py-3.5 text-sm font-bold text-[#862b54] transition hover:bg-[#862b54]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#862b54]">
                Visit Aswatha TVS
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <form onSubmit={handleSubmit} className="rounded-[30px] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
              <div className="mb-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Make it personal</p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">Create your greeting</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-amber-50/90">
                  Your name
                  <input required maxLength={50} autoComplete="name" value={senderName} onChange={(event) => setSenderName(event.target.value)} placeholder="e.g. Ananya" className="mt-2 w-full rounded-2xl border border-white/15 bg-[#1a1230]/70 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20" />
                </label>
                <label className="block text-sm font-medium text-amber-50/90">
                  Who are you wishing?
                  <input required maxLength={50} value={recipientName} onChange={(event) => setRecipientName(event.target.value)} placeholder="e.g. Priya" className="mt-2 w-full rounded-2xl border border-white/15 bg-[#1a1230]/70 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20" />
                </label>
              </div>

              <fieldset className="mt-7">
                <legend className="text-sm font-semibold text-amber-50/90">Choose a Diwali wish</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {wishes.map((wish, index) => (
                    <button key={wish.title} type="button" aria-pressed={selectedWish === index} onClick={() => setSelectedWish(index)} className={`rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${selectedWish === index ? "border-amber-300/80 bg-amber-200/15 shadow-[0_0_24px_rgba(251,191,36,0.12)]" : "border-white/10 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.08]"}`}>
                      <span className="flex items-center justify-between gap-2 text-sm font-bold text-amber-100">
                        {wish.title}<span aria-hidden="true" className="text-amber-300">{selectedWish === index ? "✦" : "＋"}</span>
                      </span>
                      <span className="mt-2 block text-xs leading-5 text-amber-50/65">{wish.message}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-[#ffbd55] to-[#f58b52] px-6 py-4 text-sm font-extrabold text-[#451b45] shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 sm:text-base">
                Create my shareable wish <span aria-hidden="true">↗</span>
              </button>

              {generatedUrl && (
                <div className="mt-5 rounded-2xl border border-emerald-200/25 bg-emerald-300/10 p-4" aria-live="polite">
                  <p className="text-sm font-bold text-emerald-100">Your greeting is ready to share!</p>
                  <label htmlFor="diwali-share-url" className="sr-only">Your personalized greeting link</label>
                  <input id="diwali-share-url" readOnly value={generatedUrl} onFocus={(event) => event.currentTarget.select()} className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-xs text-white/80 outline-none" />
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <button type="button" onClick={copyLink} className="flex-1 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#451b45] transition hover:bg-amber-100">Copy link</button>
                    <a target="_blank" rel="noreferrer" href={`https://wa.me/?text=${encodeURIComponent(`${senderName.trim()} sent you a Diwali wish, ${recipientName.trim()}! ✨ ${generatedUrl}`)}`} className="flex-1 rounded-full border border-emerald-100/30 px-4 py-2.5 text-center text-sm font-bold text-emerald-50 transition hover:bg-emerald-200/10">Share on WhatsApp</a>
                  </div>
                  {copyStatus && <p className="mt-3 text-xs text-emerald-100" role="status">{copyStatus}</p>}
                </div>
              )}
            </form>

            <aside className="diwali-card diwali-reveal overflow-hidden rounded-[30px] border border-amber-100/60 bg-[#fff9e9] p-6 text-center text-[#4c2146] shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:p-9 lg:sticky lg:top-28">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-xl text-[#a55739]" aria-hidden="true">✦</div>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#bd7b24]">A little preview</p>
              <p className="mt-5 font-serif text-2xl font-semibold sm:text-3xl">Dear {recipientName.trim() || "Someone special"},</p>
              <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#65465d]">{wishes[selectedWish].message}</p>
              <p className="mt-6 font-serif text-xl font-semibold text-[#9b3b37]">With warm wishes, {senderName.trim() || "Your name"} <span aria-hidden="true">💛</span></p>
              <div className="mx-auto mt-8 flex w-fit items-end gap-3" aria-hidden="true">
                <span className="diwali-mini-diya"><i /></span><span className="diwali-mini-diya diwali-mini-diya-small"><i /></span><span className="diwali-mini-diya"><i /></span>
              </div>
              <p className="mt-5 text-xs font-semibold tracking-wide text-[#9b7a59]">Made with love at Aswatha TVS</p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}