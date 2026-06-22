import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Spotless Co. | Professional Cleaning in Tucson, AZ",
    template: "%s | Spotless Co.",
  },
  description:
    "Spotless Co. delivers premium residential and commercial cleaning services across Tucson, AZ. Eco-friendly products, insured team, 100% satisfaction guaranteed.",
  keywords: [
    "cleaning service Tucson",
    "house cleaning Tucson AZ",
    "commercial cleaning Tucson",
    "move out cleaning Tucson",
    "deep cleaning Tucson",
    "Airbnb cleaning Tucson",
    "office cleaning Tucson",
  ],
  openGraph: {
    title: "Spotless Co. | Professional Cleaning in Tucson, AZ",
    description:
      "Premium residential and commercial cleaning services across Tucson, AZ.",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  name: "Spotless Co.",
  description:
    "Professional residential and commercial cleaning services in Tucson, AZ.",
  url: "https://spotlessco.com",
  telephone: "(520) 555-0123",
  email: "hello@spotlessco.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 N Stone Ave",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    postalCode: "85701",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Tucson",
    sameAs: "https://en.wikipedia.org/wiki/Tucson,_Arizona",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "200",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cloud font-body text-charcoal antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
