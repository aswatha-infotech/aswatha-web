import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DiwaliWishExperience from "../components/DiwaliWishExperience";

type DiwaliWishPageProps = {
  searchParams: Promise<{ from?: string; to?: string; wish?: string }>;
};

export async function generateMetadata({ searchParams }: DiwaliWishPageProps): Promise<Metadata> {
  const { from, to, wish } = await searchParams;
  const wishIndex = Number(wish);
  const selectedWish = Number.isInteger(wishIndex) ? (await import("./data")).wishes[wishIndex] : undefined;

  if (from?.trim() && to?.trim() && selectedWish) {
    const title = `${from.trim()} sent ${to.trim()} a Diwali wish!`;
    const description = selectedWish.message;

    return {
      title,
      description,
      openGraph: { title, description, type: "website" },
      twitter: { card: "summary", title, description },
    };
  }

  return {
    title: "Share a Diwali Wish | Aswatha TVS",
    description: "Create a personalized Diwali greeting and share a festive wish with someone special.",
  };
};

export default function DiwaliWishesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[76px] sm:pt-[88px]">
        <DiwaliWishExperience />
      </main>
      <Footer />
    </>
  );
}