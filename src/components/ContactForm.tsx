"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-clean text-center py-16">
        <div className="w-16 h-16 rounded-full bg-mint flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 16L14 22L24 10" stroke="#00C853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-light text-charcoal mb-2">Message Sent</h3>
        <p className="text-muted">We&apos;ll get back to you within 24 hours. Thank you!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1.5">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted/50 focus:border-fresh focus:ring-2 focus:ring-fresh/10 outline-none transition-all"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-1.5">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted/50 focus:border-fresh focus:ring-2 focus:ring-fresh/10 outline-none transition-all"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted/50 focus:border-fresh focus:ring-2 focus:ring-fresh/10 outline-none transition-all"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted/50 focus:border-fresh focus:ring-2 focus:ring-fresh/10 outline-none transition-all"
            placeholder="(520) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal focus:border-fresh focus:ring-2 focus:ring-fresh/10 outline-none transition-all"
        >
          <option value="">Select a service...</option>
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
          <option value="move-in-out">Move-In / Move-Out</option>
          <option value="deep-clean">Deep Cleaning</option>
          <option value="office">Office Cleaning</option>
          <option value="airbnb">Airbnb Turnover</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted/50 focus:border-fresh focus:ring-2 focus:ring-fresh/10 outline-none transition-all resize-none"
          placeholder="Tell us about your space and cleaning needs..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-fresh px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 hover:bg-fresh/90 transition-all"
      >
        Send Message
      </button>
    </form>
  );
}
