"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const services = [
  { name: "Residential Cleaning", href: "/services/residential" },
  { name: "Commercial Cleaning", href: "/services/commercial" },
  { name: "Move-In / Move-Out", href: "/services/move-in-out" },
  { name: "Deep Cleaning", href: "/services/deep-clean" },
  { name: "Office Cleaning", href: "/services/office" },
  { name: "Airbnb Turnover", href: "/services/airbnb-turnover" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors flex items-center gap-1"
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
                  <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-white rounded-2xl border border-border shadow-xl shadow-charcoal/5 p-3 min-w-[240px]">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-charcoal/70 hover:text-charcoal hover:bg-mint/50 rounded-lg transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors">
              About
            </Link>
            <Link href="/reviews" className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors">
              Contact
            </Link>

            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-fresh px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fresh/20 hover:shadow-fresh/30 hover:bg-fresh/90 transition-all"
            >
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4 17H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border/50">
          <div className="px-6 py-6 space-y-1">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-charcoal/70 hover:text-charcoal hover:bg-mint/50 rounded-lg transition-colors"
              >
                {s.name}
              </Link>
            ))}
            <div className="divider my-4" />
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-charcoal/70 hover:text-charcoal rounded-lg">About</Link>
            <Link href="/reviews" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-charcoal/70 hover:text-charcoal rounded-lg">Reviews</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-charcoal/70 hover:text-charcoal rounded-lg">Contact</Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block text-center rounded-full bg-fresh px-6 py-3 text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
