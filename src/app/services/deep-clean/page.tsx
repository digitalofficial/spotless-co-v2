import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Deep Cleaning",
  description:
    "One-time intensive deep cleaning in Tucson, AZ. Every surface, corner, and appliance gets the Spotless Co. treatment.",
};

const included = [
  "Inside oven, microwave, and refrigerator cleaning",
  "Behind and under major appliances",
  "Tile and grout scrubbing in kitchens and bathrooms",
  "Baseboard, crown molding, and trim detailing",
  "Ceiling fan and light fixture deep clean",
  "Window sill, track, and blind dusting",
  "Cabinet exterior and interior wipe-down",
  "Mattress vacuuming and bed frame dusting",
  "Vent and register cover cleaning",
  "Full floor treatment — vacuum, mop, and polish",
];

const whyChoose = [
  {
    title: "Beyond the Surface",
    desc: "We go where regular cleaning doesn't — behind appliances, inside cabinets, up to ceiling fixtures.",
  },
  {
    title: "Reset Your Home",
    desc: "Perfect as a seasonal refresh or to prepare for a recurring cleaning schedule with a clean baseline.",
  },
  {
    title: "Premium Products",
    desc: "Hospital-grade disinfectants paired with eco-friendly solutions for a safe, thorough deep clean.",
  },
];

export default function DeepCleanPage() {
  return (
    <>
      <PageHero
        eyebrow="Deep Cleaning"
        title="The ultimate"
        highlight="deep clean."
        subtitle="An intensive, one-time cleaning that reaches every corner, crevice, and surface in your home."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">What&apos;s Included</p>
                <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-8">
                  Top to bottom, <span className="text-fresh font-light">inside and out</span>
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
                <h3 className="font-display text-xl font-medium text-charcoal mb-4">Perfect Timing For</h3>
                <div className="space-y-3">
                  {[
                    "Seasonal spring or fall refresh",
                    "Before or after hosting guests",
                    "Post-renovation or construction",
                    "Kickoff before recurring service",
                    "Allergy or asthma relief",
                    "New homeowner baseline clean",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-white">
                      <span className="w-2 h-2 rounded-full bg-fresh" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="mt-6 block text-center rounded-full bg-fresh px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
                  Book a Deep Clean
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
                Deeper than <span className="text-fresh font-light">you&apos;d expect</span>
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
            <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-4">Your home deserves a reset.</h2>
            <p className="text-muted mb-8">Schedule your one-time deep cleaning and experience the difference.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-fresh px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
