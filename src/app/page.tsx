import Link from "next/link";
import Reveal from "@/components/Reveal";
import Bubbles from "@/components/Bubbles";

const services = [
  {
    title: "Residential Cleaning",
    desc: "Weekly, biweekly, or monthly home cleaning tailored to your lifestyle.",
    href: "/services/residential",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14L14 5L24 14V24H18V18H10V24H4V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Commercial Cleaning",
    desc: "Keep your business spotless with scheduled commercial services.",
    href: "/services/commercial",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6V4H18V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 14H24" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Move-In / Move-Out",
    desc: "Start fresh or leave it spotless with our move cleaning service.",
    href: "/services/move-in-out",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12H18M10 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 20V24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Deep Cleaning",
    desc: "Intensive one-time cleaning that reaches every corner and surface.",
    href: "/services/deep-clean",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4V8M14 20V24M4 14H8M20 14H24M7 7L10 10M18 18L21 21M21 7L18 10M10 18L7 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Office Cleaning",
    desc: "Consistent workspace maintenance so your team can focus.",
    href: "/services/office",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Airbnb Turnover",
    desc: "Quick, thorough turnovers between guests for five-star reviews.",
    href: "/services/airbnb-turnover",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L4 12V24H11V18H17V24H24V12L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 10L14 8L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const trustItems = [
  "Fully Insured",
  "Bonded & Licensed",
  "Eco-Friendly Products",
  "Background-Checked Team",
  "Satisfaction Guaranteed",
  "Same-Week Availability",
  "Locally Owned",
  "5-Star Rated",
];

const reasons = [
  {
    title: "Eco-Friendly Products",
    desc: "We use plant-based, non-toxic cleaning solutions that are safe for your family, pets, and the planet.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22V12M12 12C12 8 16 4 20 4C20 8 16 12 12 12ZM12 12C12 8 8 4 4 4C4 8 8 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Trained Professionals",
    desc: "Every cleaner is background-checked, trained, and committed to delivering impeccable results every visit.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 20C4 16.7 7.6 14 12 14C16.4 14 20 16.7 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Flexible Scheduling",
    desc: "Book weekly, biweekly, monthly, or one-time cleans. We work around your schedule, not the other way around.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9H21M8 2V5M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const stats = [
  { value: "2,000+", label: "Homes Cleaned" },
  { value: "5.0", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "50+", label: "5-Star Reviews" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative bg-paper pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=900&fit=crop"
          alt="Clean bright modern home interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />

        <Bubbles />
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 text-xs font-semibold text-fresh tracking-wide uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-fresh animate-pulse" />
            Tucson&apos;s Trusted Cleaning Service
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-extralight leading-[1.05] tracking-tight text-charcoal">
            A cleaner home.
            <br />
            <span className="text-fresh font-light">A clearer mind.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Professional cleaning services in Tucson, AZ. Eco-friendly products,
            vetted professionals, and a sparkling clean you can count on.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-fresh px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-fresh/20 hover:shadow-fresh/30 hover:bg-fresh/90 transition-all"
            >
              Get a Free Quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-charcoal hover:border-fresh hover:text-fresh transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Strip Marquee ───────────────────── */}
      <section className="border-y border-border/50 bg-white py-4 overflow-hidden">
        <div className="marquee-track">
          {[...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-fresh shrink-0" />
              <span className="text-sm font-medium text-muted">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Bento Grid ───────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">What We Offer</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extralight text-charcoal">
                Cleaning services for <span className="text-fresh font-light">every need</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 80}>
                <Link href={s.href} className="card-clean block h-full group">
                  <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center text-fresh mb-5 group-hover:bg-fresh group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="font-display text-lg font-medium text-charcoal mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-fresh opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6H9M9 6L6.5 3.5M9 6L6.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Spotless ──────────────────────────── */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-fresh tracking-wider uppercase mb-3">Why Spotless Co.</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extralight text-charcoal">
                The clean you <span className="text-fresh font-light">deserve</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-mint flex items-center justify-center text-fresh mx-auto mb-5">
                    {r.icon}
                  </div>
                  <h3 className="font-display text-lg font-medium text-charcoal mb-3">{r.title}</h3>
                  <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial Block ─────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <div className="card-clean text-center py-12 lg:py-16 px-8 lg:px-16 border-fresh/20">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#00C853">
                    <path d="M10 1.5L12.5 7L18.5 7.5L14 11.5L15.5 17.5L10 14.5L4.5 17.5L6 11.5L1.5 7.5L7.5 7L10 1.5Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-extralight leading-relaxed text-charcoal">
                &ldquo;Spotless Co. transformed our home. Every surface gleams, and they use products that are safe for our kids and pets. We couldn&apos;t be happier.&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="font-medium text-charcoal">Sarah M.</p>
                <p className="text-sm text-muted">Homeowner, Tucson AZ</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────── */}
      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl sm:text-5xl font-extralight text-fresh">{s.value}</p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-mint/30 overflow-hidden">
        <Bubbles />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extralight text-charcoal">
              Ready for a <span className="text-fresh font-light">spotless</span> space?
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto">
              Get a free, no-obligation quote today. We&apos;ll have your space shining in no time.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-fresh px-10 py-4 text-sm font-semibold text-white shadow-xl shadow-fresh/20 hover:shadow-fresh/30 hover:bg-fresh/90 transition-all"
              >
                Get Your Free Quote
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
