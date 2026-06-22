import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free quote from Spotless Co. Contact us for residential, commercial, and specialty cleaning services in Tucson, AZ.",
};

const contactInfo = [
  {
    label: "Email",
    value: "hello@spotlessco.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5L10 10.5L17 5M3 15H17V5H3V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(520) 555-0123",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 3.5H5C4.4 3.5 4 3.9 4 4.5C4 11 8.5 16 15 16C15.6 16 16 15.6 16 15V12.5L13 11L11.5 12.5C10 12 9 11 8.5 9.5L10 8L7.5 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Tucson, AZ",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 18C10 18 16 13 16 9C16 5.7 13.3 3 10 3C6.7 3 4 5.7 4 9C4 13 10 18 10 18Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Mon-Sat: 7am - 6pm",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let&apos;s make your space"
        highlight="spotless."
        subtitle="Reach out for a free quote, ask a question, or schedule your first cleaning. We respond within 24 hours."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="card-clean">
                  <h2 className="font-display text-2xl font-light text-charcoal mb-8">Send us a message</h2>
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Reveal delay={150}>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-medium text-charcoal mb-6">Get in Touch</h3>
                    <div className="space-y-5">
                      {contactInfo.map((c) => (
                        <div key={c.label} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-mint flex items-center justify-center text-fresh shrink-0">
                            {c.icon}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-muted uppercase tracking-wide">{c.label}</p>
                            <p className="text-sm text-charcoal mt-0.5">{c.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="divider" />

                  <div className="bg-paper rounded-2xl p-6">
                    <h4 className="font-display text-base font-medium text-charcoal mb-3">Service Area</h4>
                    <p className="text-sm text-muted leading-relaxed">
                      We proudly serve all of Tucson and surrounding areas including Oro Valley, Marana, Sahuarita, Vail, and Green Valley.
                    </p>
                  </div>

                  <div className="bg-mint/30 rounded-2xl p-6">
                    <h4 className="font-display text-base font-medium text-charcoal mb-3">Quick Response</h4>
                    <p className="text-sm text-muted leading-relaxed">
                      Most quotes are delivered within 2 hours during business hours. Need something urgent? Call us directly.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
