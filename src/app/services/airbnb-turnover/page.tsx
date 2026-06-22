import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Airbnb Turnover Cleaning",
  description:
    "Quick, thorough Airbnb and short-term rental turnover cleaning in Tucson, AZ. Five-star reviews start with a five-star clean.",
};

const included = [
  "Full linen change — beds made with fresh sheets",
  "Bathroom deep clean and towel staging",
  "Kitchen reset — dishes, counters, appliances",
  "Trash removal and bag replacement",
  "Vacuuming and mopping all floors",
  "Surface dusting and high-touch disinfection",
  "Amenity restock check (toiletries, coffee, etc.)",
  "Mirror and glass streak-free cleaning",
  "Patio or balcony sweep (if applicable)",
  "Photo-ready staging and final walkthrough",
];

const whyChoose = [
  {
    title: "Fast Turnaround",
    desc: "We work within tight checkout-to-checkin windows, so your listing is never marked unavailable.",
  },
  {
    title: "Guest-Ready Standard",
    desc: "Our checklist mirrors Airbnb's enhanced cleaning protocol so every guest walks into a perfect space.",
  },
  {
    title: "Reliable Scheduling",
    desc: "Sync with your booking calendar. We show up on time, every turnover, no matter the schedule changes.",
  },
];

export default function AirbnbTurnoverPage() {
  return (
    <>
      <PageHero
        eyebrow="Airbnb Turnover"
        title="Five-star clean,"
        highlight="every guest."
        subtitle="Quick, thorough turnover cleaning for short-term rentals. Your reviews will speak for themselves."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">What&apos;s Included</p>
                <h2 className="font-display text-3xl sm:text-4xl font-extralight text-charcoal mb-8">
                  Guest-ready in <span className="text-fresh font-light">hours</span>
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
                <h3 className="font-display text-xl font-medium text-charcoal mb-4">How It Works</h3>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Share Your Calendar", desc: "Connect your booking schedule so we know every turnover date." },
                    { step: "02", title: "We Handle the Rest", desc: "Our team arrives right after checkout with your custom checklist." },
                    { step: "03", title: "Guest-Ready Confirmation", desc: "You get a notification and photos when the space is ready." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4 p-4 rounded-xl border border-border bg-white">
                      <span className="text-2xl font-display font-extralight text-fresh">{s.step}</span>
                      <div>
                        <p className="font-medium text-charcoal">{s.title}</p>
                        <p className="text-xs text-muted mt-1">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="mt-6 block text-center rounded-full bg-fresh px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
                  Start Turnover Service
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
                Built for <span className="text-fresh font-light">hosts</span>
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
              Your guests deserve the best.
            </h2>
            <p className="text-muted mb-8">Partner with Spotless Co. for reliable Airbnb turnover cleaning in Tucson.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-fresh px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 transition-all">
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
