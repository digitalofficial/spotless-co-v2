import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what Tucson residents and businesses say about Spotless Co. 5-star reviews from real clients.",
};

const featured = {
  text: "We've tried multiple cleaning services over the years, and Spotless Co. is hands-down the best. The team is professional, thorough, and incredibly consistent. Our home has never looked better.",
  name: "Jennifer & Mark P.",
  location: "Catalina Foothills, Tucson",
  service: "Residential Cleaning",
};

const reviews = [
  {
    text: "Spotless Co. deep cleaned our home before we moved in, and it was truly immaculate. Every cabinet, every corner — they didn't miss a thing.",
    name: "Rachel T.",
    location: "Oro Valley",
    service: "Move-In Cleaning",
  },
  {
    text: "As an Airbnb host, I need reliability. Spotless Co. handles every turnover perfectly. My guests consistently comment on how clean the space is.",
    name: "David L.",
    location: "Downtown Tucson",
    service: "Airbnb Turnover",
  },
  {
    text: "The eco-friendly products they use give me peace of mind with two small kids and a dog. No harsh smells, just a genuinely clean home.",
    name: "Sarah M.",
    location: "Tucson",
    service: "Residential Cleaning",
  },
  {
    text: "Our office has never been cleaner. They come after hours and we arrive every morning to a fresh, sanitized workspace. Highly recommend.",
    name: "Tom B.",
    location: "Tucson Business Park",
    service: "Office Cleaning",
  },
  {
    text: "I was skeptical about hiring a cleaning service, but Spotless Co. exceeded every expectation. They're now a permanent part of our monthly routine.",
    name: "Linda K.",
    location: "Marana",
    service: "Residential Cleaning",
  },
  {
    text: "The move-out cleaning saved my security deposit! My landlord couldn't believe how clean the apartment looked. Worth every penny.",
    name: "Chris N.",
    location: "Sam Hughes, Tucson",
    service: "Move-Out Cleaning",
  },
  {
    text: "Professional, punctual, and incredibly detail-oriented. The same cleaner comes each time and knows exactly what our home needs.",
    name: "Angela R.",
    location: "Sahuarita",
    service: "Residential Cleaning",
  },
  {
    text: "They cleaned our medical office to a standard that exceeded our compliance requirements. Reliable schedule and a great team to work with.",
    name: "Dr. Patel",
    location: "Tucson Medical District",
    service: "Commercial Cleaning",
  },
  {
    text: "Booked a one-time deep clean and immediately signed up for biweekly service. The difference in our home is night and day. Incredible work.",
    name: "Mike & Susan H.",
    location: "Green Valley",
    service: "Deep Cleaning",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#00C853">
          <path d="M8 1.5L9.8 5.8L14.5 6.3L11 9.5L12 14.2L8 11.8L4 14.2L5 9.5L1.5 6.3L6.2 5.8L8 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Don't take our word"
        highlight="for it."
        subtitle="See what Tucson residents and businesses say about their Spotless Co. experience."
      />

      {/* Featured Review */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <div className="card-clean text-center py-12 lg:py-16 px-8 lg:px-16 border-fresh/20">
              <div className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 text-xs font-semibold text-fresh tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-fresh" />
                Featured Review
              </div>
              <div className="flex items-center justify-center mb-6">
                <Stars />
              </div>
              <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-extralight leading-relaxed text-charcoal">
                &ldquo;{featured.text}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="font-medium text-charcoal">{featured.name}</p>
                <p className="text-sm text-muted">{featured.location}</p>
                <p className="text-xs text-fresh mt-1">{featured.service}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal">
                More from our <span className="text-fresh font-light">clients</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 60}>
                <div className="card-clean h-full flex flex-col">
                  <Stars />
                  <blockquote className="mt-4 text-sm text-charcoal/80 leading-relaxed flex-1">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-sm font-medium text-charcoal">{r.name}</p>
                    <p className="text-xs text-muted">{r.location}</p>
                    <p className="text-xs text-fresh mt-0.5">{r.service}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-4">
              Join our happy clients.
            </h2>
            <p className="text-muted mb-8">Experience the Spotless Co. difference and see why Tucson trusts us.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-fresh px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
