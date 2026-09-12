export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  coverImage: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-to-choose-your-first-tvs-bike",
    title: "How to choose your first TVS bike",
    excerpt: "A practical guide to compare performance, comfort, and upkeep before you buy your next two-wheeler.",
    category: "Buying Guide",
    readTime: "4 min read",
    author: "Aswatha TVS Team",
    date: "June 14, 2026",
    coverImage: "/img/HERO/0.webp",
    content: [
      "Choosing your first motorcycle or scooter is more than comparing engine size or looks. The best choice is the one that fits your daily routine, comfort needs, and budget.",
      "Start by listing how you ride most often: city commutes, weekend rides, family travel, or a mix of all three. If you spend most of your time in traffic, a lightweight scooter or a commuter bike with easy handling will make daily riding far more comfortable.",
      "Next, think about seat comfort, mileage, maintenance, and after-sales support. A bike that is easy to maintain and reliable will give you better long-term value than a model that looks impressive on paper but feels inconvenient in real use.",
      "At Aswatha TVS, we help riders compare models based on their actual needs, so the final decision feels confident, practical, and stress-free.",
    ],
  },
  {
    slug: "five-ways-to-keep-your-bike-road-ready",
    title: "Five ways to keep your bike road-ready",
    excerpt: "Small maintenance habits can improve mileage, safety, and long-term performance with less hassle.",
    category: "Maintenance",
    readTime: "3 min read",
    author: "Aswatha TVS Team",
    date: "May 28, 2026",
    coverImage: "/img/HERO/1.webp",
    content: [
      "Regular care is one of the easiest ways to extend your bike's life. A few simple checks can help prevent unnecessary breakdowns and keep your rides smoother.",
      "Inspect tyre pressure frequently, especially before long distances or seasonal changes. Proper pressure improves grip, handling, and efficiency.",
      "Keep an eye on chain lubrication, brake performance, and engine oil levels. These are the components most affected by daily wear and dust.",
      "Clean your bike regularly and schedule periodic service checks. A maintained motorcycle not only performs better but also stays safer for every ride.",
    ],
  },
  {
    slug: "why-riders-love-tvs-technology",
    title: "Why riders love TVS technology",
    excerpt: "From efficient engines to smarter safety features, TVS continues to build bikes that balance power and practicality.",
    category: "Brand Story",
    readTime: "5 min read",
    author: "Aswatha TVS Team",
    date: "April 16, 2026",
    coverImage: "/img/HERO/2.webp",
    content: [
      "TVS has built its reputation on engineering that is practical, efficient, and rider-friendly. Many riders appreciate how the brand balances performance with everyday usability.",
      "Features such as refined suspension, responsive braking systems, and fuel-efficient engine setups help riders feel more comfortable on both city streets and longer journeys.",
      "The design language is also a major part of the appeal. TVS motorcycles often feel sporty without sacrificing comfort, making them suitable for both commuting and weekend adventures.",
      "At Aswatha TVS, we showcase models that reflect this balance of performance, premium features, and reliability.",
    ],
  },
];
