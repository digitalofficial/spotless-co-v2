import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Move-In / Move-Out Cleaning",
  description:
    "Deep cleaning services for move-in and move-out in Tucson, AZ. Leave your old place spotless or start fresh in your new home.",
};

const included = [
  "Full kitchen deep clean — inside cabinets, oven, fridge",
  "Bathroom scrub — tile, grout, fixtures, mirrors",
  "All closets and storage areas wiped down",
  "Baseboard, trim, and door frame cleaning",
  "Light fixture and ceiling fan dusting",
  "Interior window cleaning and track detailing",
  "Wall spot-cleaning and scuff removal",
  "Garage sweeping (if applicable)",
  "All flooring vacuumed, mopped, and polished",
  "Final walkthrough quality check",
];

const whyChoose = [
  {
    title: "Deposit-Ready Clean",
    desc: "Our move-out cleaning is designed to help you get your full security deposit back. We know what landlords look for.",
  },
  {
    title: "Fresh Start Guarantee",
    desc: "Moving in? We make sure every surface is sanitized and sparkling before you unpack the first box.",
  },
  {
    title: "Same-Day Available",
    desc: "Tight timeline? We offer same-day and next-day availability for urgent move cleaning needs.",
  },
];

export default function MoveInOutPage() {
  return (
    <>
      <PageHero
        eyebrow="Move-In / Move-Out"
        title="New chapter,"
        highlight="clean start."
        subtitle="Whether you're moving in or moving out, we make sure every inch of the space is spotless and ready."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">What&apos;s Included</p>
                <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-8">
                  Every corner, <span className="text-fresh font-light">covered</span>
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
                <h3 className="font-display text-xl font-medium text-charcoal mb-4">Move Cleaning Options</h3>
                <div className="space-y-4">
                  {[
                    { name: "Move-Out Clean", desc: "Get your deposit back with a landlord-approved clean" },
                    { name: "Move-In Clean", desc: "Sanitize and prep your new space before unpacking" },
                    { name: "Both (Combo)", desc: "Bundle move-out and move-in for the best value" },
                  ].map((opt) => (
                    <div key={opt.name} className="p-4 rounded-xl border border-border bg-white hover:border-fresh/50 transition-colors">
                      <p className="font-medium text-charcoal">{opt.name}</p>
                      <p className="text-xs text-muted mt-1">{opt.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="mt-6 block text-center rounded-full bg-fresh px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
                  Book Your Move Clean
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
                Stress-free <span className="text-fresh font-light">moving</span>
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
            <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-4">Moving soon?</h2>
            <p className="text-muted mb-8">Let us handle the cleaning so you can focus on the exciting part.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-fresh px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
