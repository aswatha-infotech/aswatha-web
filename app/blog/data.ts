export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "list"; items: string[]; ordered?: boolean };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  coverImage: string;
  content: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "aswatha-tvs-a-new-10000-sq-ft-tvs-showroom-in-coimbatore",
    title: "Aswatha TVS – A New 10,000 Sq. Ft. TVS Showroom in Coimbatore",
    excerpt: "Coimbatore is getting a new destination for TVS bikes and scooters, with a spacious 10,000 sq. ft. showroom, customer-first service and pre-launch bookings now open.",
    category: "Showroom Launch",
    readTime: "6 min read",
    author: "Aswatha TVS Team",
    date: "Sep 14, 2026",
    coverImage: "/img/HERO/0.webp",
    content: [
      { type: "heading", text: "A New TVS Experience Is Coming to Coimbatore", level: 2 },
      { type: "paragraph", text: "Coimbatore is getting ready for a new destination for TVS bikes and scooters – Aswatha TVS." },
      { type: "paragraph", text: "With a spacious 10,000 sq. ft. showroom, Aswatha TVS is being created with a simple goal: to give customers a comfortable, convenient and complete TVS buying experience under one roof." },
      { type: "paragraph", text: "Located at Sungam, Coimbatore, the new showroom is designed to bring the complete TVS experience closer to customers across Sungam, Chinniyampalayam, Kalapatti, Chettipalayam and surrounding areas." },
      { type: "paragraph", text: "Whether you are planning to buy your first two-wheeler, upgrade your existing vehicle or simply explore the latest TVS range, Aswatha TVS is preparing to welcome you with a customer-first approach." },
      { type: "heading", text: "A Spacious 10,000 Sq. Ft. Showroom", level: 2 },
      { type: "paragraph", text: "A great vehicle deserves a great place to experience it." },
      { type: "paragraph", text: "The upcoming 10,000 sq. ft. Aswatha TVS showroom is designed to provide customers with a spacious environment where they can comfortably explore TVS motorcycles, scooters and electric two-wheelers." },
      { type: "paragraph", text: "From discovering your preferred model to understanding features, comparing options and taking the next step towards booking, the showroom is planned around making the customer journey simple and convenient." },
      { type: "paragraph", text: "Our aim is to create more than just a showroom. We want to create a place where customers can confidently explore, experience and choose their perfect TVS vehicle." },
      { type: "heading", text: "Your Local TVS Destination in Coimbatore", level: 2 },
      { type: "paragraph", text: "Aswatha TVS is being established to serve customers across key parts of Coimbatore." },
      { type: "list", items: ["Sungam", "Chinniyampalayam", "Kalapatti", "Chettipalayam"] },
      { type: "paragraph", text: "With a strong focus on accessibility and customer service, Aswatha TVS aims to become a trusted destination for customers looking for TVS bikes, scooters and electric two-wheelers in Coimbatore." },
      { type: "heading", text: "Pre-Launch Booking Is Open at Aswatha TVS!", level: 3 },
      { type: "paragraph", text: "Customers can now register their interest and make their pre-launch booking for their preferred TVS vehicle." },
      { type: "heading", text: "Book Your TVS & Get a Free Gold Coin", level: 3 },
      { type: "paragraph", text: "For a limited period, customers who book a vehicle during the Aswatha TVS pre-launch period can receive a free gold coin at the time of delivery, subject to applicable offer terms." },
      { type: "paragraph", text: "It is our way of making your new-vehicle journey even more memorable." },
      { type: "paragraph", text: "Your favourite TVS. Your new beginning. And a special gift from Aswatha TVS." },
      { type: "paragraph", text: "Don't wait until the last minute. Pre-launch bookings are open now." },
      { type: "heading", text: "Why Choose Aswatha TVS?", level: 2 },
      { type: "paragraph", text: "At Aswatha TVS, we believe buying a two-wheeler should be easy, transparent and enjoyable." },
      { type: "list", items: ["10,000 Sq. Ft. Showroom", "Wide Range of TVS Vehicles", "Customer-Focused Assistance", "Test Ride Assistance", "Transparent Buying Process", "Finance & Exchange Assistance"] },
      { type: "paragraph", text: "A spacious destination designed to give customers a comfortable TVS experience." },
      { type: "paragraph", text: "Explore motorcycles, scooters and electric two-wheelers under one roof." },
      { type: "paragraph", text: "Get guidance based on your budget, lifestyle, daily commute and riding requirements." },
      { type: "paragraph", text: "Experience your preferred vehicle before making your final decision." },
      { type: "paragraph", text: "Clear guidance throughout enquiry, selection, booking and delivery." },
      { type: "paragraph", text: "Get support in understanding available purchase, finance and exchange options." },
      { type: "heading", text: "Be Among the First to Experience Aswatha TVS", level: 2 },
      { type: "paragraph", text: "A new showroom is coming to Coimbatore, and the journey has already begun." },
      { type: "paragraph", text: "With its 10,000 sq. ft. showroom in Sungam, customer-first approach and a wide range of TVS vehicles, Aswatha TVS is set to become a new destination for two-wheeler customers in Coimbatore." },
      { type: "paragraph", text: "And with pre-launch bookings now open, this is the right time to reserve your favourite TVS vehicle and take advantage of the limited-period free gold coin offer." },
      { type: "heading", text: "Ready to Book Your Favourite TVS?", level: 3 },
      { type: "paragraph", text: "Visit or contact Aswatha TVS to know more about pre-launch bookings, available models, offers and delivery details." },
      { type: "paragraph", text: "Book Now: 82700 15000" },
      { type: "paragraph", text: "Aswatha TVS 1274 Trichy Road, Sungam Coimbatore – 641018" },
      { type: "paragraph", text: "Pre-Launch Booking Open Now" },
      { type: "heading", text: "Book Your Favourite TVS. Get Your Free Gold Coin.", level: 3 },
      { type: "paragraph", text: "Only for a Limited Period." },
      { type: "paragraph", text: "Aswatha TVS – Your Perfect Ride, Our Promise." },
      { type: "paragraph", text: "Offer terms, eligibility, vehicle availability and delivery timelines may apply. Please contact Aswatha TVS for the latest offer details." },
    ],
  },
  {
    slug: "five-ways-to-keep-your-bike-road-ready",
    title: "Five ways to keep your bike road-ready",
    excerpt: "Small maintenance habits can improve mileage, safety, and long-term performance with less hassle.",
    category: "Maintenance",
    readTime: "3 min read",
    author: "Aswatha TVS Team",
    date: "Sep 10, 2026",
    coverImage: "/img/HERO/1.webp",
    content: [
      { type: "paragraph", text: "Regular care is one of the easiest ways to extend your bike's life. A few simple checks can help prevent unnecessary breakdowns and keep your rides smoother." },
      { type: "heading", text: "Essential checks every rider should do", level: 2 },
      { type: "list", items: ["Inspect tyre pressure before long rides", "Lubricate the chain and clean the drivetrain", "Check brake feel and fluid condition", "Monitor engine oil and coolant levels"] },
      { type: "paragraph", text: "Inspect tyre pressure frequently, especially before long distances or seasonal changes. Proper pressure improves grip, handling, and efficiency." },
      { type: "paragraph", text: "Keep an eye on chain lubrication, brake performance, and engine oil levels. These are the components most affected by daily wear and dust." },
      { type: "paragraph", text: "Clean your bike regularly and schedule periodic service checks. A maintained motorcycle not only performs better but also stays safer for every ride." },
    ],
  },
  {
    slug: "why-riders-love-tvs-technology",
    title: "Why riders love TVS technology",
    excerpt: "From efficient engines to smarter safety features, TVS continues to build bikes that balance power and practicality.",
    category: "Brand Story",
    readTime: "5 min read",
    author: "Aswatha TVS Team",
    date: "Sep 11, 2026",
    coverImage: "/img/HERO/2.webp",
    content: [
      { type: "paragraph", text: "TVS has built its reputation on engineering that is practical, efficient, and rider-friendly. Many riders appreciate how the brand balances performance with everyday usability." },
      { type: "heading", text: "What makes TVS stand out", level: 2 },
      { type: "list", items: ["Responsive handling for city and highway roads", "Fuel-efficient engines for everyday use", "Comfort-focused ergonomics and suspension", "Smart design that looks sporty without being harsh"] },
      { type: "paragraph", text: "Features such as refined suspension, responsive braking systems, and fuel-efficient engine setups help riders feel more comfortable on both city streets and longer journeys." },
      { type: "paragraph", text: "The design language is also a major part of the appeal. TVS motorcycles often feel sporty without sacrificing comfort, making them suitable for both commuting and weekend adventures." },
      { type: "paragraph", text: "At Aswatha TVS, we showcase models that reflect this balance of performance, premium features, and reliability." },
    ],
  },
];
