import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Bubbles from "@/components/Bubbles";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Spotless Co. — Tucson's trusted cleaning service. Our mission, values, and the team behind every spotless space.",
};

const values = [
  {
    title: "Integrity",
    desc: "We treat your home like our own. Honest pricing, transparent communication, and no hidden fees — ever.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    desc: "From plant-based products to reusable microfiber cloths, we minimize our environmental footprint at every step.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22V12M12 12C12 8 16 4 20 4C20 8 16 12 12 12ZM12 12C12 8 8 4 4 4C4 8 8 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    desc: "We don't cut corners — we clean them. Every visit follows a detailed checklist and quality inspection.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14.5 8.5L22 9.5L16.5 14.5L18 22L12 18.5L6 22L7.5 14.5L2 9.5L9.5 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "Locally owned and operated in Tucson. We invest in our team and give back to the community we serve.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 20C2 17 5 14.5 9 14.5C10.2 14.5 11.3 14.7 12.3 15.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 20C22 17 19 14.5 17 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const team = [
  { name: "Maria S.", role: "Founder & Lead Cleaner", years: "8 years in the industry" },
  { name: "Carlos R.", role: "Operations Manager", years: "5 years with Spotless Co." },
  { name: "Elena T.", role: "Team Lead — Residential", years: "4 years with Spotless Co." },
  { name: "David M.", role: "Team Lead — Commercial", years: "3 years with Spotless Co." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The people behind"
        highlight="the sparkle."
        subtitle="We're a Tucson-based cleaning company with one mission: to give you back your time in a space that feels fresh and renewed."
      />

      {/* Mission */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">Our Mission</p>
                <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-6">
                  Clean spaces, <span className="text-fresh font-light">clear minds</span>
                </h2>
                <div className="space-y-4 text-sm text-muted leading-relaxed">
                  <p>
                    Spotless Co. was founded on a simple belief: everyone deserves to come home to a clean space. What started as a one-woman operation has grown into Tucson&apos;s most trusted cleaning team — but our values haven&apos;t changed.
                  </p>
                  <p>
                    We use eco-friendly, plant-based products that are safe for your family and pets. Every member of our team is background-checked, professionally trained, and genuinely passionate about what they do.
                  </p>
                  <p>
                    From weekly home maintenance to commercial contracts, we approach every job with the same care and attention to detail. Because a clean space isn&apos;t a luxury — it&apos;s a foundation for a better life.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative bg-mint/30 rounded-3xl p-10 lg:p-14 overflow-hidden">
                <Bubbles />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-fresh shadow-sm">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14 4V8M14 20V24M4 14H8M20 14H24M7 7L10 10M18 18L21 21M21 7L18 10M10 18L7 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-extralight text-charcoal">2,000+</p>
                      <p className="text-sm text-muted">Homes cleaned</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-fresh shadow-sm">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14 4L17 11L24 12L19 17L20 24L14 21L8 24L9 17L4 12L11 11L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-extralight text-charcoal">5.0</p>
                      <p className="text-sm text-muted">Average rating</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-fresh shadow-sm">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M9 14L12.5 17.5L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-extralight text-charcoal">100%</p>
                      <p className="text-sm text-muted">Satisfaction guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">Our Values</p>
              <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal">
                What we <span className="text-fresh font-light">stand for</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-clean h-full">
                  <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center text-fresh mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-display text-lg font-medium text-charcoal mb-2">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">Our Team</p>
              <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal">
                Meet the <span className="text-fresh font-light">crew</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="card-clean text-center">
                  <div className="w-20 h-20 rounded-full bg-mint flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl font-extralight text-fresh">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-medium text-charcoal">{t.name}</h3>
                  <p className="text-sm text-fresh mt-1">{t.role}</p>
                  <p className="text-xs text-muted mt-1">{t.years}</p>
                </div>
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
              Ready to experience the <span className="text-fresh font-light">difference</span>?
            </h2>
            <p className="text-muted mb-8">Join the thousands of Tucson residents who trust Spotless Co.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-fresh px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
