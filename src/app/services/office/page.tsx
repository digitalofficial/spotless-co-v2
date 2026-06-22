import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Office Cleaning",
  description:
    "Regular office and workspace maintenance in Tucson, AZ. Keep your team productive with a clean, organized environment.",
};

const included = [
  "Desk and workstation surface sanitization",
  "Keyboard, phone, and shared device wipe-down",
  "Break room and kitchenette cleaning",
  "Restroom deep clean and restocking",
  "Trash and recycling collection",
  "Vacuuming carpet and hard floor mopping",
  "Conference room table and chair cleaning",
  "Entryway and lobby upkeep",
  "Glass partition and door cleaning",
  "High-touch point disinfection (handles, switches, railets)",
];

const whyChoose = [
  {
    title: "Zero Disruption",
    desc: "We schedule cleaning sessions outside business hours so your team never misses a beat.",
  },
  {
    title: "Healthier Workspace",
    desc: "Regular disinfection reduces sick days and creates a more comfortable environment for your team.",
  },
  {
    title: "Dedicated Account Manager",
    desc: "One point of contact who knows your space, your standards, and your schedule inside and out.",
  },
];

export default function OfficePage() {
  return (
    <>
      <PageHero
        eyebrow="Office Cleaning"
        title="A clean office,"
        highlight="a focused team."
        subtitle="Regular workspace maintenance that keeps your office fresh, sanitized, and ready for productive days."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">What&apos;s Included</p>
                <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-8">
                  Workspace <span className="text-fresh font-light">essentials</span>
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
                <h3 className="font-display text-xl font-medium text-charcoal mb-4">Service Schedules</h3>
                <div className="space-y-4">
                  {[
                    { name: "Daily", desc: "High-traffic offices that need daily upkeep" },
                    { name: "3x per Week", desc: "Balanced maintenance for mid-size teams" },
                    { name: "Weekly", desc: "Ideal for smaller offices and co-working spaces" },
                  ].map((opt) => (
                    <div key={opt.name} className="p-4 rounded-xl border border-border bg-white hover:border-fresh/50 transition-colors">
                      <p className="font-medium text-charcoal">{opt.name}</p>
                      <p className="text-xs text-muted mt-1">{opt.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="mt-6 block text-center rounded-full bg-fresh px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
                  Get a Custom Plan
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
                Your team will <span className="text-fresh font-light">notice</span>
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
              Ready for a cleaner office?
            </h2>
            <p className="text-muted mb-8">Get a tailored office cleaning plan for your Tucson workspace.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-fresh px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
