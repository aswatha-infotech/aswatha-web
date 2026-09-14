import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aswatha TVS | Premium Ride Experience",
  description: "Premium Two Wheeler Showroom in Coimbatore | Aswatha TVS",
  icons: {
    icon: [
      { url: "/img/LOGO/favicon/favicon.ico", rel: "icon" },
      { url: "/img/LOGO/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/img/LOGO/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/img/LOGO/favicon/favicon.ico",
    apple: "/img/LOGO/favicon/apple-touch-icon.png",
  },
  manifest: "/img/LOGO/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
