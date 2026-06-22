import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Commercial Cleaning",
  description:
    "Professional commercial cleaning services in Tucson, AZ. Offices, retail spaces, and medical facilities kept spotless and sanitary.",
};

const included = [
  "Lobby and reception area cleaning",
  "Restroom deep sanitization and restocking",
  "Break room and kitchen area cleaning",
  "Trash and recycling removal",
  "Floor vacuuming, mopping, and polishing",
  "Glass door and window cleaning",
  "Desk and workspace surface sanitization",
  "High-touch surface disinfection",
  "Carpet spot treatment",
  "Customized cleaning checklist per facility",
];

const whyChoose = [
  {
    title: "After-Hours Service",
    desc: "We clean when your team isn't there, so business operations are never interrupted.",
  },
  {
    title: "Industry Compliance",
    desc: "Medical-grade cleaning protocols available for healthcare and sensitive facilities.",
  },
  {
    title: "Scalable Plans",
    desc: "From single offices to multi-floor buildings, our services grow with your business.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Cleaning"
        title="Professional spaces,"
        highlight="impeccably clean."
        subtitle="Reliable commercial cleaning for offices, retail, and medical facilities across Tucson. First impressions matter."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">What&apos;s Included</p>
                <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-8">
                  A clean that means <span className="text-fresh font-light">business</span>
                </h2>
                <ul className="space-y-4">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-fresh shrink-0 mt-0.5">
                        <path d="M5 10L8.5 13.5L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm text-charcoal/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="bg-paper rounded-2xl p-8 lg:p-10">
                <h3 className="font-display text-xl font-medium text-charcoal mb-4">Facility Types We Serve</h3>
                <div className="space-y-3">
                  {["Office Buildings", "Retail Stores", "Medical Offices", "Restaurants", "Warehouses", "Co-Working Spaces"].map((type) => (
                    <div key={type} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-white">
                      <span className="w-2 h-2 rounded-full bg-fresh" />
                      <span className="text-sm text-charcoal">{type}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block text-center rounded-full bg-fresh px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all"
                >
                  Request a Proposal
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">Why Spotless Co.</p>
              <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal">
                Built for <span className="text-fresh font-light">business</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="card-clean h-full">
                  <h3 className="font-display text-lg font-medium text-charcoal mb-3">{r.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-4">
              Elevate your workspace.
            </h2>
            <p className="text-muted mb-8">Get a custom commercial cleaning proposal for your Tucson facility.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-fresh px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
