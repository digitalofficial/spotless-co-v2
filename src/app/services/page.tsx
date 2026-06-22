import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Spotless Co.'s full range of professional cleaning services in Tucson, AZ — residential, commercial, deep clean, move-in/out, office, and Airbnb turnover.",
};

const services = [
  {
    title: "Residential Cleaning",
    desc: "Weekly, biweekly, or monthly home cleaning customized for your family and lifestyle. Kitchens, bathrooms, living areas, and more.",
    href: "/services/residential",
    tag: "Most Popular",
  },
  {
    title: "Commercial Cleaning",
    desc: "Reliable cleaning for offices, retail spaces, and medical facilities. Keep your business looking professional every day.",
    href: "/services/commercial",
    tag: "Business",
  },
  {
    title: "Move-In / Move-Out",
    desc: "Start fresh in a new space or leave your old one sparkling. A complete deep clean designed for moving transitions.",
    href: "/services/move-in-out",
    tag: "One-Time",
  },
  {
    title: "Deep Cleaning",
    desc: "An intensive, top-to-bottom cleaning that tackles every corner, appliance, and hidden surface in your home.",
    href: "/services/deep-clean",
    tag: "Intensive",
  },
  {
    title: "Office Cleaning",
    desc: "Regular workspace maintenance that keeps your office fresh, organized, and ready for productive days.",
    href: "/services/office",
    tag: "Recurring",
  },
  {
    title: "Airbnb Turnover",
    desc: "Quick, thorough cleanings between guests so your short-term rental earns five-star reviews every time.",
    href: "/services/airbnb-turnover",
    tag: "Hospitality",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything you need,"
        highlight="sparkling clean."
        subtitle="From weekly home maintenance to one-time deep cleans, we have a service that fits your space and schedule."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 80}>
                <Link href={s.href} className="card-clean block h-full group">
                  <span className="inline-block rounded-full bg-mint px-3 py-1 text-[10px] font-semibold text-fresh tracking-wide uppercase mb-4">
                    {s.tag}
                  </span>
                  <h3 className="font-display text-xl font-medium text-charcoal mb-3 group-hover:text-fresh transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-fresh">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-paper">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-4">
              Not sure which service? <span className="text-fresh font-light">Let&apos;s talk.</span>
            </h2>
            <p className="text-muted mb-8">Reach out and we&apos;ll recommend the perfect cleaning plan for your space.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-fresh px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all"
            >
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
