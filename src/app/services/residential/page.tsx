import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Residential Cleaning",
  description:
    "Weekly, biweekly, and monthly home cleaning services in Tucson, AZ. Eco-friendly products, trusted professionals, and a spotless home every time.",
};

const included = [
  "Kitchen counters, stovetop, and sink deep clean",
  "Bathroom sanitization — toilets, showers, mirrors",
  "Dusting all surfaces, shelves, and ceiling fans",
  "Vacuuming and mopping all floors",
  "Bed making and linen straightening",
  "Trash removal and bag replacement",
  "Baseboard and light switch wipe-down",
  "Interior window sill and ledge cleaning",
  "Appliance exterior polishing",
  "Spot-clean walls and door handles",
];

const whyChoose = [
  {
    title: "Customized Plans",
    desc: "We tailor each visit to your home's unique layout, priorities, and preferences. No cookie-cutter cleaning here.",
  },
  {
    title: "Consistent Team",
    desc: "The same trusted cleaner visits each time, so they learn your home and deliver consistent results.",
  },
  {
    title: "Flexible Frequency",
    desc: "Choose weekly, biweekly, or monthly visits. Adjust anytime — no long-term contracts required.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential Cleaning"
        title="Your home,"
        highlight="always spotless."
        subtitle="Recurring home cleaning tailored to your family's needs. Walk through the door to a fresh, clean space every time."
      />

      {/* What's Included */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">What&apos;s Included</p>
                <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-8">
                  A thorough clean, <span className="text-fresh font-light">every visit</span>
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
                <h3 className="font-display text-xl font-medium text-charcoal mb-6">Choose Your Frequency</h3>
                <div className="space-y-4">
                  {["Weekly", "Biweekly", "Monthly"].map((freq) => (
                    <div key={freq} className="flex items-center justify-between p-4 rounded-xl border border-border bg-white hover:border-fresh/50 transition-colors">
                      <div>
                        <p className="font-medium text-charcoal">{freq}</p>
                        <p className="text-xs text-muted mt-0.5">
                          {freq === "Weekly" && "Best value — most consistent clean"}
                          {freq === "Biweekly" && "Our most popular option"}
                          {freq === "Monthly" && "Great for maintained homes"}
                        </p>
                      </div>
                      {freq === "Biweekly" && (
                        <span className="rounded-full bg-fresh px-3 py-1 text-[10px] font-bold text-white uppercase">Popular</span>
                      )}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block text-center rounded-full bg-fresh px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">Why Spotless Co.</p>
              <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal">
                Cleaning that fits <span className="text-fresh font-light">your life</span>
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

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-4">
              Ready for a cleaner home?
            </h2>
            <p className="text-muted mb-8">Book your first residential cleaning and see the Spotless Co. difference.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-fresh px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all"
            >
              Schedule a Cleaning
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
